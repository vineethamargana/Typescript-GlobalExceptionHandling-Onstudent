import { createStudent } from "../_repo/studentRepository.ts";
import { safeHandler } from "../_utils/safeHandler.ts";

async function studentHandler(req: Request): Promise<Response> {
    const method = req.method;

    console.log(method);

    if (method === "POST") {
        const body = await req.json();
        const student = await createStudent(body.name, body.age);
        return new Response(JSON.stringify(student), { status: 201, headers: { "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405 });
}

export default safeHandler(studentHandler);
