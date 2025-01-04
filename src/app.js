import express from "express";
import server from "./server.js";
import router from "./router/index.js";
import bcrypt from "bcryptjs";
import passport from "passport"
import flash from "connect-flash"
import session from "express-session";
import auth from "../config/auth.js"
auth(passport)
 const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: "test",
    resave: true,
    saveUninitialized: true
    
  }))
   
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())
 
  app.use((req, res, next)=>{
    
    res.locals.user = req.user || null
    
    
    next()
  })
   
app.use(router)
 
 

server(app)