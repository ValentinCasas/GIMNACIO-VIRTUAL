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
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
      // Relación uno a muchos con DetalleRutina
      this.hasMany(models.DetalleRutina, { foreignKey: 'idRutina' });
      this.hasMany(models.SeguimientoEjercicio, { foreignKey: 'idRutina' });

      this.belongsToMany(models.ListaEjercicios, { through: models.RutinaLista, foreignKey: 'idRutina' });
    }
    
  }
  Rutina.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    idUsuario: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    imagenRutina: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rutina',
    tableName: 'Rutina',
    timestamps: false,
  });
  return Rutina;
};