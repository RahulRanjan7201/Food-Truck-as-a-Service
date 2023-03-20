const mongoose = require('mongoose');

const foodTruckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = foodTruckSchema;