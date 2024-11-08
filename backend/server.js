import express from "express"
import cors from "cors"
import { createRegisterSilo, findAllNivelRacao } from "./repository/db/index.js";
import sequelize from "./bd/model/sequelize/index.js";
import NivelSilos from "./bd/model/NivelSilos/index.js";


const app = express()


app.options('*', cors())
app.use(express.json())


app.get("/nivel-racao", async (req, res) => {
    const response = await findAllNivelRacao();
    res.json(response)
})

app.post("/capacidade_silos", async (req, res) => {

    try {
        console.log("entrou na fn2", req.body)
        await createRegisterSilo({
            ...req.body
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
