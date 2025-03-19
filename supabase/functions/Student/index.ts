// deno-lint-ignore-file
import studentHandler from "../_handler/studentHandler.ts";
import { HTTP_STATUS_CODE } from "../_utils/HttpStatusCodes.ts";


Deno.serve(async (req) => {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/Student")) return studentHandler(req);
    return new Response(JSON.stringify({ error: "Route not found" }), {status:HTTP_STATUS_CODE.NOT_FOUND});
});
