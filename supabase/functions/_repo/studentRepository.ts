import supabase from "../_utils/database.ts";
import { safeQuery } from "../_utils/safeQuery.ts";



export async function createStudent(name: string, age: number ) {
    console.log(`createStudent: ${name}, ${age}`);
    return safeQuery(
        await supabase.from("students").insert({ name, age }).select().single(),
        "Failed to create student"
    );
}

