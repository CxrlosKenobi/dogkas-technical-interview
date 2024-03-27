const { listAvailableServices } = require('../database/models/services.model');
module.exports = {
  listAvailableServices: async (req, res) => {
    const db = req.app.get('database');
    try {
      const results = await listAvailableServices(db);
      if (results.length === 0) {
        return res.status(404).json({ error: 'No services found' });
      }
      return res.status(200).json(results);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Error fetching services' });
    }
  }
}