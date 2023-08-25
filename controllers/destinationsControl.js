const Flight = require('../models/flight')

function create(req, res) {
    // find, push review into array, save, redirect user back to show page (refreshes page with new info), catch and errors
    Flight.findById(req.params.id) 
        .then(flightDoc => {
            flightDoc.destinations.push(req.body)
            return flightDoc.save() //need another link and .then chain
        })
        .then (flight => {
            res.redirect(`/flights/${flight._id}`)
        })
        .catch(err => {
            console.log('===err===')
            console.log(err)
            console.log('===err===')
            return res.send('err creating = check terminal')
        })
}

module.exports = {
    create
}