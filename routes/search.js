const express = require('express')
const router = express.Router()
const {searchGoods} = require('../routesHandle/search')

module.exports = router.post('/', searchGoods)
