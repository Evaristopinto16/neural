import pool from "../../../db/dbconnection.js";

class models {
    async save(models){
        const query = `INSERT INTO models(model, tokens_length, tokens_cost) VALUES ($1, $2, $3)`;
        const values = [models.model, models.tokens_length, models.tokens_cost];

        try {
           
            const resulted =  await pool.query(query, values);
            const user = resulted.rows[0];
            return {
                message: "saved with successfully"
            }


        } catch (error) {
          console.error("error to inser or save models", error)  
        }
    }

    async update(models){

        const query = `UPDATE models SET model = $1, tokens_length= $2, tokens_cost= $3 WHERE id = $4`;
        const value = [models.model, models.tokens_length, models.tokens_cost, models.id];

        try {
            const resulted =await  pool.query(query, value);
            const updateModels = resulted.rows[0];

            return updateModels
        } catch (error) {
            console.log("error updateModels", error)
        }

    }

    async findById(id){
        const query = `SELECT * FROM models WHERE id = $1`;
        const values = [id];

        try {
            const resulted = await pool.query(query, values);
            const model = resulted.rows[0];

            console.log("findOne with successfully");

            return model
            
        } catch (error) {

            console.error("error to findone models", error)
            
        }

    }

    async findByModel(model){
        const query = `SELECT * FROM models WHERE model= $1`;
        const values = [model];

        try {
            const result = await pool.query(query, values);
            if(result.rowCount>0){
                return result.rows[0];
            }else{
                return result.rowCount
            }
        } catch (error) {
            console.log("error findByModels ", error)
        }
    }

    async deleteById(id){

        const query = `DELETE FROM models WHERE id= $1`;
        const values = [id];

        try {

            const resulted  =  await pool.query(query, values); 
            console.log("deleted with ok");
 
            
        } catch (error) {
        console.log("error to delele models", error)
            
        }

    }

    async find(){
        const query = `SELECT * FROM models`

        try {

            const result = await pool.query(query);
            const model = result.rows;
            return model
            
        } catch (error) {
            console.log(error)
        }
    }
}


export default models