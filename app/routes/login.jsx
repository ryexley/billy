import { Link, useSearchParams, useActionData } from "remix"
import { Flex } from "~/components/flex"
import { Alert, variants as alertType } from "~/components/alert"
import { TextInput, PasswordInput, inputState } from "~/components/text-input"
import { Button } from "~/components/button"
import { login as validators } from "~/validation"
import { login, createUserSession } from "~/util/auth.server"
import { app as urls } from "~/urls"
import { isEmpty, isNotEmpty } from "~/util"
import { styled } from "~/styles"

export function meta() {
  return {
    title: "Login / Billy",
    description: "Login to manage your bills and payments"
  }
}

const validateEmail = email => {
  const { error } = validators.email.validate(email)

  return isNotEmpty(error) ? error.message : false
}

const validatePassword = password => {
  const { error } = validators.password.validate(password)

  return isNotEmpty(error) ? error.message : false
}

export async function action({ request }) {
  const form = await request.formData()
  const email = form.get("email")
  const password = form.get("password")
  const redirectTo = form.get("redirectTo")

  const credentials = { email, password }
  const errors = {
    email: validateEmail(email),
    password: validatePassword(password)
  }

  if (Object.values(errors).some(Boolean)) {
    return {
      errors,
      credentials
    }
  }

  const user = await login({ email, password })

  if (isEmpty(user)) {
    return {
      credentials,
      formError: "Sorry, that email/password combination didn't work."
    }
  }

  return createUserSession({
    userId: user.id,
    redirectTo
  })
}

const Box = styled(Flex, {
  margin: "$6 auto",
  width: "$breaks$s"
})

const FormHeading = styled("h1", {
  margin: "0 0.5rem"
})

const LoginForm = styled("form", {
  background: `linear-gradient(165deg, $violet5, $blue6)`,
  backgroundColor: "$violet5",
  border: "1px solid $gray2",
  borderRadius: "1rem",
  padding: "$4",
  width: "100%"
})

const inputStyle = {
  width: "auto"
}

const FormActions = styled(Flex, {
  padding: "$3 0 $1 0"
})

export default function Login() {
  let actionData = useActionData()
  let [searchParams] = useSearchParams()

  return (
    <Box
      align="start"
      direction="column"
      gap="1">
      <FormHeading>Login</FormHeading>
      <LoginForm
        method="post"
        aria-describedby={actionData?.formError ? "form-error-message" : undefined}>
        {isNotEmpty(actionData?.formError) ? (
          <Alert
            id="form-error-message"
            type={alertType.error}
            show={true}
            title="😕 Oh no"
            message={actionData?.formError} />
        ) : null}
        <TextInput
          inputId="email"
          inputName="email"
          label="Email Address"
          css={inputStyle}
          state={actionData?.errors?.email ? inputState.error : inputState.normal}
          defaultValue={actionData?.credentials?.email}
          error={actionData?.errors?.email}
          aria-describedby={actionData?.errors?.email ? "email-error" : undefined} />
        <PasswordInput
          inputId="password"
          inputName="password"
          label="Password"
          css={inputStyle}
          state={actionData?.errors?.password ? inputState.error : inputState.normal}
          defaultValue={actionData?.credentials?.password}
          error={actionData?.errors?.password} />
        <FormActions justify="end">
          <Button type="submit">
            Submit
          </Button>
        </FormActions>
        <input
          type="hidden"
          name="redirectTo"
          value={searchParams.get("redirectTo") ?? urls.home} />
      </LoginForm>
    </Box>
  )
}
