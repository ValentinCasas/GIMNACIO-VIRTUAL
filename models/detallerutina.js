'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleRutina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación muchos a uno con Rutina
      this.belongsTo(models.Rutina, { foreignKey: 'idRutina' });
      // Relación muchos a uno con Ejercicio
      this.belongsTo(models.Ejercicio, { foreignKey: 'idEjercicio' });
    }
    
  }
  DetalleRutina.init({
    idRutina: DataTypes.INTEGER,
    idEjercicio: DataTypes.INTEGER,
    tiempoEntrenamiento: DataTypes.TIME,
    frecuenciaEjercicio: DataTypes.INTEGER //en minutos
  }, {
    sequelize,
    modelName: 'DetalleRutina',
    tableName: 'DetalleRutina',
    timestamps: false,
  });
  return DetalleRutina;
};