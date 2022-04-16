const express = require('express')
const router = express.Router()
const { getPublishedGoods,deletePublishedGoods,updatePublishedGoods } = require('../routesHandle/published')

module.exports = router.post('/getPublishedGoods',getPublishedGoods)
module.exports = router.post('/deletePublishedGoods',deletePublishedGoods)
module.exports = router.post('/updatePublishedGoods',updatePublishedGoods)

