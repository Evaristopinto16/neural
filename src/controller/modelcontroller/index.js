import models from "../../models/entity/models/index.js"
const Models = new models();
export default {

    async setModel(req, res){

        let { model, tokens_cost, tokens_length} = req.body
        const sendModel = {
            model,
            tokens_length,
            tokens_cost
           //20% for request
        }

        await Models.save(sendModel).then((data)=>{
            console.log(data)
            res
            .json(data)

        }).catch((error)=>{

            console.log("error in setModel", error)
        })


    },

    async update (req, res){
        let {id} = req.params
        if(id){
            let {model, tokens_cost, tokens_length} = req.body
            const sendModel = {
                model,
                tokens_length,
                tokens_cost,
                id
               //20% for request
            }

            await Models.update(sendModel)
            .then((data)=>{
                res
                .status(200)
                .json(data)
            })
            .catch((error)=>{
                console.log(error);
                res.redirect("/")
            })

            
        }else{
            res.redirect("/")
        }
        
       
    },

    async delete(req, res){
        const {id} = req.params 

        if(id){

            await Models.deleteById(id)
            .then((data)=>{ 
                res.status(200)
                .json(data)
            }).catch((error)=>{
                console.log(error);
                res.redirect("/")
            })

        }else{
            res.redirect("/")
        }

       

    },
    async get(req, res){
        await Models.find().then((data)=>{

            res.json(data)
        }).catch((error)=>{
            console.log("error", error)
        })

    },

    async getOne(req, res){
        const {id} = req.params 

        if(id){

            await Models.findById(id)
            .then((data)=>{ 
                res.status(200)
                .json(data)
            }).catch((error)=>{
                console.log(error);
                res.redirect("/")
            })

        }else{
            res.redirect("/")
        }

       

    }
}