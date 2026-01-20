import mongoose from "mongoose"

const connection = async (url) => {
   try {
    await mongoose.connect(url)
    console.log("Database connected")
   } catch(error) {
      console.log("dbjs catch block");
    console.log("Connection failed", error.message)
   }
} 

export default connection