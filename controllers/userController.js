const userService = require("../services/userService");

const createUsers = async (req,res) => {
    try{
        const user = await userService.createUser(req.body);

        res.send(201).json({
            success: true,
            data:user,
        });
    }catch(error){
        res.send(400).json({
            success: false,
            message:error.message,
        });
    }
};

const getUsers = async (req,res) => {
    try{
        const users = await userService.getUsers(req.body);

        res.send(200).json({
            success: true,
            data:users,
        });
    }catch(error){
        res.send(500).json({
            success: false,
            message:error.message,
        });
    }
};

module.exports = {createUsers,getUsers};