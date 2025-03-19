import { createStudent } from "../_repo/studentRepository.ts";
import { HTTP_STATUS_CODE } from "../_utils/HttpStatusCodes.ts";
import GlobalExceptionHandler from "../exceptionhandling/GlobalExceptionHandler.ts";
import { throwException } from "../exceptionhandling/ThrowException.ts";

async function studentHandler(req: Request): Promise<Response> {
    const method = req.method;

    console.log(method);

    (req.method !== "POST") && throwException(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED,"Method Not Allowed");
    
    const body = await req.json();

    (!body.name || typeof body.name !== "string") && throwException(HTTP_STATUS_CODE.BAD_REQUEST,"Invalid or missing 'name' field");

    (!body.age || typeof body.age !== "number") && throwException(HTTP_STATUS_CODE.BAD_REQUEST,"Invalid or missing 'age' field");
    

    const student = await createStudent(body.name, body.age);

    return new Response(JSON.stringify({ student }), { status: 200, headers: { "Content-Type": "application/json" } });
}

export default GlobalExceptionHandler.handle(studentHandler);
