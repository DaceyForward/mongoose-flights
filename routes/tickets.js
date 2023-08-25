const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/ticketsControl');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'

// // GET /performers/new (new functionality)
// router.get('/performers/new', performersCtrl.new);
// // POST /performers (create functionality)
//router.post('/tickets', ticketsCtrl.create)
// // POST /movies/:id/performers (associate a performer with a movie)
// router.post('/movies/:id/performers', performersCtrl.addToCast);



module.exports = router;