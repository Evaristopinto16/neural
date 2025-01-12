import users from "../../models/entity/users/index.js";
 
import jwt from "jsonwebtoken";
const Users = new users()

/*

 
function verifyJWT(req, res, next){
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
} 

*/



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

                let result  =  await Users.save(newUser)
 
                    res
                    .status(200)
                    .json(
                        result
                    )
                 

               

            }else{
                

                res
               
                .json({
                    message: "empty field"
                })
                
            }
         
            
         


        } catch (error) {
            res
            .json(
                {
                    message: "error create user"
                }
            )
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
        let {email, password} = req.body;

        console.log(req.body)
        if(email && password){
            try {

                console.log(email, password)
                 await Users.findByEmail(email).then((result)=>{
                     if(result.password === password){

                    let id = result.id
                    const token = jwt.sign({id}, "secretKey", {expiresIn: "1h"})


                    res.json( {token: token, result})

                }else{
                    console.log("email or password incorrect")
                    res.json({message: "email or password incorrect"})
                }
                }).catch((error)=>{
                    console.log("login invalid")
                })

               
                
            } catch (error) {
                res
                .status(302)
                .json(error)
            }
        }else{
            console.log("email or password incorrect")
            res
            .status(302)
           
            
            .json({message: "email or password incorrect"})
        }
       
    }

     
}