'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class votosRetroalimentacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
      this.belongsTo(models.Retroalimentacion, { foreignKey: 'idRetroalimentacion' });
    }
  }
  votosRetroalimentacion.init({
    idUsuario: DataTypes.INTEGER,
    idRetroalimentacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'votosRetroalimentacion',
    tableName: 'votosRetroalimentacion',
    timestamps: false,
  });
  return votosRetroalimentacion;
};