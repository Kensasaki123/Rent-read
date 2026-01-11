import mongoose from "mongoose"

const connection = async () => {
   try {
    await mongoose.connect("mongodb://localhost:27017/men")
    console.log("Database connected")
   } catch(error) {
    console.log("Connection failed", error.message)
   }
} 

export default connection