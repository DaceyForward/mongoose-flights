const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

// Flight.findById(req.params.id, function(err, flight) {
//     Ticket.find({flight: flight._id}, function(err, tickets) {
//       // Now you can pass both the flight and tickets in the res.render call
       
//     });
// });

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
  
    // Add the user-centric info to req.body 
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    // We can push (or unshift) subdocs into Mongoose arrays
    flight.tickets.push(req.body);
    try {
      // Save any changes made
      await flight.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
  }

module.exports = {
    create
}


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
