const db = require('../../db');

const manageDeleteGoods = (req, res) => {
	sql = `DELETE FROM goods_info WHERE goods_id=?`;
	db(sql, req.body.goods_id, (result) => {
		if (result) {
			return res.send({
				status: 200,
				msg: '删除成功!'
			});
		}
	});
};

module.exports = {manageDeleteGoods };
