console.log("🔥 index.js started");
import userModel from './models/user.js'
import dbConnection from './config/db.js'

import express from "express";
import cors from "cors";

const app = express();

await dbConnection

app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});


app.post("/register", async (req, res) => {
  const {username, email, password} = req.body
  console.log(req.body)
    await userModel.create({
      username: username,
      email: email,
      password: password,
    })
    res.send('data caught')
})

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
