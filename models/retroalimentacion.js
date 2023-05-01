'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Retroalimentacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación muchos a uno con Usuario
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
    }
    
  }
  Retroalimentacion.init({
    idUsuario: DataTypes.INTEGER,
    fechaRetroalimentacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Retroalimentacion',
    tableName: 'Retroalimentacion',
    timestamps: false,
  });
  return Retroalimentacion;
};