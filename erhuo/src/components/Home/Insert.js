import React, {
	Component
} from 'react';
import axios from 'axios';


class Insert extends Component {
	constructor() {
		super();
		this.state = {
			goods: [
				
			]
		}
	}

// title: "智能手表 "+data.title,
// 				city: data.province + " " + data.city + " " + data.district,
// 				pics: data.pics,
// 				classify: "智能设备",
// 				itemDesc: data.itemDesc,
// 				price: data.price,
// 				originalPrice: Number(data.price)+125,
// 				createTime: data.createTime,
// 				userId: "10012",
// 				nickname: data.nickname

	insert() {
		this.state.goods.map((data, idx) => (
			axios.post('http://127.0.0.1:9090/erhuo/goods/goods_insert', {
				title: "智能手表 ",
				city: 1212,
				pics: 212,
				classify: "智能设备",
				itemDesc: 113241,
				price: 134,
				originalPrice: 3143,
				createTime:32413,
				userId: "10012",
				nickname: 12341324
			})
			.then(res => {
				console.log(res.data)
			})
		))

	}
	select(){
		axios.post('http://127.0.0.1:9090/erhuo/goods/goods_data')
		.then(res => {
			console.log(res.data)
		})
	}

	componentWillMount() {}

	render() {
		return ( <
			div id = "insert" >
			<
			a style = {
				{
					fontSize: '60px'
				}
			}
			onClick = {
				this.insert.bind(this)
			} > 插入数据 < /a>
			 <
			 p style = {
			 	{
			 		fontSize: '60px'
			 	}
			 }
			 onClick = {
			 	this.select.bind(this)
			 } > 查询数据 < /p>
			 < /
			div >
		)
	}
}


export {
	Insert
}
