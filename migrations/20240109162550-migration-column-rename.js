'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.renameColumn('record', 'total_mapped', 'number_mapped');
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.renameColumn('record', 'number_mapped', 'total_mapped');
    },
};
