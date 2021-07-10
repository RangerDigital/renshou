const stations = require('../models/stations');
const measurements = require('../models/measurements');
const alerts = require('../models/alerts');

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

  async getMeasurements(stationId) {
    return await measurements.find({ station: stationId });
  }

  async saveMeasurement(stationId, password, values) {
    let station = await measurements.find({ station: stationId, password: password });

    if (!station) {
      return;
    }

    let measurement = new measurements({ station: stationId, values: values });
    measurement.save();

    return measurement;
  }

  async saveAlert(stationId, password, message) {
    let station = await measurements.find({ station: stationId, password: password });

    if (!station) {
      return;
    }

    let alert = new alerts({ station: stationId, message: message });
    alert.save();

    return alert;
  }
}

module.exports = new StationService();
