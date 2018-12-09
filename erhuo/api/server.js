const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./model/dbconnect.js');
const path = require('path')
let proxy = require("http-proxy-middleware")

//post参数解析
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 允许所有域名跨域
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	
	// 跨域请求CORS中的预请求
	if (req.method == "OPTIONS"){
		// res.send(200); //让options请求快速返回
	}
	else{
		next();
	} 
});


const goods = require('./router/goods.js'); //用户

// 路由指向
app.use('/erhuo/goods', goods); //栏目


app.listen(9090, () => {
	console.log("Server startup 9090")
})
