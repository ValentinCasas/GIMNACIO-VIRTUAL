'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rutina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación muchos a uno con PerfilDeEntrenamiento
      this.belongsTo(models.PerfilDeEntrenamiento, { foreignKey: 'idPerfilDeEntrenamiento' });
      // Relación uno a muchos con DetalleRutina
      this.hasMany(models.DetalleRutina, { foreignKey: 'idRutina' });
    }
    
  }
  Rutina.init({
    idPerfilDeEntrenamiento: DataTypes.INTEGER,
    fechaCreacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Rutina',
    tableName: 'Rutina',
    timestamps: false,
  });
  return Rutina;
};