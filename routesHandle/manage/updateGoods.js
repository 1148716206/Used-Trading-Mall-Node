const db = require('../../db');

const manageUpdateGoods = (req, res) => {

	const { goods_id,goods_name, goods_number,browse_num} = req.body
	sql = `UPDATE goods_info SET goods_name='${goods_name}',goods_number='${goods_number}',browse_num='${browse_num}' WHERE goods_id=${goods_id}`;

  

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

module.exports = {manageUpdateGoods };
