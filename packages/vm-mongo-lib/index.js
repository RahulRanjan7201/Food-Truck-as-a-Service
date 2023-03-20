const MongoCrud = require('./mongocurd');
const foodTruckSchema = require('./models/foodtruck')
module.exports = {
  MongoCrud,
  models: {
    foodTruckSchema,
  },
};