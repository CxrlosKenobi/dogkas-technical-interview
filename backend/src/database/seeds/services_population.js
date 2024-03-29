const populate_db = require("../dummy_populate");

exports.seed = async function (knex) {
  await populate_db(knex);
}
