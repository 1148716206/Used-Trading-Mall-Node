const db = require('../db');

const getOrder = (req, res) => {
	let { username } = req.body
	/*const sql = `SELECT goods_list FROM order_info WHERE username='${username}'`;
	db(sql, null, (result) => {
		if (result) {
			console.log(result)
			let data = []
			for(let i of result) {
				let newItem = [i]
				data.push(JSON.parse(JSON.stringify(newItem)))
			}
			return res.send({
				status: 200,
				data,
			});
		}
	});*/

	const sql = `SELECT * FROM order_info WHERE username='${username}'`;
	db(sql, null, (result) => {
		if (result) {
/*
			console.log(JSON.parse(JSON.stringify(result)))
			let data = []
			for(let i of result) {
				let newItem = [i]
				data.push(JSON.parse(JSON.stringify(newItem)))
			}
*/

			return res.send({
				status: 200,
				data:JSON.parse(JSON.stringify(result)),
			});
		}
	});
};

const addOrder = (req, res) => {
	const { username, address, phone, payment } = req.body;
	const goodsNumber = req.body.goods_list.length;
	const goods_list = JSON.stringify(req.body.goods_list);
	const sql = `INSERT INTO order_info SET  goods_list='${goods_list}',username='${username}', address='${address}',phone= '${phone}', payment= '${payment}', status= '0'`;
	db(sql, null, (result) => {
		if (result) {
      //生成订单后 清空购物车
			for (let i = 0; i < goodsNumber; i++) {
				const deleteSQL = `DELETE FROM cart_info WHERE goods_id=${req.body.goods_list[i].goods_id}`;
				db(deleteSQL, null, (result) => {

				});
			}
		}
		return res.send({
			status:200,
			msg: '购买成功',
		});
	});
};

// const deleteCartInfo = (req, res) => {
// 	sql = `DELETE FROM cart_info WHERE goods_id=?`;
// 	db(sql, req.body.goods_id, (result) => {
// 		if (result) {
// 			return res.send({
// 				status: 200,
// 				msg: '删除成功!'
// 			});
// 		}
// 	});
// };

// const updateCartInfo = (req, res) => {
// 	sql = `UPDATE cart_info SET goods_count='${req.body.goods_count}' WHERE goods_id='${req.body.goods_id}'`;
// 	db(sql, null, (result) => {
// 		if (result) {
// 			return res.send({
// 				status: 200,
// 				msg: '商品数量修改成功!'
// 			});
// 		}
// 	});
// };

module.exports = { getOrder, addOrder };
