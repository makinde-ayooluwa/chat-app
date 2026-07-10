const { WebSocketServer } = require("ws");
const ENV = require("./env");
const initializeSocket = async () => {
    const clients = new Map();
    const wss = new WebSocketServer({ port: ENV.SOCKET_PORT });

    wss.on("connection", (ws) => {
        ws.on("message", (data) => {
            const message = JSON.parse(data.toString())
            if (message.type == "join") {
                const userId = message.userId;
                clients.set(userId, ws);
                console.log(`User ${userId} connected`);
            }
            if (message.type == "chat") {
                const { from, to, text } = message;
                const receiver = clients.get(to);
                if (receiver) {
                    receiver.send(JSON.stringify({
                        type: "chat",
                        from,
                        text,
                    }))
                }
            }
        });
    })
    console.log("Socket server running on port", ENV.SOCKET_PORT)
}
module.exports = initializeSocket;