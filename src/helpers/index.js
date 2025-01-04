import subscript from "../models/entity/subsription/index.js";
import balance from "../entidades/balance/balance.js";
import users from "../models/entity/users/index.js";
import models from "../models/entity/models/index.js";
import microServiceApiOpena from "../service/index.js";

const Subscript = new subscript();
const Balance = new balance();
const Users = new users();
const Models = new models();

(async ()=>{


//insertBalance("g")

///find("index")


})();


async function insertBalance(value) 
{
        let id = 7;
        const balany= {
            
            balance: "200",
            user_id: id
        }

        await Balance.insert(balany).then((user)=>{
            if(user != 0){
                let taxa = balany.balance;
                

            }
        })

}




class billingSystem{

     

    

    async  send(message, model, id) {
        
        let user_id = id
        let sedModel = model
        let request
    

         await Users.findById(user_id).then(async (user)=>{
           
            if(user != 0){
                

                try {

                    const statusBalance = await Balance.findUserId(user.id)
        
                    if(statusBalance.balance > 0)
                    {
                        
                        //gpt-4
                        //gemin-flash
                         let usedModel = await Models.findByModel(sedModel);
                        if(usedModel != 0){
        
                       
                            
                            let countToken =await (statusBalance.balance - Number(usedModel.tokens_cost)).toFixed(2) ;
                            countToken = countToken
                             console.log(countToken);
        
                            const newBalance = {
                                balance: countToken.toString(),
                                id: statusBalance.id
                            }
                            try {
                               await Balance.UpdateBalance(newBalance);
    
                              /// console.log({...user,statusBalance, ...usedModel});
                               const microServiceResponst = await microServiceApiOpena(message)
                               request = {
                                   status: "sucess",
                                   data: {
                                    
                                       message: message,
                                       content: microServiceResponst.choices[0].message.content,
                                       statusBalance

                                   }
           
                               }
                               
                            } catch (error) {
                                console.log("erro to send updateBalance ", error)
                                request = {
                                    staus: "false",
                                    data: {
                                        message: "error to send updateBalance"
                                    }
                                }
                            }
        
                        }else{
                                request = {
                                    staus: "false",
                                    data: {
                                        message: "model does not exist"
                                    }
                                }
                        }
                        
                    
                          
                         
                    }else{
                        console.log("balance of the same account")
                        request = {
                            status: "sucess",
                            data: {
                                message: "balance of the same account"
                            }
                        }
                    }
        
                } catch (error) {
                    console
                    .error(error)

                    request = {
                        status: "false",
                        data: {
                            message: "error in billing System"
                        }
                    }
                }
            }else{
  
                request = {
                    status: "false",
                    data: {
                        message: "Not Found User"
                    }
                }
            }
             
          
        })
        
     return request
    }

}


export default billingSystem