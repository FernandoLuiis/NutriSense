import NivelSilos from "../../bd/model/NivelSilos/index.js";
import CapacidadeSilos from "../../bd/model/CapacidadeSilos/index.js";
import sequelize from "../../bd/model/sequelize/index.js";

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
                        Sequelize.col('CapacidadeSilos.id_silo')
                    ),
                },
            ],
            where: {
                id_silo: siloId.toString(), // Filtra pelo `id_silo`
            },
            order: [[Sequelize.col('NivelSilos.data_hora'), 'DESC']], // Ordena pela coluna de data/hora da tabela `nivel_silos`
        });

        return ultimoRegistro;
    } catch (error) {
        console.error('Erro ao buscar o último registro:', error);
        throw error;
    }
}
export const buscarNivelDoSiloPorID = async (id) => {
    const query = `SELECT ns.nivel
    FROM capacidade_silos cs
    JOIN nivel_silos ns
    ON ns.codigo_silo = cs.id_silo::TEXT
    WHERE cs.id_silo = :id
    ORDER BY ns."createdAt"::TIMESTAMP DESC
    LIMIT 1;
`

    return await sequelize.query(query, {
        replacements: { id: '1' },
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
