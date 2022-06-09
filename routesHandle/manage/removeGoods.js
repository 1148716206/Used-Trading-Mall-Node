const db = require('../../db');

const manageRemoveGoods = (req, res) => {
	const { goods_id} = req.body
	sql = `UPDATE goods_info SET status=0 WHERE goods_id=${goods_id}`;

  

	db(sql, null, (result) => {
    // console.log(result);
		if (result) {
			return res.send({
				status: 200,
				msg: '修改成功!'
			});
		}
	});
};

module.exports = {manageRemoveGoods };
