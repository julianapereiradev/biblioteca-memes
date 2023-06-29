import  express  from "express";
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())

app.get("/testememes", (req, res) => {
    res.send("Funcionou o GET do teste")
})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na port ${PORT}}`))
