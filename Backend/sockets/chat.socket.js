//ayth middleware 

//require jwt
const jwt= require("jsonwebtoken");
const socketAuthMiddleware= (socket , next)=>{
    try {
        // get token 
        const token = socket.handshake.headers.token;
        if(!token) return  next(new Error("Not Found Token"));
        // get payload
        const payload= jwt.verify(token,process.env.JWT_SECRET);
        socket.userId = payload.id;
        socket.role = payload.role;
next

    } catch (error) {
        return next(new Error("Invalid Token"))      
    }
};

const chatSocketController = (io)=>{
    // use Middleware 
    io.use(socketAuthMiddleware)
   // conection Socket.io 
   io.on("connection",(socket)=>{
    console.log(`User ${socket.userId} & Role ${socket.role} is Connection Socket Server,`)
   })


};
module.exports=chatSocketController;