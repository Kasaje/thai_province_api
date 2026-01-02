import { listProvince, getProvinceById } from "@/services/provinceService";
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

export function getProvinceByIdHandler(id: number) {
  try {
    console.log("========== START GET PROVINCE BY ID ==========");
    const province = getProvinceById(id);

    if (!province) {
      return NextResponse.json(
        { message: "Province not found" },
        { status: 404 }
      );
    }

    console.log("========== END GET PROVINCE BY ID ==========");
    return NextResponse.json(province);
  } catch (error) {
    console.error("========== ERROR GETTING PROVINCE BY ID ==========", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
