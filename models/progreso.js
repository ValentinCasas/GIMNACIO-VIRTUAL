'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación muchos a uno con Usuario
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
      // Relación muchos a uno con DetalleRutina
      this.belongsTo(models.DetalleRutina, { foreignKey: 'idDetalleRutina' });
    }
    
  }
  Progreso.init({
    idUsuario: DataTypes.INTEGER,
    idDetalleRutina: DataTypes.INTEGER,
    fechaProgreso: DataTypes.DATE,
    nivelDificultadAlcanzado: DataTypes.INTEGER,
    numRepeticionesRealizadas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Progreso',
    tableName: 'Progreso',
    timestamps: false,
  });
  return Progreso;
};