import  express  from "express";
import cors from 'cors';

// Created app:
const app = express();

// Settings: 
app.use(cors())
app.use(express.json())

const memes = []

// Function to get a random meme:
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

// Endpoints:
app.get("/memes", (req, res) => {

    const {category} = req.query

    if(category) {
    const onlyCategories = memes.filter((meme) => meme.category === category)
    return res.status(200).send(onlyCategories)
}
    res.status(200).send(memes)
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

// Sever PORT: 
const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
