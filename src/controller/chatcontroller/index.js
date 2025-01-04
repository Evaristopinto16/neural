import billingSystem from "../../helpers/index.js";
import microServiceApiOpena from "../../service/index.js";
const sendChat = new billingSystem();


export default {

    async chat(req, res){

    let id = req.userId;

        if(id) {
            id = id.id

            console.log(id)

            const {message, model} = req.body;

        if(message, model){


        await sendChat.send(message, model, id).then((data)=>{
            console.log("data", data)
            res.json( data)
        }).catch((error)=>[
            console.log("errrouj")
        ])


        }else{
            res.status(200)
            .json({
                message: "the message, model parameters were missing"
            })
        }

        }else{
            res
            .status(402)
            .json(
                {
                    "messagem": "Not Found"
                }
            )
        }
        

    }
}