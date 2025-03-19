// deno-lint-ignore-file

import { ErrorResponse } from "../_utils/ErrorResponse.ts";
import { HTTP_STATUS_CODE } from "../_utils/HttpStatusCodes.ts";
import { CustomException } from "./customexception.ts";


export default class GlobalExceptionHandler {
    static handle<T extends (...args: any[]) => Promise<Response>>(handler: T): T {
        return (async (...args: Parameters<T>): Promise<Response> => {
            try {
                return await handler(...args);
            } catch (error) {
                if (error instanceof CustomException) {
                    console.error(error.message);
                    return ErrorResponse(error.statusCode, error.message);
                } 
                else {
                    console.error(`Unhandled error: ${error}`);
                    return ErrorResponse(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,"Internal Server Error");
                }
            }
        }) as T;
    }
}


