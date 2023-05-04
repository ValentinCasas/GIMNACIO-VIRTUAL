'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PerfilDeEntrenamiento-Ejercicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPerfilDeEntrenamiento: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PerfilDeEntrenamientos',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      idEjercicio: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ejercicios',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PerfilDeEntrenamiento-Ejercicios');
  }
};
