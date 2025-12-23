import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import farmerRoutes from "./routes/auth.routes.js"
import cropRoutes from "./routes/crop.routes.js"
import merchantRoutes from "./routes/merchant.routes.js"
import auctionRoutes from "./routes/auction.routes.js"
import aiPlantRoutes from "./routes/aiPlant.routes.js"

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())


app.get("/", (req,res)=>{
    res.send("hello world")
})
app.use("/auth", farmerRoutes)
app.use("/", cropRoutes)
app.use("/merchant", merchantRoutes)
app.use("/auction", auctionRoutes)
app.use("/ai", aiPlantRoutes)


export default app