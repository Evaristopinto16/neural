import balancer from "../../entidades/balance/balance.js";
import users from "../../entidades/users/users.js";
const Users = new users();
const Balance = new balancer()

export default {

    async addBalance(req, res){

        const {balance, email } = req.body;

        if(balance, email){

            await Users.findByEmail(email)
            .then(async(user)=>{

                const addbalance = {
                    balance,
                    user_id: user.id
            
                }
               try {
                let requessend = await Balance.insert(addbalance);

                res.json(requessend)
                
               } catch (error) {
                res.redirect("/")
               }

            }).catch((error)=>{
                console.error(error);
                res.status(302)
                .redirect("/")
            })
         
        }else{
            res
            .status(302)
            .redirect("/")
        }

       
    },


    async findOneBalance(req, res){
        let id = Number(req.params.id);

        if(id){
            await Users.findById(id).then(async(user)=>{
                const balance = await Balance.findUserId(user.id)
                if(balance){
                    res.json({
                        data: {
                            ...balance,
                            user
                        }
                    })
                }else{
                    res.json({
                        data: {
                            id: 0,
                            balance: "sem saldo",
                            user_id: 0,
                            user
        
                        }
                        
                    })
                }
        
            }).catch((error)=>{
                res
            .status(302)
            .redirect("/")
            })
        }else{
            res
            .status(302)
            .redirect("/")
        }
    }
}