'use strict';
const { randomUUID} = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const carsData = [];

    for (let i = 1; i <= 5; i++) {

      carsData.push({
        name: `Car ${i}`,
        sewa: `${i}0000`,
        foto: '',
        ukuran: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

  return queryInterface.bulkInsert('Cars', carsData);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null,{});
  }
};
