import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { CustomError } from "./customError";
dotenv.config();

function validateXAPIKey(apiKey: string): NextResponse | null {
  const expectedApiKey = process.env.X_API_KEY;

  if (apiKey !== expectedApiKey) throw new CustomError("Invalid API Key", 401);

  return null;
}

function getHeaderValue(req: Request, headerName: string): string {
  return req.headers.get(headerName) || "";
}

export { validateXAPIKey, getHeaderValue };
