const db = require('../../db');

const manageMessage = (req, res) => {
	// 模糊查询sql SELECT * FROM user_info WHERE id LIKE ? OR username Like ? OR phone LIKE ?
	//模糊查询两种方法 直接在sql+ mysql.escape("%"+req.body.name+"%")
	// sql += "WHERE id LIKE" + mysql.escape("%"+req.body.name+"%")
	var params = req.body;
	let sql = 'SELECT * FROM `message_info`'; //查询所有数据
	let content = [];
	let isMore = false;
	let total = 0;
	if (params.goods_id && params.content) {
		isMore = true;
	}
	if (params.goods_id) {
		sql += 'WHERE goods_id LIKE ?';
		content.push('%' + params.goods_id + '%');
	}
	if (params.content) {
		if (isMore) {
			sql += 'AND content LIKE ?';
		} else {
			sql += 'WHERE content LIKE ?';
		}
		content.push('%' + params.content + '%');
	}

	if (params.size) {
		sql += 'limit ?,?';
		content.push((params.current - 1) * params.size, parseInt(params.size));
	}

	db('SELECT COUNT(*) as count FROM `message_info`', null, (result) => {
		total = JSON.parse(JSON.stringify(result))[0].count;
	});

	db(sql, content, (result) => {
		if (result) {
			// console.log(params)
			return res.send({
				status: 200,
				data: result,
				total ,
			});
		}
	});
};


module.exports = { manageMessage };
