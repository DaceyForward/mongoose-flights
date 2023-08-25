const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['ALB', 'BOS', 'DFW', 'DTW', 'LAX']
    },
    arrival: Date
    }, {
    timestamps: true
    });

const flightSchema = new Schema({
    airline: {
       type: String,
       enum: ['American', 'Delta', 'JetBlue', 'United'],
       default: ''
    }, 
    airport: {
        type: String,
        enum: ['ALB', 'BOS', 'DFW', 'DTW', 'LAX'],
        default: 'BOS'
     }, 
    flightNo: Number,
    departs: Date, 
    destinations: [destinationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)




// delete: (from ejs files)
// <input type="text" name="cast"></input>

// <!-- <% flights.forEach(function(flight) { %> -->
//     <!-- <% }) %> -->

// <!-- .toLocaleDateString() provides a more friendly date format -->