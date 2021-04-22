const mongoose = require('mongoose');

const { Schema } = mongoose;
const product = new Schema({
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: 'Petshop',
  },
  name: String,
  cape: String,
  price: Number,
  rate: Number,
});

module.exports = mongoose.model('Product', product);
