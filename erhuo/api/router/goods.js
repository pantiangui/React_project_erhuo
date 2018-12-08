const express=require('express');
const Router=express.Router();
const path = require("path")



Router.post('/aa',(req,res)=>{
	res.send("访问goods成功")
})


module.exports=Router;