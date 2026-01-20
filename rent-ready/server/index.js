console.log("🔥 index.js started");
import userModel from './models/user.js'
import dbConnection from './config/db.js'
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();


app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});


app.post("/register", async (req, res) => {
  const {username, email, password} = req.body
  console.log(req.body);
  try{  

    const user =  await userModel.create({
      username: username,
      email: email,
      password: password,
    })
    res.json({user});
  }catch(error){
    console.log(error);
  }
})
console.log(process.env.MONGO_URI);
const port = process.env.PORT || 3333;
console.log(port);

const start = async () => {
 try {
await dbConnection(process.env.MONGO_URI);
 
app.listen(port, () => {
  console.log("✅ Backend running on http://localhost:"+port);
});
 } catch(err) {
  console.log(err)
 }
 
}

start()

