'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SeguimientoEjercicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
       this.belongsTo(models.Rutina, { foreignKey: 'idRutina' });
       this.belongsTo(models.Ejercicio, { foreignKey: 'idEjercicio' });
    }
  }
  SeguimientoEjercicio.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    idUsuario: DataTypes.INTEGER,
    idRutina: DataTypes.INTEGER,
    idEjercicio: DataTypes.INTEGER,
    fechaRealizacion: DataTypes.DATE,
    repeticiones: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    pesoUtilizado: DataTypes.DOUBLE,
    duracion: DataTypes.INTEGER,
    intensidad: DataTypes.DOUBLE,
    caloriasQuemadas: DataTypes.DOUBLE,
    frecuenciaCardiaca: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SeguimientoEjercicio',
    tableName: 'SeguimientoEjercicio',
    timestamps: false,
  });
  return SeguimientoEjercicio;
};