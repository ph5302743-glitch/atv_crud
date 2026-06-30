import express from "express"
import dotenv from "dotenv"

dotenv.config();
const app = express()

app.use(express.json())

const filmes = []

app.get("listar", (req, res) => {
    try {
        if (filmes.length === 0) {
            return res.status(200).json({ mensagem: "nenhum filme no catalogo"})
        }
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao listar filmes", msgerro: error.message})
    }
})


app.get("/listar/:codigo", (req, res) => {
    try {
        const codigo = req.params.codigo
        const filme = filmes.find(filme => filme.codigo === codigo);

        if (!filme) {
            return res.status(404).json({ mensagem: "nemhum filme corresponde a este codigo" })
        }
        res.status(200).json(filme)
    } catch (error) {
        res.status(500).json({ mensagem: "erro ao listar por codigo", msgerro: error.message })
    }
})

app.post("/adicionar", (req, res) => {
    try {
        const { codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIdentificativa } = req.body

        if (!codigo || !titulo || !diretor || !genero || !anoLancamento || !duracao || !classificacaoIdentificativa) {
            return res.status(400).json({ mensagem: "Preencha todos os campos!"})
        }

        const verificarcodigo = filmes.find(filme => filme.codigo === codigo)
        if (verificarcodigo) {
            return res.status(409).json({ mensagem: "codigo de filme ja cadastrado!"})
        }

        const dados = { codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIdentificativa };
        filmes.push(dados);

        res.status(201).json({ mensagem: "filme catalogado com sucesso"})
    } catch (error) {
        res.status(500).json({ mensagem: "erro ao catalogar filme," msgerro: error.message })
        
    }
})

app.put("/editar/:codigo", (req, res) => {
    try {
        const codigo = req.params.codigo
        const aluno = alunos.find(filme => filme.codigo === codigo)
        if(!filme){
            return res.status(400).json({ mensagem: "Filme não encontrado"})
        }
    } catch (error) {
        
    }
})