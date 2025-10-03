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
    .withMessage('Email length must be between 5 to 20'),
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



export const auctionValidator = [
    body('cropName')
    .notEmpty()
    .withMessage("crop name is required")
    .isLength({min:2, max:20})
    .withMessage('length must be between 2 to 20'),
    // body('image')
    // .notEmpty()
    // .withMessage("crop image is required"),
    body('farmer_id')
    .notEmpty()
    .withMessage("farmer id is required"),
    body('buyer_id')
    .notEmpty()
    .withMessage("buyer id is required"),
    body('basePrice')
    .notEmpty()
    .withMessage("base price is required"),
    body('currentAmount')
    .notEmpty()
    .withMessage("current amount is required"),
    body('finalPrice')
    .notEmpty()
    .withMessage("final price is required"),

    (req, res, next) => {
        if (!req.file) {
          return res.status(400).json({ message: "crop image is required" });
        }
        next();
      },


    (req,res,next)=>{
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                message: "all fields are required"
            })
        }
        next()
    }
]