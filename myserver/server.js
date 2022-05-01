import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from "./DataImport.js";
import users from './data/users.js';
 
dotenv.config();
connectDatabase();
const app = express();

//API
app.use("/api/import/", ImportData);

//Load users from server

app.post("/api/users", (req, res) => {
    res.json(users);
})

app.get("/", (req, res) => {
    res.send("ApI is running ...");
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server is running on port: ${PORT}`));