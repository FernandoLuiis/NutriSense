import NivelSilos from "../../bd/model/NivelSilos/index.js";
import CapacidadeSilos from "../../bd/model/CapacidadeSilos/index.js";

export const findAllNivelRacao = async () => {
    return await NivelSilos.findAll({
        attributes: ['nivel', 'umidade', 'codigo_silo']
    })
}

export const createRegisterSilo = async (req) => {
    return CapacidadeSilos.create(req)
}
