require('dotenv').config();
const express =require('express')
const mainRouter = require('./routes/index')
const cors= require('cors');

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/v1",mainRouter);    

// /api/vi/user/signup
// /api/vi/user/signin
// /api/vi/user/changePassword

// /api/v1/account/trasferMoney
// /api/v1/account/balance


app.get("/",(req,res)=>{
  res.send("Ya! Server is UP!")
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})