// deno-lint-ignore-file

import { throwException } from "./ThrowException.ts";


export function safeQuery<T>(response: { data: T | null; error: any }, message: string): T {
    const { data, error } = response;
    if (error || !data){
        const errorMessage = error?.message || "Unknown database error";
        const errorstatus = error?.status || 500;
        throwException(errorstatus, message + ": " + errorMessage);    
    }
    return data;
}

