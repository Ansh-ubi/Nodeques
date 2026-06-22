const {pool} = require("../config/db");

const createUser = async(name,email) => {
    const [result] = await pool.execute("Insert INTO emp(name,email) VALUES(?,?)",[name,email]);
    return result;
};

const getUser = async() => {
    const [row] = await pool.execute("Select * From emp");

    return row;
};

const findUserByEmail = async (email) => {
    const [row] = await pool.execute("Select * From emp Where email = ?",[email]);
    return row[0]; 
};

module.exports = {createUser,getUser,findUserByEmail};