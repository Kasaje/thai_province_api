import { Iprovince } from "@/utils/interface";
import provinces from "@/data/province.json";

function listProvince(): Array<Iprovince> {
  const mappedProvinces: Array<Iprovince> = provinces.map((province) => ({
    id: province.id,
    name: province.name_en,
  }));
  return mappedProvinces;
}

export { listProvince };
