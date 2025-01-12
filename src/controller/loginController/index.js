
import users from "../../models/entity/users/index.js"
const Users = new users()

export default  {
    async login(req, res){
        let {email, password} = req.body

        if(email, password){
            await Users.fi
        }else{
            res.json(
                {
                    message: "e-mail and password are required"
                }
            )
        }
    }  
        
}