const express = require("express");
const app = express();
const yzpurpose=require("./tsconfig");



//目的地数据
app.use("/api/purpose",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(yzpurpose)
});


app.listen(3001,()=>{
  console.log("api server is ready on port 3001")
});
