import  express  from "express";
import cors from 'cors';

// Criação do app:
const app = express();

// Configurações: 
app.use(cors())
app.use(express.json())

const memes = []

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}


// Funções (endpoints):
app.get("/memes", (req, res) => {
    res.status(201).send(memes)
})

app.post("/memes", (req, res) => {
    const {description, image, category} = req.body

    if(!description || description === "" || !image || image === "" || !category || category === "") {
        return res.status(409).send("Preencha todos os campos")
    }

    memes.push({id: (memes.length + 1), description, image, category})
    res.status(201).send("POST do meme feito com sucesso!")
})

app.get("/memes/random", (req, res) => {
    res.status(201).send(getRandomItem(memes));
})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
