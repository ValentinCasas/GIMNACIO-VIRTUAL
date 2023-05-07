'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RutinaLista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Rutina, { foreignKey: 'idRutina' });
      this.belongsTo(models.ListaEjercicios, { foreignKey: 'idLista' });
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
    }
    
  }
  RutinaLista.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idRutina: DataTypes.INTEGER,
    idLista: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RutinaLista',
    tableName: 'Rutina-lista',
    timestamps: false,
  });
  return RutinaLista;
};