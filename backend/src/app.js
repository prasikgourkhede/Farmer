import express from "express"
import cookieParser from "cookie-parser"
import farmerRoutes from "./routes/auth.routes.js"
import cropRoutes from "./routes/crop.routes.js"


const app = express()
app.use(cookieParser())
app.use(express.json())


app.use("/farmer", farmerRoutes)
app.use("/crop", cropRoutes)


export default app