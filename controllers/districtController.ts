import districtData from "@/data/district.json";
import {
  listDistrictsByProvinceID,
  getDistrictById,
} from "@/services/districtService";
import { CustomError } from "@/utils/customError";
import { Idistrict } from "@/utils/interface";

export function listDistrictsHandler() {
  const mappedDistricts: Idistrict[] = districtData.map((district) => ({
    id: district.id,
    nameTH: district.name_th,
    nameEN: district.name_en,
    provinceID: district.province_id,
  }));

  return mappedDistricts;
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
