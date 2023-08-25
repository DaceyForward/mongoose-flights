const express = require('express')

const router = express.Router()
const flightCtrl = require('../controllers/flightsControllers')
const ensureLoggedIn = require('../config/ensureLoggedIn');
// NEW
router.get('/new', ensureLoggedIn, flightCtrl.new)
//CREATE
router.post('/', ensureLoggedIn, flightCtrl.create)
//INDEX
router.get('/', flightCtrl.index)
//SHOW
router.get('/:id', flightCtrl.show)
//EDIT
//UPDATE
//DELETE

module.exports = router