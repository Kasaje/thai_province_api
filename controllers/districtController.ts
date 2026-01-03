import { NextResponse } from "next/server";
import districtData from "@/data/district.json";
import {
  listDistrictsByProvinceID,
  getDistrictById,
} from "@/services/districtService";
import { CustomError } from "@/utils/customError";

export function listDistrictsHandler() {
  return NextResponse.json(districtData);
}

export function listDistrictsByProvinceIDHandler(provinceID: number) {
  const districts = listDistrictsByProvinceID(provinceID);
  return districts;
}

export function getDistrictByIdHandler(id: number) {
  const district = getDistrictById(id);
  if (!district) throw new CustomError("District not found", 404);
  return district;
}
