const mongoose = require('mongoose');

const { Schema } = mongoose;
const petshop = new Schema({
  name: String,
  logo: String,
  category: String,
  rate: Number,
  location: Object,
  recipient_id: String,
});

module.exports = mongoose.model('Petshop', petshop);
