// deno-lint-ignore-file
import supabase from "../_utils/database.ts";
import { safeQuery } from "../exceptionhandling/safeQuery.ts";



export async function createStudent(name: string, age: number ) {
    return safeQuery(
        await supabase.from("students").insert({ name }).select().single(),
        "Failed to create student"
    );
}

