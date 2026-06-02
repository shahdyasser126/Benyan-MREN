// Admin Model
const Admin = require("../../models/Admin")

//joi Schema
const loginSchema = require("../validation/authAdminValidation")
//jwt
const jwt = require("jsonwebtoken");

//function
const loginController = async(req , res)=>{
    try {
        
        //joi validation
        const {error , value}=loginSchema.validate(req,body ,{
// بيجمع كل الايرور مرة واحده
            abortEarly:false,
 // بياخد اللي محتاجه بس 
            stripUnknown:true
        })
if(error)return res.status(400).json({
    msg: error.details.map((err) => err.message),
});
//get data from value 
const {email,password}= value;
// check admin find or no
const admin = await Admin.findOne({email}).select("+password")
// if User Not Found 
if(!admin) return res.status(400).json({msg: "Invalid Email or password"})
// compare password
const matchPassword = await admin.comparePassword(password);
// if password false 
if(!matchPassword) return res.status(400).json({msg: "Invalid Email or password"})

    const token = await jwt.sign({id: admin._id},process.env.JWT_SECRET,{expiresIn:"1d"})
    res.status(200).json({msg: " Sucess Login",token})
    } catch (error) {
        
    }
}
//Export
module.exports=loginController;
