const stations = require('../models/stations');

class StationService {
  async get(id) {
    return await stations.findById(id);
  }

  async getAll() {
    return await stations.find();
  }

  async create(name, location, password) {
    let station = new stations({ name: name, location: location, password: password });
    station.save();

    return station;
  }
}

module.exports = new StationService();
