const db = require('../db');
const bcrypt = require('bcryptjs');
module.exports = (req, res) => {
    // 查询用户名是否存在

    const sql = 'SELECT * FROM user_info WHERE username=?';
    db(sql, req.body.username, result => {
        if(result.length >= 1) {
            return res.send({
                status: 500,
                msg: '用户名已存在'
            })
        }
        const sql = 'INSERT INTO user_info set ?';
        req.body.password = bcrypt.hashSync(req.body.password, 10);

        const { username, email, password } = req.body;
        const data = { username, email, password,permission:'1'}

        db(sql, data, result => {
            if (result.affectedRows === 1) {
                return res.send({
                    status: 200,
                    msg: '注册成功'
                });
            }
            res.send({
                status: 500,
                msg: '注册失败'
            });
        });
    })
}