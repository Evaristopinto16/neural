import jwt from "jsonwebtoken";

async function verifJWT(req, res, next) {
   const token = await req.headers["authorization"];
 
   console.log(token)
   if(!token){
     return res.status(401).json({auth: false, message: "Unauthorized"})
   }
   jwt.verify(token, "secretKey", (err, decoded)=>{
       if(err) return res.status(500).json({auth: false, message: "error to authenticate token"});
 
       req.userId = decoded
       next()
   })
 }

export default verifJWT