import express from "express"
import { buyerLoginController, buyerRegisterController, farmerLoginController, farmerRegisterController } from "../controller/auth.controller.js"
import { registerValidator } from "../middleware/validator.middleware.js"


const router = express.Router()

router.post("/register",
    registerValidator,
    farmerRegisterController)


router.post("/login",
    farmerLoginController)

router.post("/register-buyer",
    registerValidator,
    buyerRegisterController
)

router.post("/login-buyer",
    buyerLoginController
)

export default router