import User from "../model/user.js";

export const register = async (req,res) => {
    try {
        const {name,phoneNumber} = req.body;
        let user = await User.findOne({name})
        if(user){
            return res
            .status(400)
            .json({
                success:false,
                message : "User already exist"
            })
        }
        user = await User.create({
            name,
            phoneNumber
        })
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getOneUser = async(req,res) => {
    try {
        let user = await User.findById(req.params.id)
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getAllUsers = async(req,res) =>{
    try {
        let users = await User.find({})
        res.status(200).json({
            success:true,
            users
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}