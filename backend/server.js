import express from "express";
import cors from "cors";
import { buscarNivelDoSiloPorID, buscarTodos, createRegisterSilo } from "./repository/db/index.js";
import sequelize from "./bd/model/sequelize/index.js";
import NivelSilos from "./bd/model/NivelSilos/index.js";

const app = express();
const PORT = 3000;

app.options('*', cors());
app.use(express.json());


app.get("/buscarNivelSilo/:id", async (req, resp) => {
    console.log('nivelSilo')
    const res = await buscarNivelDoSiloPorID(req.params.id)
    resp.json(res[0])
})

app.get("/buscarNivelSilo/:createAD", async (req, resp) => {
    console.log('nivelSilo')
    const res = await buscarNivelDoSiloPorID(req.params.createAD)
    resp.json(res[0])
})

app.get("/todosSilos", async (req, resp) => {
    const res = await buscarTodos()
    resp.json(res)
})

app.post('/api/nivel-silo', async (req, res) => {
    try {
        console.log("Dados recebidos do sensor:", req.body);
        const { codigo_silo, nivel, umidade } = req.body;

        // Validações básicas
        if (!codigo_silo || !nivel || !umidade) {
            console.error("Erro: Dados incompletos recebidos.");
            return res.status(400).json({ error: 'Dados incompletos enviados.' });
        }

        // Salva os dados na tabela NivelSilos
        const novoRegistro = await NivelSilos.create({
            codigo_silo,
            nivel,
            umidade
        });

        console.log("Dados salvos com sucesso no banco:", novoRegistro.toJSON());
        res.status(201).json({ message: 'Dados recebidos e salvos com sucesso.' });
    } catch (error) {
        console.error('Erro ao salvar dados no banco:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.post("/capacidade_silos", async (req, res) => {
    try {
        console.log("Dados recebidos no /capacidade_silos:", req.body);
        await createRegisterSilo({ ...req.body });
        console.log("Dados da capacidade do silo salvos com sucesso.");
        res.send("Registro salvo com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar dados no /capacidade_silos:", error);
        res.status(500).send("Erro ao salvar dados.");
    }
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso!');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erro ao sincronizar as tabelas:', err);
    });
