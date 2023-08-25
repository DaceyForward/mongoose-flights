const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: Number,
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
    }, {
    timestamps: true
});



// const ticketSchema = new Schema({
//     seat: String,
//     price: Number,
//     flight: ObjectId
// }, {
//     timestamps: true
// })

module.exports = mongoose.model('Performer', ticketSchema);



//FROM TICKETS/new.EJS
// {/* <div>Before adding, please ensure that the Performer is not in the following list:</div>
// <section id="badge-container">
//   <% performers.forEach(function(p) { %>
//     <article class="badge"><%= p.name %></article>
//   <% }) %>
// </section> */}