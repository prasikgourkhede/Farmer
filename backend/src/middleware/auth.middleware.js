import jwt from "jsonwebtoken"
import config from "../config/config.js"
import { findOneSeller } from "../dao/seller.dao.js"


export async function authMiddleware(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.status(400).json({
            message: "Unauthorized access, please login frist"
        })
    }
    try{
        const decode = jwt.verify(token, config.JWT_SECRET_KEY)
        const user = await findOneSeller({id: decode._id})
        req.user = user
        next()
    }catch(error){
        return res.status(401).json({
            message: "Invalid token please login frist"
        })
    }
}