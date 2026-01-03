import { listProvince, getProvinceById } from "@/services/provinceService";
import { CustomError } from "@/utils/customError";

export function listProvincesHandler() {
  console.log("========== START LIST PROVINCES ==========");
  const provinces = listProvince();

  console.log("========== END LIST PROVINCES ==========");
  return provinces;
}

export function getProvinceByIdHandler(id: number) {
  console.log("========== START GET PROVINCE BY ID ==========");
  const province = getProvinceById(id);

  if (!province) throw new CustomError("Province not found", 404);

  console.log("========== END GET PROVINCE BY ID ==========");
  return province;
}
