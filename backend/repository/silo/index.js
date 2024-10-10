const NivelSilos = require("../../bd/model/NivelSilos");
export const findAllNivelRacao = async () => {
    return await NivelSilos.findAll({
        attributes: ['nivel', 'umidade', 'codigo_silo']
    })
}
