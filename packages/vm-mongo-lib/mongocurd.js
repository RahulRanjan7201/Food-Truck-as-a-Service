const mongoose = require('mongoose');

class MongoCrud {
  constructor(connectionString) {
    this.connectionString = connectionString;
    this.connection = null;
    this.model = null;
  }

  async connect() {
    if(this.connection) return;
    try {
      console.log("url",this.connectionString)
      this.connection = await mongoose.connect(this.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }

  setModel(modelName, schema) {
    this.model = mongoose.model(modelName, schema);
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      console.log('Document created:', result);
      return result;
    } catch (error) {
      console.error('Error creating document:', error);
      throw error;
    }
  }

  async read(query) {
    try {
      const result = await this.model.find(query);
      console.log('Documents found:', result);
      return result;
    } catch (error) {
      console.error('Error finding documents:', error);
      throw error;
    }
  }

  async update(query, data) {
    try {
      const result = await this.model.updateOne(query, data);
      console.log('Documents updated:', result);
      return result;
    } catch (error) {
      console.error('Error updating documents:', error);
      throw error;
    }
  }
}

module.exports = MongoCrud;
