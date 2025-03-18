// deno-lint-ignore-file

import { handleDatabaseError } from "./errorHandler.ts";

export function safeQuery<T>(response: { data: T | null; error: any }, message: string): T {
    const { data, error } = response;
    if (error) {
        throw handleDatabaseError(error, message);
    }
    return data!;
}
