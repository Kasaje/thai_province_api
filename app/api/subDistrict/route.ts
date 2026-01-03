import {
  listSubDistrictsHandler,
  listSubDistrictsByDistrictIDHandler,
  getSubDistrictByIdHandler,
} from "@/controllers/subDistrictController";
import { CustomError, handleError } from "@/utils/customError";
import { handleSuccess } from "@/utils/https";
import { getHeaderValue, validateXAPIKey } from "@/utils/validation";

export async function GET(req: Request) {
  try {
    console.log("========== START GET SUBDISTRICTS ==========");
    const xAPIKey = getHeaderValue(req, "x-api-key");
    validateXAPIKey(xAPIKey);

    console.log("========== END GET SUBDISTRICTS ==========");
    const subDistricts = listSubDistrictsHandler();
    return handleSuccess({ items: subDistricts }, 200);
  } catch (error) {
    console.error("========== ERROR GET SUBDISTRICTS ==========", error);
    return handleError(error);
  }
}

export async function POST(req: Request) {
  try {
    console.log("========== START POST SUBDISTRICT ==========");
    const xAPIKey = getHeaderValue(req, "x-api-key");
    validateXAPIKey(xAPIKey);

    const body = await req.json();
    const districtID = body.districtID;
    const subDistrict = body.subDistrictID;

    if (!districtID && !subDistrict)
      throw new CustomError("districtID or subDistrictID is required", 400);

    let response;
    if (districtID) {
      console.log("========== END POST SUBDISTRICT BY DISTRICT ID ==========");
      const subDistricts = listSubDistrictsByDistrictIDHandler(districtID);
      response = { items: subDistricts };
    }

    if (subDistrict) {
      console.log("========== END POST SUBDISTRICT BY ID ==========");
      response = getSubDistrictByIdHandler(subDistrict);
    }

    return handleSuccess(response, 200);
  } catch (error) {
    console.error("========== ERROR POST SUBDISTRICT ==========", error);
    return handleError(error);
  }
}
