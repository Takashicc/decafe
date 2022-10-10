import { Response } from "express";
import { AppError } from "./Error";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

class ErrorHandler {
  /**
   * Handle error.
   *
   * @param error Error
   * @param response Response
   */
  public handleError(error: Error | AppError, response: Response): void {
    if (this.isOperationalError(error)) {
      this.handleOperationalError(error as AppError, response);
    } else {
      this.handleCriticalError(error, response);
    }
  }

  /**
   * Check the error is operational or not.
   *
   * @param error Error
   * @returns true if operational. false otherwise.
   */
  private isOperationalError(error: Error): boolean {
    if (error instanceof AppError) {
      return error.isOperational;
    }

    return false;
  }

  /**
   * Handle operational error.
   *
   * @param error Error
   * @param response Response
   */
  public handleOperationalError(error: AppError, response: Response): void {
    response.status(error.statusCode).send({ message: error.message });
  }

  /**
   * Handle critical error.
   *
   * @param error Error
   * @param response Response
   */
  public handleCriticalError(error: Error, response: Response): void {
    response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
}

export const errorHandler = new ErrorHandler();
