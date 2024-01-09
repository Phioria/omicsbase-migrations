'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.renameColumn('records', 'total_mapped', 'number_mapped');
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.renameColumn('records', 'number_mapped', 'total_mapped');
    },
};
