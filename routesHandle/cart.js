const db = require('../db')

const getCartInfo = (req, res) => {
    console.log(req.body)
    const sql = `SELECT * FROM cart_info WHERE username=?`;
    db(sql, req.body.username, result => {
        if(result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })


}


module.exports = {getCartInfo}