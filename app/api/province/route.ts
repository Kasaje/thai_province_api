import {
  listProvincesHandler,
  getProvinceByIdHandler,
} from "@/controllers/provinceController";
import { CustomError, handleError } from "@/utils/customError";
import { handleSuccess } from "@/utils/https";
import {
  getBodyValue,
  getHeaderValue,
  validateXAPIKey,
} from "@/utils/validation";

export async function GET(req: Request) {
  try {
    console.log("========== START LIST PROVINCES ==========");

    const xAPIKey = getHeaderValue(req, "x-api-key");
    validateXAPIKey(xAPIKey);

    console.log("========== END LIST PROVINCES ==========");
    const provinceList = listProvincesHandler();
    return handleSuccess({ items: provinceList }, 200);
  } catch (error) {
    console.error("========== ERROR LIST PROVINCES ==========", error);
    return handleError(error);
  }
}

export async function POST(req: Request) {
  try {
    console.log("========== START GET PROVINCE BY ID ==========");
    const xAPIKey = getHeaderValue(req, "x-api-key");
    validateXAPIKey(xAPIKey);

    const id = await getBodyValue<number>(req, "id");
    if (!id) throw new CustomError("Province ID is required", 400);

    console.log("========== END GET PROVINCE BY ID ==========");
    const province = getProvinceByIdHandler(id);
    return handleSuccess(province, 200);
  } catch (error) {
    console.error("========== ERRROR GET PROVINCE BY ID ==========", error);
    return handleError(error);
  }
}
