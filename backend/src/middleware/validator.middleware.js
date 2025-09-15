import {body, validationResult} from "express-validator"




export const registerValidator = [
    body('username')
    .notEmpty()
    .withMessage("username is required")
    .isLength({min:2, max:20})
    .withMessage('length must be between 2 to 20'),
    body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isLength({min:5, max:20})
    .withMessage('Email length mut be between 5 to 20'),
    body('contactNo')
    .notEmpty()
    .withMessage('Mobile number is required')
    .isLength({min: 10})
    .withMessage('Mobile number must be in 10 digit'),
    body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:5, max:20}),
    (req,res,next)=>{
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                message: "Unauthorized access, try again"
            })
        }
        next()
    }
]