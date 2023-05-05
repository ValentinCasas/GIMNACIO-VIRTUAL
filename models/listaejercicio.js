'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listaEjercicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ListaEjercicios, { foreignKey: 'idLista' });
      this.belongsTo(models.Ejercicio, { foreignKey: 'idEjercicio' });
    }
  }
  listaEjercicio.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    idLista: DataTypes.INTEGER,
    idEjercicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'listaEjercicio',
    tableName: 'lista-ejercicio',
    timestamps: false,
  });
  return listaEjercicio;
};