import pool from "../../../db/dbconnection.js";


class users {
    async save(user){
 
        const query = `INSERT INTO users (name, email, role, password) VALUES ($1, $2, $3, $4)`;
        const values = [user.name, user.email, user.role, user.password];

        try {
           await pool.query(query, values);
           console.log("user solve")
           return user
            
        } catch (error) {
            console.log("error to register user",error)
        }
    }
    
    async findById(id){
        const query = `SELECT * FROM users WHERE id = $1`;
        const values = [id];

        try {
            const resulted = await pool.query(query, values);
            const user = resulted.rows[0];
            

            if(resulted.rowCount > 0){
                return user
            }else{
                return resulted.rowCount
            }
 

            
            
        } catch (error) {

            console.error("error to findone models", error)
            
        }

    }

    async update(user){

        const query = `UPDATE users SET name= $1, role=$2 WHERE id = $3`;
        const values = [user.name, user.role, user.id];

        try {
            const resulted = await  pool.query(query, values);
            const updateModels = resulted.rowCount;
            if(updateModels >=1) return user
            
        } catch (error) {
            console.log("error updateModels", error)
        }

    }
    
    async deleteByid(id){
        const query = "DELETE FROM users WHERE id= $1";
        const values = [id];

        try {
            
            const result = await pool.query(query, values);
            return result.rowCount
        } catch (error) {
            console.log("error ao deleteById")
            
        }

    };
    async find(){
        const query = `SELECT * FROM users`

        try {

            const result = await pool.query(query);
            const model = result.rows;
            return model
            
        } catch (error) {
            console.log(error)
        }
    }
    async findByEmail(email){
        const query = `SELECT * FROM users WHERE email = $1`;
        const value = [email];

        try {
            const result = await pool.query(query, value);
            const user = result.rows[0];
            return user;
            
        } catch (error) {
            console.error("Error in findById users")
        }
    }
} 


export default users