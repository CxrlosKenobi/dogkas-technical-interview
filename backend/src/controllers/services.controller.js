const { listAvailableServices } = require("../database/models/services.model");
const populate_db = require("../database/dummy_populate");

module.exports = {
  listAvailableServices: async (req, res) => {
    const db = req.app.get("database");

    try {
      const results = await listAvailableServices(db);
      if (results.length === 0) {
        return res.status(404).json({ error: "No services found" });
      }
      return res.status(200).json(results);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error fetching services" });
    }
  },
  populateAndListServices: async (req, res) => {
    const knex = req.app.get("database");

    try {
      await populate_db(knex);
      const services = await listAvailableServices(knex);
      if (services.length === 0) {
        return res.status(404).json({ error: "No services found" });
      }
      return res.status(200).json(services);

    } catch (error) {
      console.error("Error populating and fetching services:", error);
      res.status(500).json({ error: "Error populating and fetching services" });
    }
  }
}
