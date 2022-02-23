const db = require('../db')


const setUserGender = (req,res) => {
    const sql = `UPDATE user_info SET gender='${req.body.gender}' WHERE id='${req.body.id}'`
    db(sql,null, result =>{
        if(result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    } )
}

const setNickName = (req,res) => {
    const sql = `UPDATE user_info SET nickname='${req.body.nickname}' WHERE id='${req.body.id}'`
    db(sql,null, result =>{
        if(result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    } )
}

const setUserEmail = (req,res) => {
    const sql = `UPDATE user_info SET email='${req.body.email}' WHERE id='${req.body.id}'`
    db(sql,null, result =>{
        if(result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    } )
}

const setUserAddress = (req,res) => {
    const sql = `UPDATE user_info SET address='${req.body.address}' WHERE id='${req.body.id}'`
    db(sql,null, result =>{
        if(result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    } )
}
const setUserPhone = (req,res) => {
    const sql = `UPDATE user_info SET phone='${req.body.phone}' WHERE id='${req.body.id}'`
    db(sql,null, result =>{
        if(result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    } )
}







const getUserInfo = (req, res) => {
    const sql = 'SELECT * FROM user_info WHERE username=?';
    db(sql,req.user.username, result =>{
        if(result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    } )
}


module.exports = {setUserGender,getUserInfo, setNickName,setUserEmail,setUserAddress,setUserPhone}
