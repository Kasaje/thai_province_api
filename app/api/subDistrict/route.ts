import { validateClientHandler } from "@/controllers/authController";
import {
  listSubDistrictsHandler,
  listSubDistrictsByDistrictIDHandler,
  getSubDistrictByIdHandler,
} from "@/controllers/subDistrictController";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const clientID = req.headers.get("client-id") || "";
  const isValidClient = validateClientHandler(clientID);

  if (!isValidClient) {
    return NextResponse.json({ error: "Invalid Client-ID" }, { status: 401 });
  }

  return listSubDistrictsHandler();
}

export async function POST(req: Request) {
  const clientID = req.headers.get("client-id") || "";
  const isValidClient = validateClientHandler(clientID);

  if (!isValidClient) {
    return NextResponse.json({ error: "Invalid Client-ID" }, { status: 401 });
  }

  const { districtID, id } = await req.json();

  if (districtID) {
    return listSubDistrictsByDistrictIDHandler(districtID);
  }

  if (id) {
    return getSubDistrictByIdHandler(id);
  }

  return NextResponse.json({ message: "Invalid request" }, { status: 400 });
}
