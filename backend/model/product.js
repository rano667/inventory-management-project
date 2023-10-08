const mongoose = require('mongoose');

// Define a Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity : {
    type: Number,
    required: true,
},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Product model
module.exports = mongoose.model('Product', productSchema);

