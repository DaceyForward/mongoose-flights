const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

//deleted/updated from header.ejs
// <nav>
// <a href="/">HOME</a>
// | 
// <a href="/flights">ALL FLIGHTS</a>
// |
// <a href="/flights/new">ADD FLIGHT</a>
// </nav> 