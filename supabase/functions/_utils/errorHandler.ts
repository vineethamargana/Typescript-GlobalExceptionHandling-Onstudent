// deno-lint-ignore-file
export function handleDatabaseError(error: any, message: string) {
    console.error("Database Error:", error);
    console.error("Message:", message);
    
    const errorMessage = error?.message || "Unknown database error";

    return new Response(errorMessage, { status: 500 });
 }
