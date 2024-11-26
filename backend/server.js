import express from "express";
import cors from "cors";
import { createRegisterSilo } from "./repository/db/index.js";
import sequelize from "./bd/model/sequelize/index.js";
import NivelSilos from "./bd/model/NivelSilos/index.js";

const app = express();
const PORT = 3000;

// Middleware
app.options('*', cors());
app.use(express.json());

// Rota para salvar o nível do silo com logs detalhados
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

// Rota para registrar capacidade do silo
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

// Sincroniza o banco de dados e inicializa o servidor
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
