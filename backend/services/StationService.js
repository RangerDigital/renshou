const stations = require('../models/stations');

class StationService {
  async get(id) {
    return await stations.findById(id);
  }

  async getAll() {
    return await stations.find();
  }
}

module.exports = new StationService();
