const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinationsControl')
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.post('/flights/:id/destinations', ensureLoggedIn, destinationsCtrl.create)

// router.get('/flights/:id/destinations', destinationsCtrl.show)

module.exports = router;