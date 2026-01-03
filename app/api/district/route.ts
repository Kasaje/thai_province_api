import {
  listDistrictsHandler,
  listDistrictsByProvinceIDHandler,
  getDistrictByIdHandler,
} from "@/controllers/districtController";
import { CustomError, handleError } from "@/utils/customError";
import { handleSuccess } from "@/utils/https";
import { getHeaderValue, validateXAPIKey } from "@/utils/validation";

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
    const body = await req.json();
    const provinceID = body.provinceID;
    const districtID = body.districtID;

    if (!provinceID && !districtID)
      throw new CustomError("provinceID or districtID is required", 400);

    if (provinceID) {
      console.log("========== END POST DISTRICT BY PROVINCE ID ==========");
      const districts = listDistrictsByProvinceIDHandler(provinceID);
      response = { items: districts };
    }

    if (districtID) {
      console.log("========== END POST DISTRICT BY ID ==========");
      response = getDistrictByIdHandler(districtID);
    }

    return handleSuccess(response, 200);
  } catch (error) {
    console.error("========== ERROR POST DISTRICT ==========", error);
    return handleError(error);
  }
}
