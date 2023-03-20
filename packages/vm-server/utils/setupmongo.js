const options = require('../service/toml');
const {MongoCrud} = require('vm-mongo-lib');
const connectionString = options.database.mongourl;
const mongoCrud = new MongoCrud(connectionString);
mongoCrud.connect()
  .then(() => {
    console.log('Connected to MongoDB From Server');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoCrud;