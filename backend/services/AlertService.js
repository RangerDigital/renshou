const alerts = require('../models/alerts');
const stations = require('../models/stations');

class AlertService {
  async getAll() {
    let alertsArray = [];

    for (let alert of await alerts.find()) {
      alert = alert.toObject();
      alert.station = await stations.findById(alert.station);

      alertsArray.push(alert);
    }

    return alertsArray;
  }
}

module.exports = new AlertService();
