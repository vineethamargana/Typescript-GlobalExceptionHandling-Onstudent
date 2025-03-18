// deno-lint-ignore-file
import studentHandler from "../_handler/studentHandler.ts";


Deno.serve(async (req) => {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/Student")) return studentHandler(req);
    return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
});
