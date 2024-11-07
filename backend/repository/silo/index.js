import NivelSilos from "../../bd/model/NivelSilos";
import CapacidadeSilos from "../../bd/model/CapacidadeSilos.js";

export const findAllNivelRacao = async () => {
    return await NivelSilos.findAll({
        attributes: ['nivel', 'umidade', 'codigo_silo']
    })
}

export const createRegisterSilo = async (req) => {
    return CapacidadeSilos.create(req)
}
