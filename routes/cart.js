const express = require('express')
const router = express.Router()
const {getCartInfo,addCart,deleteCartInfo,updateCartInfo} = require('../routesHandle/cart')

module.exports = router.post('/getCartInfo', getCartInfo)
module.exports = router.post('/addCart', addCart)
module.exports = router.post('/deleteCartInfo', deleteCartInfo)
module.exports = router.post('/updateCartNumber', updateCartInfo)
