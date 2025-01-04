import pool from "../../db/dbconnection.js";

class balance{

    async  insert(data){

        const query = `INSERT INTO userBalance (balance, user_id) VALUES ($1, $2)`;
        const values = [data.balance, data.user_id];

        
        try {
          const result =   await pool.query(query, values);
            console.log("saved successfully")
            return result.rowCount
        } catch (error) {
           console.error("error saved balance", error) 
        }

    }

    async UpdateBalance(balance){
        const query = `UPDATE userBalance SET balance= $1 WHERE id= $2`;
        const values = [balance.balance, balance.id];

        try {
            const result = await pool.query(query, values);

            return result.rowCount
        } catch (error) {
            console.log("error to updateBalance: ", error)
        }
    }

    async findUserId(id){
        const query = `SELECT * FROM userBalance WHERE user_id = $1`;
        const value = [id];

        try {
           const resulted =  await pool.query(query, value);
           const balance = resulted.rows[0]

            return balance
            
        } catch (error) {
            console.error("find balance error ", error)
        }
    }
}


export default balance