const express=require('express');
const Router=express.Router();
const path = require("path")

// 引入模型
const goodsModel=require('../model/goodsModel.js');

// 插入数据
Router.post('/goods_insert',(req,res)=>{
	let {title,city,pics,classify,itemDesc,price,originalPrice,createTime,userId,nickname} = req.body;
	goodsModel.insertMany({title,city,pics,classify,itemDesc,price,originalPrice,createTime,userId,nickname})
	.then(function(data){
		if(data.length>0){
			return res.send({err:0,msg:'添加成功'})
		}
	})
	.catch(function(err){
		return res.send({err:-1,msg:'添加失败'})
	})
})

// 查询所有数据
Router.post('/goods_data',(req,res)=>{
	let {id} = req.body;
	console.log(id)
	goodsModel.find()
	.then(function(data){
		if(data.length>0){
			return res.send(data)
		}
	})
	.catch(function(err){
		return res.send("查询失败")
	})
})

// 按分类查询数据
Router.post('/goods_classify',(req,res)=>{
	let {classify} = req.body;
	goodsModel.find({classify:classify})
	.then(function(data){
		if(data.length>0){
			return res.send(data)
		}
	})
	.catch(function(err){
		return res.send("查询失败")
	})
})


// 获取同城附近数据
Router.post('/goods_nearby',(req,res)=>{
	let {address} = req.body;
	goodsModel.find({city:{$regex:address}})
	.then(function(data){
		if(data.length>0){
			return res.send(data)
		}
	})
	.catch(function(err){
		return res.send("查询失败")
	})
})


// 新发布数据
Router.post('/goods_new',(req,res)=>{
	goodsModel.find()
	.then(function(data){
		// return res.send(data)
		if(data.length>0){
			goods_data=[];
			for(var i=0;i<data.length;i++){
				if(i%6==0){
					goods_data.push(data[i])
				}
			}
			return res.send(goods_data)
		}
	})
	.catch(function(err){
		return res.send("查询失败")
	})
})


module.exports=Router;