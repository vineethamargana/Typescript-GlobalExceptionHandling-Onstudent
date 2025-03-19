
export  function ErrorResponse(statusCode: number, message: string){
    const time = new Date();
    return new Response(JSON.stringify({statusCode,message,time}), {
        status: statusCode,
        headers: { "Content-Type": "application/json" },
    });
}