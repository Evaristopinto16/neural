const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    usename: "user"

  },
  "secretKey",
  {
    expiresIn: "1h"
  }
);

jwt.verify(token, "secretKey", (err, decoded)=>{
  if(err){
    console.log("Token failed")
  }else{
    console.log("token is valid", decoded)
  }
})