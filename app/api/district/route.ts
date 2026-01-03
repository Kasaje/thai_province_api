import {
  listDistrictsHandler,
  listDistrictsByProvinceIDHandler,
  getDistrictByIdHandler,
} from "@/controllers/districtController";
import { CustomError, handleError } from "@/utils/customError";
import { handleSuccess } from "@/utils/https";
import {
  getBodyValue,
  getHeaderValue,
  validateXAPIKey,
} from "@/utils/validation";

export async function GET(req: Request) {
  try {
    console.log("========== START LIST DISTRICTS ==========");
    const xAPIKey = getHeaderValue(req, "x-api-key");
    validateXAPIKey(xAPIKey);

    console.log("========== END LIST DISTRICTS ==========");
    const districts = listDistrictsHandler();
    return handleSuccess({ items: districts }, 200);
  } catch (error) {
    console.error("========== ERROR LIST DISTRICTS ==========", error);
    return handleError(error);
  }
}

export async function POST(req: Request) {
  try {
    console.log("========== START POST DISTRICT ==========");
    const xAPIKey = getHeaderValue(req, "x-api-key");
    validateXAPIKey(xAPIKey);

    let response;
    const provinceID = await getBodyValue<number>(req, "provinceID");
    const id = await getBodyValue<number>(req, "id");

    if (!provinceID && !id)
      throw new CustomError("provinceID or id is required", 400);

    if (provinceID) {
      console.log("========== END POST DISTRICT BY PROVINCE ID ==========");
      const districts = listDistrictsByProvinceIDHandler(provinceID);
      response = { items: districts };
    }

    if (id) {
      console.log("========== END POST DISTRICT BY ID ==========");
      response = getDistrictByIdHandler(id);
    }

    return handleSuccess(response, 200);
  } catch (error) {
    console.error("========== ERROR POST DISTRICT ==========", error);
    return handleError(error);
  }
}
