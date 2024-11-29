import { DataTypes } from 'sequelize';
import sequelize from '../sequelize/index.js';

const NivelSilos = sequelize.define('NivelSilos', {
    codigo_silo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivel: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    umidade: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: 'nivel_silos'
});

export default NivelSilos;

  
