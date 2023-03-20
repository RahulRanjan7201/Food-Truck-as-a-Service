
const {foodTruckSchema} = require('vm-mongo-lib').models;
const mongocurd = require('../utils/setupmongo')
mongocurd.setModel('FoodTruck', foodTruckSchema);
async function createRecord(data) {
  return await mongocurd.create(data);
}

async function updateRecord(id, updates) {
 return await mongocurd.update({_id:id}, updates);
}

async function getRecordByQuery(query) {
  console.log("QueryRu", query)
  const foodTruck = await mongocurd.read(query);
  return foodTruck;
}

async function getRecords() {
  const foodTrucks = await mongocurd.read({});
  return foodTrucks;
}

module.exports = { createRecord, updateRecord, getRecordByQuery, getRecords };
