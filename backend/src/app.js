import express from "express"
import cookieParser from "cookie-parser"
import farmerRoutes from "./routes/auth.routes.js"
import cropRoutes from "./routes/crop.routes.js"
import merchantRoutes from "./routes/merchant.routes.js"
import auctionRoutes from "./routes/auction.routes.js"
import aiPlantRoutes from "./routes/aiPlant.routes.js"

const app = express()
app.use(cookieParser())
app.use(express.json())


app.use("/farmer", farmerRoutes)
app.use("/crop", cropRoutes)
app.use("/merchant", merchantRoutes)
app.use("/auction", auctionRoutes)
app.use("/ai", aiPlantRoutes)


export default app