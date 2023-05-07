'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ejercicio extends Model {
    static associate(models) {
      this.hasMany(models.DetalleRutina, { foreignKey: 'idEjercicio' });
      this.belongsToMany(models.ListaEjercicios, { through: models.listaEjercicio, foreignKey: 'idEjercicio' });
      this.hasMany(models.SeguimientoEjercicio, { foreignKey: 'idEjercicio' });
    }
  }
  Ejercicio.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    nivelDificultad: DataTypes.STRING,
    grupoMuscular: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ejercicio',
    tableName: 'Ejercicio',
    timestamps: false,
  });
  return Ejercicio;
};
