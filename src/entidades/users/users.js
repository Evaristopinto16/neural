import pool from "../../db/dbconnection.js";

class Users {
  
    async save(date){
        const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`;
        const values = [date.name, date.email, date.password];

        try {
           
            const resulted =  await pool.query(query, values);
            const user = resulted.rows[0];
            return user
        } catch (error) {
            console.error("error save user", error)
        }
    }

    async findById(id){
        const query = `SELECT * FROM users WHERE id = $1`;
        const value = [id];

        try {
            const result = await pool.query(query, value);
            const user = result.rows[0];
            return user;
            
        } catch (error) {
            console.error("Error in findById users")
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


export default Users