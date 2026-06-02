const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const protect=(req,res,next)=>{

    try {
       const authHeader=req.headers.authorization;
       if(!authHeader){
        console.log("Error , No Headers Recieved");
        return res.status(401).json({msg:"NO Token Recieved"})  
    }

const part=authHeader.trim().split(); 
const secret=process.env.JWT_SECRET;
const decode=jwt.verify(token,secret);
req.user=decode;
console.log("Token Sucess");
next()
    } catch (error) {
        console.log("Jwt error:",error.message);
        return res.status(401).json({msg:"token is not valid",error:error.message});
        
    }
}
module.exports=protect;