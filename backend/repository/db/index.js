import NivelSilos from "../../bd/model/NivelSilos/index.js";
import CapacidadeSilos from "../../bd/model/CapacidadeSilos/index.js";
import sequelize from "../../bd/model/sequelize/index.js";
import { Sequelize } from "sequelize";

export const findAllNivelRacao = async () => {
    return await NivelSilos.findAll({
        attributes: ['nivel', 'umidade', 'codigo_silo']
    })
}

export async function getUltimoRegistro(siloId) {
    try {
        const ultimoRegistro = await CapacidadeSilos.findOne({
            include: [
                {
                    model: NivelSilos,
                    required: true,
                    on: Sequelize.where(
                        Sequelize.col('NivelSilos.codigo_silo'),
                        Sequelize.col('CapacidadeSilos.id_silo'),
                        Sequelize.col('NivelSilos.createdAt')
                    ),
                },
            ],
            where: {
                id_silo: siloId.toString(), 
            },
            order: [[Sequelize.col('NivelSilos.data_hora'), 'DESC']], // Ordena pela coluna de data/hora da tabela `nivel_silos`
        });

        return ultimoRegistro;
    } catch (error) {
        console.error('Erro ao buscar o último registro:', error);
        throw error;
    }
}

export const buscarTodos = async () => {
    return CapacidadeSilos.findAll()
}
export const buscarNivelDoSiloPorID = async (id) => {
    const query = `SELECT 
    ns.nivel,
    to_char(ns."createdAt",'dd/mm/yyyy hh:mi:ss') AS createdAt
    FROM capacidade_silos cs
    JOIN nivel_silos ns
    ON ns.codigo_silo = cs.id_silo::TEXT
    WHERE cs.id_silo = :id
    ORDER BY ns."createdAt"::TIMESTAMP DESC
    LIMIT 1;
`
    return await sequelize.query(query, {
        replacements: { id: id },
        type: sequelize.QueryTypes.SELECT,
    });
};

export const createRegisterSilo = async (req) => {
    try {

        return CapacidadeSilos.create(req)
    } catch (err) {
        console.log("captu")
    }
}

