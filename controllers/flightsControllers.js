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

async function show(req, res) {
Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      // Now you can pass both the flight and tickets in the res.render call
       res.render('partials/header', { flight, tickets, title: 'All Flights', title: 'Add Flight' })
    });
    
});
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
}

function show(req, res) {
    //use findById
    // becomes flight id
    Flight.findById(req.params.id)
      .then(flightDoc => {
        console.log('this is the destination', flightDoc)
        //console.log('this is the review', movieDoc.departures)
        // res.render('flights/show', { flight: flightDoc.airport, title: flightDoc.arrival })
        res.render('flights/show', { flight: flightDoc,  title: 'All Flights', title: 'Add Flight'  })
        //res.render('partials/header', { title: 'All Flights', title: 'Add Flight' })
      })
      .catch(err => {
        console.log('===err===')
        console.log(err)
        console.log('===err===')
        return res.send('err creating = check terminal')
    })
  }
//EDIT
//UPDATE
//DELETE

module.exports = {
    new: newFlight,
    create, 
    index, 
    show, 
    show
}