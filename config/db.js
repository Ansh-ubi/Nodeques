const { Connection } = require("mysql2");
const mysql = require("mysql2/promise");
const { errorMonitor } = require("ws");
require("dotenv").config();

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
     waitForConnections: true,

     connectionLimit:10,
     queueLimit:0
});

const connectDB = async() => {
    try{
    const connection = await pool.getConnection();
    console.log("Db connected successfully ");
     connection.release();    
    }catch(error){
       console.log("DB connection failed");
       console.error(error.message);
       process.exit(1);
    }
   
};
 module.exports = {pool,connectDB,};