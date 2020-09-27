export default class ApiError extends Error {
  constructor(statusCode, message, source) {
    super()
    this.statusCode = statusCode
    this.message = message
    this.source = source
  }
}

export class InternalServerError extends ApiError {
  constructor(message = 'Internal Server Error', source) {
    super(500, message, source)
    this.message = message
    this.source = source
  }
}

export class BadRequestError extends ApiError {
  constructor(message = 'Bad Request Error', source) {
    super(400, message, source)
    this.message = message
    this.source = source
  }
}
