const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res) => {
	// 1. 查询用户是否存在
	// 2. 如果存在就进行密码比较
	// 3. 根据用户信息生成 token

	const sql = 'SELECT * FROM user_info WHERE username=?';
	db(sql, req.body.username, (result) => {
		console.log(result);
		if (result.length !== 1) {
			return res.send({
				status: 400,
				msg: '此用户不存在',
			});
		}
		// 2. 如果存在就进行密码比较
		const psRes = bcrypt.compareSync(req.body.password, result[0].password);
		if (!psRes) {
			return res.send({
				status: 400,
				msg: '密码错误',
			});
		}
		let userDate = {};
		const nicknameSQL = 'SELECT nickname FROM user_info WHERE username=?';

		new Promise((resolve, reject) => {
			// db(nicknameSQL, req.body.username, result => {
			//     if(result) {
			//         var data = JSON.parse(JSON.stringify(result[0]))
			//         getNickName(data)
			//     }
			// })

			const sql = 'SELECT * FROM user_info WHERE username=?';
			db(sql, req.body.username, (result) => {
				if (result) {
					var data = JSON.parse(JSON.stringify(result[0]));
					getNickName(data);
				}
			});
			function getNickName() {
				userDate = {...arguments[0]};
				resolve();
			}
		}).then(() => {
            console.log(userDate)
			const token = jwt.sign(
				{ username: req.body.username, ...userDate },
				config.jwtKey,
				{
					expiresIn: '100000h',
				}
			);
			res.send({
				status: 200,
				msg: '登录成功',
				token,
			});
		});
	});
};
