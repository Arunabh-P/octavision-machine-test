import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter name'],
        unique:[true,'User already exist']
    },
    phoneNumber:{
        type:String,
        required:[true,'Please enter the mobile number']
    }
})
export default mongoose.model("User",userSchema)