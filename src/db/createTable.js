
import pool from "./dbconnection.js"
async function createTable() {

    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email  VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL
     
    
    );

    CREATE TABLE IF NOT EXISTS userBalance (
    id SERIAL PRIMARY KEY,
    balance VARCHAR(20) NOT NULL,
    user_id INTEGER REFERENCES users(id) UNIQUE
    );

    CREATE TABLE IF NOT EXISTS subsription (
        id SERIAL PRIMARY KEY,
        tokens VARCHAR(100) NOT NULL,
        userBalance_id INTEGER REFERENCES userBalance(id),
        user_id INTEGER REFERENCES users(id)
       
    );
    CREATE TABLE IF NOT EXISTS plan (
        id SERIAL PRIMARY KEY,
        type VARCHAR(20) NOT NULL,
        price VARCHAR(20) NOT NULL,
        currency VARCHAR(3) NOT NULL,
        tokens VARCHAR(100) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS models (
        id SERIAL PRIMARY KEY,
        model VARCHAR(100) NOT NULL UNIQUE,
        tokens_length  VARCHAR(100) NOT NULL,
        tokens_cost VARCHAR(100) NOT NULL

    );

    `

    try {
    
    
    await pool.query(createTableQuery)
    console.log("Table create with succcessy")

    } catch (error) {

        console.error("error create table", error)
        
    }


    
}

createTable()