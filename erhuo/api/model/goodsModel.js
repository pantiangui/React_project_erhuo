const  mongoose=require('mongoose')
let Schema = mongoose.Schema;
/* 
	title			标题
	city			城市
	pics			图片
	classify		分类
	itemDesc		描述
	price			价格
	originalPrice	原价
	createTime		创建时间
	userId			用户id
	nickname		昵称
 */
 let adminSchema=new Schema({
	title:{type:String,required:true},
	city:{type:String,required:true},
  	pics:{type:String,required:true},
	classify:{type:String,required:true},
	itemDesc:{type:String,required:true},
	price:{type:String,required:true},
	originalPrice:{type:String,required:true},
	createTime:{type:String,required:true},
	userId:{type:String,required:true},
  	nickname:{type:String,required:true},
})
// type 字段类型  required 是否必须
let goodsModel=mongoose.model('goods', adminSchema);
//参数1  集合名字  参数2是 schema对象 将schema对象变成model
module.exports=goodsModel

