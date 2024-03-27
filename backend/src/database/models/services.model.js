module.exports = {
  listAvailableServices: (db) => {
    return db('services').select('*');
  }
}