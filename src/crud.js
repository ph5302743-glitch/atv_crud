import express from "express"
import dotenv from "dotenv"

dotenv.config();
const app = express()

app.use(express.json())

const porta = process.env.PORTA 

const filmes = []

app.get("/", (req, res) => {
    try {
        res.status(200).json({ mensagem: "API funcionando com sucesso", status: "OK", date: new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Recife" })})
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao inicar API!", erro: error.message });
    }
});

app.get("/listar", (req, res) => {
    try {
        if (filmes.length === 0) {
            return res.status(200).json({ mensagem: "nenhum filme no catalogo 😑"})
        }
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao listar filmes ☹️", msgerro: error.message})
    }
});


app.get("/listar/:codigo", (req, res) => {
    try {
        const codigo = req.params.codigo
        const filme = filmes.find(filme => filme.codigo === codigo);

        if (!filme) {
            return res.status(404).json({ mensagem: "nemhum filme corresponde a este codigo 😑" })
        }
        res.status(200).json(filme)
    } catch (error) {
        res.status(500).json({ mensagem: "erro ao listar por codigo ☹️", msgerro: error.message })
    }
});

app.post("/adicionar", (req, res) => {
    try {
        const { codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa } = req.body

        if (!codigo || !titulo || !diretor || !genero || !anoLancamento || !duracao || !classificacaoIndicativa) {
            return res.status(400).json({ mensagem: "Preencha todos os campos!"})
        }

        const verificarcodigo = filmes.find(filme => filme.codigo === codigo)
        if (verificarcodigo) {
            return res.status(409).json({ mensagem: "codigo de filme ja cadastrado! 😑"})
        }

        const dados = { codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa };
        filmes.push(dados);

        res.status(201).json({ mensagem: "filme catalogado com sucesso 👌😍"})
    } catch (error) {
        res.status(500).json({ mensagem: "erro ao catalogar filme ☹️", msgerro: error.message })
        
    }
});

app.put("/editar/:codigo", (req, res) => {
    try {
        const codigo = req.params.codigo
        const filme = filmes.find(filme => filme.codigo === codigo)
        if(!filme){
            return res.status(400).json({ mensagem: "Filme não encontrado 🤔"});
        }

        const { novoTitulo, novoDiretor, novoGenero, novoanoLancamento, novaDuracao, novaclassificacaoIndicativa } = req.body
        if(!novoTitulo || !novoDiretor || !novoGenero || !novoanoLancamento || !novaDuracao || !novaclassificacaoIndicativa ){
                return res.status(400).json({mensagem: "Todos os campos são obrigatorios! 😒"})
        }
        
        filme.titulo = novoTitulo;
        filme.diretor = novoDiretor;
        filme.genero = novoGenero;
        filme.anoLancamento = novoanoLancamento;
        filme.duracao = novaDuracao;
        filme.classificacaoIndicativa = novaclassificacaoIndicativa

        res.status(200).json({mensagem: "Filme atualizado com sucesso!👌"})
    } catch (error) {
        res.status(500).json({mensagem: "Erro ao atualizar filme"})
    }
});


app.delete("/excluir/todos", (req, res) => {
    try {
        filmes.length = 0
        res.status(200).json({mensagem: "TODOS OS FILMES DELETADOS!!!😨"})
    } catch (error) {
        res.status(500).json({mensagem: "Erro ao excluir filmes! ☹️", erro: error})
    }

});

app.delete("/excluir/:codigo", (req, res) => {
    try {
        const codigo = req.params.codigo;
        const filme = filmes.find((filme) => filme.codigo === codigo);
        if (!filme) {
            return res.status(404).json({ mensagem: "filme não encontrado"});
        }
        filmes.splice(filmes.indexOf(filme), 1);
        res.status(200).json({mensagem: "o Filme foi excluido 👌😘"})
    } catch (error) {
        res.status(200).json({mensagem: "erro ao excluir Filme 💔☹️"})
    }
});


app.listen(porta, () => {
    console.log(`servidor em execução: http://localhost:${porta}`)
})