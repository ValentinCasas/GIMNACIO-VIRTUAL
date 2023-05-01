'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PerfilEntrenamientoEjercicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación muchos a uno con PerfilDeEntrenamiento
      this.belongsTo(models.PerfilDeEntrenamiento, { foreignKey: 'idPerfilDeEntrenamiento' });
      // Relación muchos a uno con Ejercicio
      this.belongsTo(models.Ejercicio, { foreignKey: 'idEjercicio' });
    }
    
  }
  PerfilEntrenamiento - Ejercicio.init({
    idPerfilDeEntrenamiento: DataTypes.INTEGER,
    idEjercicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PerfilEntrenamientoEjercicios',
    tableName: 'PerfilEntrenamiento-Ejercicios',
    timestamps: false,
  });
  return PerfilEntrenamiento - Ejercicio;
};