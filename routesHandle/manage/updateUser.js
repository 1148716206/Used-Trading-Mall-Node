const db = require('../../db');

const manageUpdateUser = (req, res) => {
  console.log('1231');
	var params = [
		req.body.username,
		req.body.gender,
		req.body.phone,
		req.body.address,
		req.body.permission,
	];

	sql = `UPDATE user_info SET permission=? WHERE id=${req.body.id}`;

  

	db(sql, req.body.permission, (result) => {
    console.log(result);
		if (result) {
			return res.send({
				status: 200,
				msg: '修改成功!'
			});
		}
	});
};

module.exports = {manageUpdateUser };
