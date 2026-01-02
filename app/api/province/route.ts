import { listProvincesHandler } from "@/controllers/provinceController";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return listProvincesHandler();
}
