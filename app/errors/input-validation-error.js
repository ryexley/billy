export class InputValidationError extends Error {
  constructor(...args) {
    super(...args)
    this.name = "InputValidationError"

    if (Error.captureStackTrace && typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InputValidationError)
    }
  }
}
