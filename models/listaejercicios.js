'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListaEjercicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Ejercicio, { through: models.listaEjercicio, foreignKey: 'idLista' });
      this.belongsToMany(models.Rutina, { through: models.RutinaLista, foreignKey: 'idLista' });
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });


    }
  }
  ListaEjercicios.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    idUsuario: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    imagenLista: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ListaEjercicios',
    tableName: 'ListaEjercicios',
    timestamps: false,
  });
  return ListaEjercicios;
};