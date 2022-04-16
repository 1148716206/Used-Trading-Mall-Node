const db = require('../../db');

const manageInsertUser = (req, res) => {
  var params = [req.body.username, req.body.gender, req.body.phone, req.body.address, req.body.permission]
  var timeStamp = Date.now().toString().substr(-4)

	sql = `INSERT INTO user_info SET nickname='默认用户${timeStamp}', username= ?, password=123456, gender= ?, phone= ?, address= ?, permission= ?`;

	db(sql, params, (result) => {
    // console.log(result);
		if (result) {
			return res.send({
				status: 200,
				msg: '新增成功!'
			});
		}
	});
};

module.exports = {manageInsertUser };
