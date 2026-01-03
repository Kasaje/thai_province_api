import { NextResponse } from "next/server";

export class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof CustomError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }

  return NextResponse.json(
    {
      message: "Internal server error",
    },
    { status: 500 }
  );
};
