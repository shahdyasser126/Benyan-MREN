//require env
require("dotenv").config();
// require mongoose 
const mongoose= require("mongoose")
// reqire admin model
const Admin =require("../models/Admin")
//create new function
const seedSuperAdmin = async () =>{
try {
    // DB connected
await mongoose.connect(process.env.MONGO_URL);
console.log("DB is connected");

    //exist Admin
const existAdmin=await Admin.findOne({email:process.env.EMAIL_ADMIN,})
if(existAdmin) return console.log("Already found Admin");
  

// Create new Admin
const newAdmin={
    username:"super Admin",
    email:process.env.EMAIL_ADMIN,
    password:process.env.PASSWORD_ADMIN,
};
const admin=await Admin.create(newAdmin)
console.log(admin);


} catch (error) {
    console.log(error);
    
}
finally{
    await mongoose.connection.close();
    console.log("DB is closed");
    process.exit(0)
}

}

//invoke (run function)
seedSuperAdmin();