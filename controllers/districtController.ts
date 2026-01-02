import { NextResponse } from "next/server";
import districtData from "@/data/district.json";
import {
  listDistrictsByProvinceID,
  getDistrictById,
} from "@/services/districtService";

export function listDistrictsHandler() {
  return NextResponse.json(districtData);
}

export function listDistrictsByProvinceIDHandler(provinceID: number) {
  try {
    const districts = listDistrictsByProvinceID(provinceID);
    return NextResponse.json({ items: districts });
  } catch (error) {
    console.error("Error listing districts by province ID", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export function getDistrictByIdHandler(id: number) {
  try {
    const district = getDistrictById(id);
    if (!district) {
      return NextResponse.json(
        { message: "District not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(district);
  } catch (error) {
    console.error("Error getting district by ID", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
