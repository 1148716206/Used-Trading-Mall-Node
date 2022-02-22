const db = require('../db')


const setUserGender = (req,res) => {
    console.log('setUserGender')

    console.log('req',req.body)


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


module.exports = {setUserGender,getUserInfo}
