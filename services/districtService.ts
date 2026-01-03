import { Idistrict } from "@/utils/interface";
import districts from "@/data/district.json";

function listDistricts(): Array<Idistrict> {
  const mappedDistricts: Array<Idistrict> = districts.map((district) => ({
    id: district.id,
    provinceID: district.province_id,
    nameTH: district.name_th,
    nameEN: district.name_en,
  }));

  return mappedDistricts;
}

function listDistrictsByProvinceID(provinceID: number): Array<Idistrict> {
  return districts
    .filter((district) => district.province_id === provinceID)
    .map((district) => ({
      id: district.id,
      provinceID: district.province_id,
      nameTH: district.name_th,
      nameEN: district.name_en,
    }));
}

function getDistrictById(id: number): Idistrict | undefined {
  const district = districts.find((district) => district.id === id);
  if (district) {
    return {
      id: district.id,
      provinceID: district.province_id,
      nameTH: district.name_th,
      nameEN: district.name_en,
    };
  }
  return undefined;
}

export { listDistricts, listDistrictsByProvinceID, getDistrictById };
