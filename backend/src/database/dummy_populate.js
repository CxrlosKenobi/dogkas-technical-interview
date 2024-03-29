const { faker } = require("@faker-js/faker");
  
async function dummy_populate(knex) {
  await knex("services").del() // Deletes ALL existing entries
  await knex.raw('ALTER TABLE services AUTO_INCREMENT = 1;'); // Reset auto increment for new entries

  const mockupData = [];
  for (let i = 0; i < 100; i++) {
    mockupData.push({
      service_name: faker.internet.domainName(),
      person_name: faker.location.city(),
      // TODO: Move this comments to the README.md in a proper section
      // The db stores these columns as DECIMAL(10, 8) and DECIMAL(11, 8) respectively 
      // So it supports 8 digits after the decimal point and 2 digits before the decimal point
      // Therefore the range of values for latitude is -90 to 90 and for longitude is -180 to 180
      latitude: faker.location.latitude({ precision: 8, min: -90, max: 90 }),
      longitude: faker.location.longitude({ precision: 8, min: -180, max: 180 }),
    });
  }

  await knex("services").insert(mockupData);
};

module.exports = dummy_populate;
