const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

// Flight.findById(req.params.id, function(err, flight) {
//     Ticket.find({flight: flight._id}, function(err, tickets) {
//       // Now you can pass both the flight and tickets in the res.render call
       
//     });
// });


// module.exports = {
//     create
// }


// function create(req, res) {
//     Flight.findById(req.params.id) 
//         .then(flightDoc => {
//             flightDoc.tickets.push(req.body)
//             return flightDoc.save() 
//         })
//         .then (flight => {
//             res.redirect(`/flights/${flight._id}`)
//         })
//         .catch(err => {
//             console.log('===err===')
//             console.log(err)
//             console.log('===err===')
//             return res.send('err creating = check terminal')
//         })
// }
