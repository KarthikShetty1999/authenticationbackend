require('dotenv').config({path: '../.env' })
const express =  require('express');
const app=express();
const cors=require("cors");
const connection=require("./db");
const userRoutes = require('./Router/user');
const authRoutes = require('./Router/auth');

connection();
app.use(express.json);
app.use(cors());

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const port=process.env.PORT|| 8088;
app.listen(port,()=>console.log("Listening...",port));