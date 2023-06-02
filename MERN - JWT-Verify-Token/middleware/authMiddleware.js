import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

//Protected login on the basis of token
export const requireSignIn = async(req,res,next)=>{
    try {
        
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_KEY)
        req.user = decode;
        next();

    } catch (error) {
        console.log(error)
        res.status(401).send({
            error,
            message: "Error in middleware",            
        }            
        )
    }

}

// testing whether a user is admin or not 

export const isAdmin = async(req,res,next) =>{

    const user = await userModel.findById(req.user._id)

    if(user.role !== 1){
        
        return res.status(401).send({
            success: false,
            message: "Unauthorized access",        
        })
    }else{
        next()
    }

}
