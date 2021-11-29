export function withWindow(fn) {
  if (
    typeof window !== "undefined" &&
    typeof fn !== "undefined" &&
    typeof fn === "function"
  ) {
    return fn(window)
  }
}

export function withDocument(fn) {
  return withWindow(window => {
    return fn(window.document)
  })
}

export function withNavigator(fn) {
  return withWindow(window => {
    return fn(window.navigator)
  })
}

export const isEmpty = target => {
  if (Array.isArray(target)) {
    return target.length === 0
  }

  return typeof target === "undefined" ||
    target === null ||
    target === ""
}

export const isNotEmpty = target => (!isEmpty(target))

export async function writeToClipboard(content) {
  return withWindow(async window => {
    if (!navigator.clipboard) {
      return
    }

    await navigator.clipboard.writeText(content)
  })
}
