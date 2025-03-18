
export function safeHandler(handler: (req: Request) => Promise<Response>) {
    return async (req: Request): Promise<Response> => {
        try {
            return await handler(req);
        } catch (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }
    };
}
