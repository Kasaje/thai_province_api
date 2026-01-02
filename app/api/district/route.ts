import { validateClientHandler } from "@/controllers/authController";
import {
  listDistrictsHandler,
  listDistrictsByProvinceIDHandler,
  getDistrictByIdHandler,
} from "@/controllers/districtController";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const clientID = req.headers.get("client-id") || "";
  const isValidClient = validateClientHandler(clientID);

  if (!isValidClient) {
    return NextResponse.json({ error: "Invalid Client-ID" }, { status: 401 });
  }

  return listDistrictsHandler();
}

export async function POST(req: Request) {
  const clientID = req.headers.get("client-id") || "";
  const isValidClient = validateClientHandler(clientID);

  if (!isValidClient) {
    return NextResponse.json({ error: "Invalid Client-ID" }, { status: 401 });
  }

  const { provinceID, id } = await req.json();

  if (provinceID) {
    return listDistrictsByProvinceIDHandler(provinceID);
  }

  if (id) {
    return getDistrictByIdHandler(id);
  }

  return NextResponse.json({ message: "Invalid request" }, { status: 400 });
}
