import users from "../../models/entity/users/index.js";
import bcrypt from "bcryptjs";
const Users = new users()

export default {
    async userRegister(req, res){
    
        try {
            let {name, email, password, role} = req.body

            if(name, email, role, password){

                const newUser =  {
                    name,
                    email ,
                     role,
                    password
                }

              await  bcrypt.genSalt(10,async function(err, salt) {
                     
                bcrypt.hash(newUser.password, salt,async function(err, hash) {
                        if(err){
                            res.redirect("/")
                        }

                        newUser.password = hash
                        console.log(newUser)
                        let result  =  await Users.save(newUser)

                        if(result){
                            res
                            .status(200)
                            .json(
                                result
                            )
                         }else{
        
                            console.log("oi")
                            res
                            
                            .redirect("http://localhost:3000/")
                         }

                    });
                });

               

            }else{
                console.log("oi1")

                res
               
                .redirect("http://localhost:3000/")
                
            }
         
            
         


        } catch (error) {
            console.log("oi2", error)

            res.redirect("http://localhost:3000/")
        } 
    },


    async update(req, res){

        let id = req.params.id;

        if(id){
            let {name, email, password, role} = req.body
            const newUser =  {
                name,
                 
                 role,
                password,
                id
            };

            await Users.update(newUser).then((user)=>{
                res
                .status(200)
                .json(user)
            }).catch((error)=>{
                console.error("error to update user", error);

                res
                .status(403)
                .json({
                    error: {
                        message: "UNAUTHORIZED"
                    }
                })
            })
            
        }else{

            console.log("not Found")
            res.status(404)
            .json("Not Found")
        }

    },

    async delete(req, res){
        let id = Number(req.params.id )

        if(id){
            await Users.deleteByid(id)
            .then((users)=>{
                console.log(users)
                if(users >= 1) res.j=status(200).json({success: {message: "deleted with successfully"}});
                else res.status(302).redirect("/")
                
            })
        }else{
            console.log("not found");

            res
            .status(404)
            .json({
                error: {
                    message: "Not Found"
                }
            })
        }
    },

    async get(req, res){

    },
    async getOne(req, res){
        
        const id  = req.params.id;

        if(id){

        await Users.findById(id)
        .then((user)=>{
            console.log(user);
            
            res.json(user)
        }).catch((error)=>{
            console.error("error to findOne ", error);
            
        })

        }else{
            req
            .redirect("/")
        }
    },


    async userLogin(req, res){
        let {email} = req.body;
        if(email){
            try {
                let result = await Users.findByEmail(email)
                res
                .status(200)
                .json(result)
            } catch (error) {
                res
                .status(302)
                .redirect("/")
            }
        }else{
            res
            .status(302)
            .json("oi")
        }
       
    }

     
}