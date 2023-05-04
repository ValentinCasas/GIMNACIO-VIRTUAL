'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PerfilEntrenamientoEjercicio extends Model {
    static associate(models) {
      this.belongsTo(models.PerfilDeEntrenamiento, { foreignKey: 'idPerfilDeEntrenamiento' });
      this.belongsTo(models.Ejercicio, { foreignKey: 'idEjercicio' });
    }
  }
  PerfilEntrenamientoEjercicio.init({
    idPerfilDeEntrenamiento: DataTypes.INTEGER,
    idEjercicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PerfilEntrenamientoEjercicio',
    tableName: 'PerfilDeEntrenamiento-Ejercicios',
    timestamps: false,
  });
  return PerfilEntrenamientoEjercicio;
};
