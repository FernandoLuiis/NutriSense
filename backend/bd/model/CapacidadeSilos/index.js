import { DataTypes } from 'sequelize';
import sequelize from '../sequelize/index.js';


const CapacidadeSilos = sequelize.define('CapacidadeSilos', {
    id_silo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    capacidade_silo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cd_silo: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    qtd_silo: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    diametro_inicial_i: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    diametro_inicial_s: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    diametro_final_s: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    diametro_central: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    diametro_final_i: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'capacidade_silos'
});

export default CapacidadeSilos;
