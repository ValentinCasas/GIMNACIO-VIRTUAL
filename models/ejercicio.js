'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ejercicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación muchos a muchos con PerfilDeEntrenamiento a través de la tabla intermedia PerfilEntrenamientoEjercicio
      this.belongsToMany(models.PerfilDeEntrenamiento, { through: models.PerfilEntrenamientoEjercicio, foreignKey: 'idEjercicio' });
      // Relación uno a muchos con DetalleRutina
      this.hasMany(models.DetalleRutina, { foreignKey: 'idEjercicio' });

      this.belongsTo(models.ListaEjercicios, { foreignKey: 'idListaEjercicio' });

    }
    
  }
  Ejercicio.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    nivelDificultad: DataTypes.INTEGER,
    grupoMuscular: DataTypes.STRING,
    idListaEjercicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ejercicio',
    tableName: 'Ejercicio',
    timestamps: false,
  });
  return Ejercicio;
};