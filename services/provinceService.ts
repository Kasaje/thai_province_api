import { Iprovince } from "@/utils/interface";
import provinces from "@/data/province.json";

function listProvince(): Array<Iprovince> {
  const mappedProvinces: Array<Iprovince> = provinces.map((province) => ({
    id: province.id,
    name: province.name_en,
  }));
  return mappedProvinces;
}

function getProvinceById(id: number): Iprovince | undefined {
  const province = provinces.find((province) => province.id === id);
  if (province) {
    return {
      id: province.id,
      name: province.name_en,
    };
  }
  return undefined;
}

export { listProvince, getProvinceById };
