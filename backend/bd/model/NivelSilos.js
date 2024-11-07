import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';

const NivelSilos = sequelize.define('NivelSilos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
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
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'nivel_silos'
});

export default NivelSilos;
