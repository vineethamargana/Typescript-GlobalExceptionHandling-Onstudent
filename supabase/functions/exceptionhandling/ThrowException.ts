import { CustomException } from "./customexception.ts";

export function throwException(statusCode: number, message: string): never {
    throw new CustomException(statusCode, message);
}