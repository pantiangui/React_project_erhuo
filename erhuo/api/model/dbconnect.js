const mongoose = require('mongoose')
//链接数据库
mongoose.connect('mongodb://localhost:27017/erhuo', {
	useNewUrlParser: true
});
//创建数据库对象
let db = mongoose.connection;
//监听数据库链接错误
db.on('error', () => {
	console.log('数据库链接出错！')
})

db.on('open', function() {
	console.log("数据库链接成功！")
});
db.on('disconnected', function() {
	console.log('数据库连接断开！');
})



