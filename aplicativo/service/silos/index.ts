import { api } from "@/axios";

export const getNivelRacao = async () => {
    const { data } = await api.get("/nivel-racao");
    return data
}

export const getSiloInfo = async (id) => {
    const { data } = await api.get("/buscarNivelSilo/" + id);
    return data
}
export const getAllSilos = async () => {
    const { data } = await api.get("/todosSilos");
    return data
}
