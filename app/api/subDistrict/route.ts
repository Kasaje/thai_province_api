import {
  listSubDistrictsHandler,
  listSubDistrictsByDistrictIDHandler,
  getSubDistrictByIdHandler,
} from "@/controllers/subDistrictController";
import { CustomError, handleError } from "@/utils/customError";
import { handleSuccess } from "@/utils/https";
import {
  getBodyValue,
  getHeaderValue,
  validateXAPIKey,
} from "@/utils/validation";

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

    const districtID = await getBodyValue<number>(req, "districtID");
    const id = await getBodyValue<number>(req, "id");

    if (!districtID && !id)
      throw new CustomError("districtID or id is required", 400);

    let response;
    if (districtID) {
      console.log("========== END POST SUBDISTRICT BY DISTRICT ID ==========");
      const subDistricts = listSubDistrictsByDistrictIDHandler(districtID);
      response = { items: subDistricts };
    }

    if (id) {
      console.log("========== END POST SUBDISTRICT BY ID ==========");
      response = getSubDistrictByIdHandler(id);
    }

    return handleSuccess(response, 200);
  } catch (error) {
    console.error("========== ERROR POST SUBDISTRICT ==========", error);
    return handleError(error);
  }
}
