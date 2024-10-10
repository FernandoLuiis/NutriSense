const express = require("express")
var cors = require('cors')

const app = express()
app.options('*', cors())

app.use(express.json())


app.get("/nivel-racao", (req, res) => {
    console.log(`passou`)
    res.json({ porcentagem: 100 * Math.random() })
})

app.listen(3000, () => {
  console.log("subiu!")
})
