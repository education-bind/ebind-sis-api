class AppError extends Error {
  status: string;
  private _isOperational: boolean;

  constructor(public message: string, public statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this._isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
  get isOperational(): boolean {
    return this.isOperational;
  }
}

export default AppError;
