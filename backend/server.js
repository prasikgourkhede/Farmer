import app from "./src/app.js";
import { connectDB } from "./src/db/db.js";
import {createServer} from "http"
import auctionSocket from "./src/socket/auction.socketio.js"
const httpServer = createServer(app)

auctionSocket(httpServer)
connectDB()
httpServer.listen(3000, ()=>{
    console.log("socket connected to server");
    
})