const db = require("../db")
const multiparty = require("multiparty")
const path = require("path")

const setUserGender = (req, res) => {
    const sql = `UPDATE user_info SET gender='${req.body.gender}' WHERE id='${req.body.id}'`
    db(sql, null, result => {
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}
const setNickName = (req, res) => {
    const sql = `UPDATE user_info SET nickname='${req.body.nickname}' WHERE id='${req.body.id}'`
    db(sql, null, result => {
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}
const setUserEmail = (req, res) => {
    const sql = `UPDATE user_info SET email='${req.body.email}' WHERE id='${req.body.id}'`
    db(sql, null, result => {
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}
const setUserAddress = (req, res) => {
    const sql = `UPDATE user_info SET address='${req.body.address}' WHERE id='${req.body.id}'`
    db(sql, null, result => {
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}
const setUserPhone = (req, res) => {
    const sql = `UPDATE user_info SET phone='${req.body.phone}' WHERE id='${req.body.id}'`
    db(sql, null, result => {
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}
const setUserAvatar = (req, res) => {

    let form = new multiparty.Form()
    //form.uploadDir="193.9.139.13:8080/cactusImage";

    form.uploadDir = path.resolve(__dirname, "../upload/user_avatar")
    // form.uploadDir = "http://www.cz2000.top/bs/admin/images"
    form.keepExtensions = true   //是否保留后缀
    form.autoFiels = true       //启用文件事件，并禁用部分文件事件，如果监听文件事件，则默认为true。

    form.parse(req, function (err, fields, files) {  //其中fields表示你提交的表单数据对象，files表示你提交的文件对象
        if (err) {
            return res.send({
                status: 500,
                msg: "上传失败！" + err
            })
        } else {
            const avatarName = files.images[0].path.slice(-28)
            const sql = `UPDATE user_info SET avatar='${avatarName}' WHERE username='${req.user.username}'`
            db(sql, null, result => {
                if (result) {
                    return res.send({
                        status: 200,
                        msg: "上传成功！",
                        personPicture: files.images[0].path   //存到数据库中的picture的路径（绝对路径）
                    })
                }
            })
        }
    })


}

const getUserInfo = (req, res) => {
    const sql = "SELECT * FROM user_info WHERE username=?"
    db(sql, req.user.username, result => {
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}

const getAvatar = (req, res) => {
    const sql = "SELECT avatar FROM user_info WHERE username=?"
    db(sql, req.user.username, result => {
        // console.log(path.join(__dirname, "../upload/user_avatar/"+result[0].avatar));
        if (result) {
            return res.sendFile(path.join(__dirname, "../upload/user_avatar/"+result[0].avatar))
        }
    })
}


module.exports = {
    getUserInfo,
    getAvatar,
    setUserGender,
    setNickName,
    setUserEmail,
    setUserAddress,
    setUserPhone,
    setUserAvatar
}
