const Flight = require('../models/flight')

//NEW
function newFlight(req, res) {
    console.log('The new route has been hit')
    //res.send('new movies page')
    res.render('flights/new', { errorMsg: '' })
}
//CREATE
function create(req, res) {
    // console.log('this is the request,', req)
    //const theStuffFromTheForm = req
    //req.body.nowShowing = !!req.body.nowShowing
    // req.body.cast = req.body.cast.trim()
    // if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    
    //console.log('this is the request,', req.body)
    Flight.create(req.body)
        .then(flightDoc => {
            console.log('this is the flight returned from the db')
            console.log(flightDoc)

            //return res.send(`Movie create - ${movieDoc.title}`)
            res.redirect('/flights')
        })
        .catch(err => {
            console.log('===err===')
            console.log(err)
            console.log('===err===')
            return res.send('err creating = check terminal')
        })
    //res.send('check the console')
}
//INDEX
function index(req, res) {
    Flight.find({})
        .then(flightDocs => {
            console.log('found all these flights\n', flightDocs)

            res.render('flights/index', { flights: flightDocs })
        })
        .catch(err => {
            console.log('===err===')
            console.log(err)
            console.log('===err===')
            return res.send('err creating = check terminal')
        })
}
//SHOW
//EDIT
//UPDATE
//DELETE

module.exports = {
    new: newFlight,
    create, 
    index
}