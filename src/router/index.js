import express from "express";
const router = express.Router();
import controller from "../controller/index.js";
import controllerBalances from "../controller/controllerBalances/index.js";
import controllerUser from "../controller/controllerUser/index.js";
import modelcontroller from "../controller/modelcontroller/index.js";
import chatcontroller from "../controller/chatcontroller/index.js";
import loginController from "../controller/loginController/index.js";
import verifJWT from "../../config/auth.js"

 




// home 
router.get("/", controller.home);

//login

//router.post("/login", loginController.logir)
router.post("/login", controllerUser.userLogin)


router.get("/balance/get/:id", controllerBalances.findOneBalance);
router.post("/addbalance", controllerBalances.addBalance)
//user


router.post("/user/register", controllerUser.userRegister);
router.post("/user/update/:id", controllerUser.update)
router.get("/user/delet/:id", controllerUser.delete)
router.get("/user/get/:id", controllerUser.getOne)
router.get("/user/get/", modelcontroller.get)
//  Models 
router.post("/model/register", modelcontroller.setModel)
router.post("/model/update/:id", modelcontroller.update)
router.get("/model/delet/:id", modelcontroller.delete)
router.get("/model/get/:id", modelcontroller.getOne)
router.get("/model/get/",verifJWT, modelcontroller.get)



//api chat
router.post("/chat/",verifJWT, chatcontroller.chat)




export default router