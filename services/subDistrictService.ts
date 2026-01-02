import subDistrict from "@/data/subDistrict.json";
import { IsubDistrict } from "@/utils/interface";

function listSubDistricts(): Array<IsubDistrict> {
  const mappedSubDistricts: Array<IsubDistrict> = subDistrict.map(
    (subDistrict) => ({
      id: subDistrict.id,
      districtID: subDistrict.district_id,
      nameTH: subDistrict.name_th,
      nameEN: subDistrict.name_en,
      zipCode: subDistrict.zip_code,
    })
  );

  return mappedSubDistricts;
}

function listSubDistrictsByDistrictID(districtID: number): Array<IsubDistrict> {
  return subDistrict
    .filter((subDistrict) => subDistrict.district_id === districtID)
    .map((subDistrict) => ({
      id: subDistrict.id,
      districtID: subDistrict.district_id,
      nameTH: subDistrict.name_th,
      nameEN: subDistrict.name_en,
      zipCode: subDistrict.zip_code,
    }));
}

function getSubDistrictById(id: number): IsubDistrict | undefined {
  const subDistrictItem = subDistrict.find(
    (subDistrict) => subDistrict.id === id
  );
  if (subDistrictItem) {
    return {
      id: subDistrictItem.id,
      districtID: subDistrictItem.district_id,
      nameTH: subDistrictItem.name_th,
      nameEN: subDistrictItem.name_en,
      zipCode: subDistrictItem.zip_code,
    };
  }
  return undefined;
}

export { listSubDistricts, listSubDistrictsByDistrictID, getSubDistrictById };
