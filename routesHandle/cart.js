const db = require('../db');

const getCartInfo = (req, res) => {
	// console.log(req.body);
	const sql = `SELECT * FROM cart_info WHERE username=?`;
	db(sql, req.body.username, (result) => {
		if (result) {
			return res.send({
				status: 200,
				data: result,
			});
		}
	});
};

const addCart = (req, res) => {
	const data = {
		goods_id: req.body.goods_id,
		goods_img: req.body.goods_img,
		goods_price: req.body.goods_price,
		goods_count: req.body.goods_count,
		goods_name: req.body.goods_name,
		username: req.body.username,
	};
	//查询是否存在该商品
	const existSQL = `SELECT goods_count FROM cart_info WHERE goods_id=${req.body.goods_id} AND username='${req.body.username}'`;
	db(existSQL, null, (result) => {
		if (result.length !== 0) {
			//存在 改变数量
			const count = JSON.parse(JSON.stringify(result))[0].goods_count;

			let newCount = count + req.body.goods_count;
			const updateSQL = `UPDATE cart_info SET goods_count='${newCount}' WHERE goods_id='${req.body.goods_id}' AND username='${req.body.username}'`;
			db(updateSQL, null, (result) => {
				if (result) {
					return res.send({
						status: 200,
						msg: '加入成功',
					});
				}
			});
		} else {
			//不存在该商品
			const sql = `INSERT INTO cart_info SET ?`;
			db(sql, data, (result) => {
				if (result) {
					return res.send({
						status: 200,
						msg: '加入成功',
					});
				}
			});
		}
	});
};

const deleteCartInfo = (req, res) => {
	const { goods_id, username } = req.body;
	sql = `DELETE FROM cart_info WHERE goods_id=${goods_id} AND username='${username}'`;
	db(sql, null, (result) => {
		if (result) {
			return res.send({
				status: 200,
				msg: '删除成功!',
			});
		}
	});
};

const updateCartInfo = (req, res) => {
	const { goods_count, goods_id, username } = req.body;
	sql = `UPDATE cart_info SET goods_count=${goods_count} WHERE goods_id=${goods_id} AND username='${username}'`;
	db(sql, null, (result) => {
		if (result) {
			return res.send({
				status: 200,
				msg: '商品数量修改成功!',
			});
		}
	});
};

module.exports = { getCartInfo, addCart, deleteCartInfo, updateCartInfo };
