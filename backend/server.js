const express = require("express")
var cors = require('cors')
const sequelize = require('./bd/sequelize');

const NivelSilos = require('./bd/model/NivelSilos');
const {findAllNivelRacao} = require("./repository/silo");
const app = express()


app.options('*', cors())
app.use(express.json())


app.get("/nivel-racao", async (req, res) => {
    const response = await findAllNivelRacao();
    res.json(response)
})

app.post("/nivel-racao", async (req, res) => {
    const {nivel, umidade, codigo_silo} = req.body
    const response = await NivelSilos.create({nivel, umidade, codigo_silo})
    res.json(response)
})

app.listen(3000, () => {
    console.log("subiu!")
})

sequelize.sync({force: false})
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao sincronizar as tabelas:', err);
    });


