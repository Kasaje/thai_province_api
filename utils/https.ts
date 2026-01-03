import { NextResponse } from "next/server";

export const handleSuccess = (data: any, statusCode: number = 200) => {
  return NextResponse.json(data, { status: statusCode });
};
