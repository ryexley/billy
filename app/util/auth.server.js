import { createCookieSessionStorage, redirect } from "remix"
import { createClient } from "@supabase/supabase-js"
import { app as urls } from "~/urls"
import { isEmpty, isNotEmpty } from "~/util"

export async function login({
  email,
  password
}) {
  const supabase = createClient(
    process.env.SUPABASE_API_URL,
    process.env.SUPABASE_API_KEY
  )

  const { user, error } = await supabase.auth.signIn({
    email,
    password
  })

  if (isNotEmpty(error)) {
    return null
  }

  return user
}

const sessionSecret = process.env.SESSION_SECRET

if (!sessionSecret) {
  throw new Error("SESSION_SECRET environment variable must be set")
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "billy-session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
})

export function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"))
}

export async function getUserId(request) {
  const session = await getUserSession(request)
  const userId = session.get("userId")

  if (isEmpty(userId)) {
    return null
  }

  return userId
}

export async function requireUserId(request, redirectTo = urls.home) {
  const session = await getUserSession(request)
  const userId = session.get("userId")

  if (isEmpty(userId)) {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo]
    ])

    throw redirect(`${urls.login}?${searchParams}`)
  }

  return userId
}

export async function createUserSession({ userId, redirectTo }) {
  const session = await storage.getSession()
  session.set("userId", userId)

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  })
}
