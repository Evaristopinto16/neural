async function server(server) {
    const PORT = 3000;

    try {
        server
        .listen(
            PORT, 
            ()=>{
                console.log(`server init to http://localhost:${PORT}/`)
            }
        )
    } catch (error) {
        console.error("error to init server ")
    }
}

export default server