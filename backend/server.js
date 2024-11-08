import express from "express"
import cors from "cors"
import { createRegisterSilo, findAllNivelRacao } from "./repository/db/index.js";
import sequelize from "./bd/model/sequelize/index.js";


const app = express()


app.options('*', cors())
app.use(express.json())


app.get("/nivel-racao", async (req, res) => {
    const response = await findAllNivelRacao();
    res.json(response)
})

app.post("/capacidade_silos", async (req, res) => {
    const {
        cd_silo,
        qtd_silo,
        diametro_inicial_i,
        diametro_final_i,
        diametro_inicial_s,
        diametro_final_s,
        diametro_central,
        capacidade_silo
    } = req.body
    try {
        console.log("entrou na fn2", capacidade_silo)
        await createRegisterSilo({
            cd_silo,
            qtd_silo,
            capacidade_silo,
            diametro_inicial_i,
            diametro_final_i,
            diametro_inicial_s,
            diametro_final_s,
            diametro_central
        })
        console.log("ok")
        res.send("xegou aqui")

    } catch (e) {
        res.send("Errow rude")

    }
})

app.post("/nivel-racao", async (req, res) => {
    const { nivel, umidade, codigo_silo } = req.body
    const response = await NivelSilos.create({ nivel, umidade, codigo_silo })
    res.json(response)
})

app.listen(3000, () => {
    console.log("subiu!")
})

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao sincronizar as tabelas:', err);
    });


//node --experimental-specifier-resolution=node
