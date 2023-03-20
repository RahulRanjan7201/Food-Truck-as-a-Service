const express = require('express');
const { getRecordByQuery, createRecord, updateRecord } = require('../service/storage');
const router = express.Router();
// Get all food trucks for all
router.get('/', (req, res) => {
  getRecordByQuery({})
    .then(foodTrucks => {
      res.json(foodTrucks);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Get all food trucks for today
router.get('/today', (req, res) => {
  const today = new Date();
const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  getRecordByQuery({date: { 
    $gte: startOfDay, 
    $lt: endOfDay 
  } 
})
    .then(foodTrucks => {
      res.json(foodTrucks);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});
// Add a new food truck
router.post('/', validateData, (req, res) => {
  const foodTruck ={
    name: req.body.name,
    date:new Date(req.body.date)
  };

  createRecord( foodTruck)
    .then((data) => {
      res.status(201).json({ message: 'Food truck added successfully!' , data:data});
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Update an existing food truck
router.put('/:id',validateUpdate, (req, res) => {
  updateRecord(req.params.id, req.body)
    .then(() => {
      res.json({ message: 'Food truck updated successfully!' });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

//MiddleWare
function validateUpdate(req, res, next) {
  if(!req.params.id) res.status(400).json({message:"record id is required"})
  else next();
}
function validateData(req, res, next) {
  if(!req.body.date || !req.body.name) res.status(400).json({message:"Data is Invalid"})
  else next();
}

module.exports = router;