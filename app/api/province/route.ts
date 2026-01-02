import { validateClientHandler } from "@/controllers/authController";
import { listProvincesHandler } from "@/controllers/provinceController";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const clientID = req.headers.get("client-id") || "";
  const isValidClient = validateClientHandler(clientID);

  if (!isValidClient) {
    return NextResponse.json({ error: "Invalid Client-ID" }, { status: 401 });
  }

  return listProvincesHandler();
}
