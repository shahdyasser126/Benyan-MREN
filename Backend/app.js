//dotenv
require("dotenv").config();
//express
const express = require('express')
const app=express();
// step0 -->0
const http=require("http");
const server = http.createServer(app)
//morgan is middleware handle the loggs
const morgan = require("morgan");

// middlware json 
app.use(express.json());
// connection db 
//simple logger
if(process.env.NODE_ENV==="dev"){
//     app.use((req,res,next )=>{
// console.log(`${req.method} ${req.originalUrl}`);
// next()  //method (post/get/....)  riginal (/tours)
// });
app.use(morgan("dev"))
}
//test route
app.get("/test",(req,res)=>{
    res.json({msg: "Test Route"})
})

   const adminRoute=require("./routes/auth.route")
   app.use("/api/dashboard",adminRoute)
//init socket server  -->1
const {Server}=require("socket.io");
//srver اسمه  io in socket
const io = new Server(server,{
// -->2
//cors عشان تعمل دومين يجمع بين الفرونت والباك configration server node 
cors:{
    origin:"*",      //postman +front     if you want front use his url 
   methods: ["GET","POST"]
}

})  

require("./sockets/chat.socket")(io);
// port 
const port=process.env.PORT || 3000;
const connectionDB=require("./config/db")
connectionDB()
//  run server  (listen بتعمل حاجتين  create server و  run server)
server.listen(port,()=>{
    console.log(`server runnig on port ${port}`);
 
}); 