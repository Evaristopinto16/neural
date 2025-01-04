import passport from "passport"
import users from "../../models/entity/users/index.js"
const Users = new users()

export default  {
    async login(req, res){
        let {email, password} = req.body

        if(email, password){
            
        }else{
            res.json(
                {
                    message: "e-mail and password are required"
                }
            )
        }
    },
    async logir  (req, res, next){
        
           // var usuario = await userDao.buscar(req.body.email)
        
           // if(usuario === undefined || usuario===null){
               // req.flash("error_msg","senha ou email errado")
               // res.redirect("/users/login")
         //   }else{
            passport.authenticate('local', {
               successRedirect: "/",
               failureRedirect: "/",
               failureFlash: true
         
            }  )(req, res, next)
         //   }
       //    
        
           
        } 
        
}