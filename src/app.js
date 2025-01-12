import express from "express";
import server from "./server.js";
import router from "./router/index.js";

import session from "express-session";
 
 const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: "test",
    resave: true,
    saveUninitialized: true
    
  }))
   
 
 
  app.use((req, res, next)=>{
    
    res.locals.user = req.user || null
    
    
    next()
  })
   
app.use("/api/v1/", router)
 
 

server(app)