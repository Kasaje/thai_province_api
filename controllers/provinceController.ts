import { listProvince } from "@/services/provinceService";
import { NextResponse } from "next/server";

export function listProvincesHandler() {
  try {
    console.log("========== START LIST PROVINCES ==========");
    const provinces = listProvince();

    const response = {
      items: provinces,
    };
    console.log("========== END LIST PROVINCES ==========");
    return NextResponse.json(response);
  } catch (error) {
    console.error("========== ERROR LISTING PROVINCES ==========", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
