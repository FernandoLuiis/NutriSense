import {api} from "@/axios";

export const getNivelRacao = async () => {
 const {data} = await api.get("/nivel-racao");
 return data
}
