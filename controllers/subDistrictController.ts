import { NextResponse } from "next/server";
import {
  listSubDistricts,
  listSubDistrictsByDistrictID,
  getSubDistrictById,
} from "@/services/subDistrictService";

export function listSubDistrictsHandler() {
  const subDistricts = listSubDistricts();
  return NextResponse.json(subDistricts);
}

export function listSubDistrictsByDistrictIDHandler(districtID: number) {
  try {
    const subDistricts = listSubDistrictsByDistrictID(districtID);
    return NextResponse.json(subDistricts);
  } catch (error) {
    console.error("Error listing sub-districts by district ID", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export function getSubDistrictByIdHandler(id: number) {
  try {
    const subDistrict = getSubDistrictById(id);
    if (!subDistrict) {
      return NextResponse.json(
        { message: "Sub-district not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(subDistrict);
  } catch (error) {
    console.error("Error getting sub-district by ID", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
