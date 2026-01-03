import { NextResponse } from "next/server";
import {
  listSubDistricts,
  listSubDistrictsByDistrictID,
  getSubDistrictById,
} from "@/services/subDistrictService";
import { CustomError } from "@/utils/customError";

export function listSubDistrictsHandler() {
  const subDistricts = listSubDistricts();
  return NextResponse.json(subDistricts);
}

export function listSubDistrictsByDistrictIDHandler(districtID: number) {
  const subDistricts = listSubDistrictsByDistrictID(districtID);
  return subDistricts;
}

export function getSubDistrictByIdHandler(id: number) {
  const subDistrict = getSubDistrictById(id);

  if (!subDistrict) throw new CustomError("Sub-district not found", 404);

  return subDistrict;
}
