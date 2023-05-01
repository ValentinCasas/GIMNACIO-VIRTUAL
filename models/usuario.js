'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación uno a muchos con PerfilDeEntrenamiento
      this.hasMany(models.PerfilDeEntrenamiento, { foreignKey: 'idUsuario' });
      // Relación uno a muchos con Progreso
      this.hasMany(models.Progreso, { foreignKey: 'idUsuario' });
    }
    
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    correoElectronico: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE,
    nivelEntrenamiento: DataTypes.INTEGER,
    objetivosEntrenamiento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuario',
    timestamps: false,
  });
  return Usuario;
};