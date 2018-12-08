const  mongoose=require('mongoose')
let Schema = mongoose.Schema;

 let adminSchema=new Schema({
	city:{type:String,required:true},
	title:{type:String,required:true},
  	pics:{type:String,required:true},
	itemDesc:{type:String,required:true},
  	nickname:{type:String,required:true},
	price:{type:String,required:true},
	originalPrice:{type:String,required:true}
})
// type 字段类型  required 是否必须
let goodsModel=mongoose.model('goods', adminSchema);
//参数1  集合名字  参数2是 schema对象 将schema对象变成model
module.exports=goodsModel