'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PerfilDeEntrenamiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación uno a muchos con Usuario
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
      this.hasMany(models.Rutina, { foreignKey: 'idPerfilDeEntrenamiento' });
      // Relación muchos a muchos con Ejercicio a través de la tabla intermedia PerfilEntrenamientoEjercicio
      this.belongsToMany(models.Ejercicio, { through: models.PerfilEntrenamientoEjercicio, foreignKey: 'idPerfilDeEntrenamiento' });
    }
    
  }
  PerfilDeEntrenamiento.init({
    nombre: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PerfilDeEntrenamiento',
    tableName: 'PerfilDeEntrenamiento',
    timestamps: false,
  });
  return PerfilDeEntrenamiento;
};