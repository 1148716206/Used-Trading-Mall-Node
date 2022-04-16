const db = require('../../db');

const manageUser = (req, res) => {
	// 模糊查询sql SELECT * FROM user_info WHERE id LIKE ? OR username Like ? OR phone LIKE ?
	//模糊查询两种方法 直接在sql+ mysql.escape("%"+req.body.name+"%")
	// sql += "WHERE id LIKE" + mysql.escape("%"+req.body.name+"%")
	var params = req.body;
	let sql = 'SELECT * FROM `user_info`'; //查询所有数据
	let content = [];
	let isMore = false;
	let total = 0;
	if (
		(params.id && params.username) ||
		(params.id && params.phone) ||
		(params.username && params.phone)
	) {
		isMore = true;
	}

	if (params.id) {
		if (isMore) {
			sql += 'AND id LIKE ?';
		} else {
			sql += 'WHERE id LIKE ?';
		}
		content.push('%' + params.id + '%');
	}
	if (params.username) {
		if (isMore) {
			sql += 'AND username LIKE ?';
		} else {
			sql += 'WHERE username LIKE ?';
		}
		content.push('%' + params.username + '%');
	}
	if (params.phone) {
		if (isMore) {
			sql += 'AND phone LIKE ?';
		} else {
			sql += 'WHERE phone LIKE ?';
		}
		content.push('%' + params.phone + '%');
	}
	if (params.size) {
		sql += 'limit ?,?';
		content.push((params.current - 1) * params.size, parseInt(params.size));
	}

	db('SELECT COUNT(*) as count FROM `user_info`', null, (result) => {
		total = JSON.parse(JSON.stringify(result))[0].count;
	});

	db(sql, content, (result) => {
		// console.log(result.length < 10 ? result.length : total)
		if (result) {
			return res.send({
				status: 200,
				data: result,
				total: total,
			});
		}
	});
};


module.exports = { manageUser };
