const db = require('../../db');

const manageUpdateOrder = (req, res) => {


	const updateSQL = `UPDATE order_info SET goods_list='[${JSON.stringify(req.body)}]' WHERE id='${req.body.id}' `

	db(updateSQL, null , (result) => {

		if (result) {
			return res.send({
				status: 200,
				msg: '修改成功!'
			});
		}
	});
};

module.exports = {manageUpdateOrder };
