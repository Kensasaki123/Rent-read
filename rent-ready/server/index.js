import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userModel from "./models/user.js";
import dbConnection from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is alive" });
});

app.post("/register", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log("Server running on port", port);
});

dbConnection(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.error("DB error", err));
