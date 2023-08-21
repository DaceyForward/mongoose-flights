const express = require('express')

const router = express.Router()
const flightCtrl = require('../controllers/flightsControllers')
// NEW
router.get('/new', flightCtrl.new)
//CREATE
router.post('/', flightCtrl.create)
//INDEX
router.get('/', flightCtrl.index)
//SHOW
//EDIT
//UPDATE
//DELETE

module.exports = router