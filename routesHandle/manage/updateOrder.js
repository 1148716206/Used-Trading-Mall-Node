const db = require('../../db');

const manageDeleteUser = (req, res) => {
 

	sql = `DELETE FROM user_info WHERE id=?`;

	db(sql, req.body.id, (result) => {

		if (result) {
			return res.send({
				status: 200,
				msg: '删除成功!'
			});
		}
	});
};

module.exports = {manageDeleteUser };
