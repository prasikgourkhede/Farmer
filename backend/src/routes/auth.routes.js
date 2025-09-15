import express from "express"
import { buyerLoginController, buyerRegisterController, farmerLoginController, farmerRegisterController } from "../controller/auth.controller.js"
import { registerValidator } from "../middleware/validator.middleware.js"


const router = express.Router()

router.post("/register",
    registerValidator,
    farmerRegisterController)


router.post("/login",
    farmerLoginController)

router.post("/registerBuyer",
    registerValidator,
    buyerRegisterController
)

router.post("/loginBuyer",
    buyerLoginController
)

export default router