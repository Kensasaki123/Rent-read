import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username:String,
    gmail:String,
    password:String,
})
const userModel = mongoose.model('user2334', userSchema)

export default userModel