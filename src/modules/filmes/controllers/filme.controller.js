import FilmeModel from "../models/filme.model.js";

class   FilmeController{
    static adicionar(req, res){
        try {
            const  { codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa } = req.body;
            if ( !codigo || !titulo || !diretor || !genero || !anoLancamento || !duracao || !classificacaoIndicativa ){
                return res.status(400).json({ mensagem: "Preencha todos os campos!"})
            }
            AlunoModel.cadastrar( codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa );
            res.status(201).json({ mensagem: "filme catalogado com sucesso 👌😍"})
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao cadastrar filme!" })
        }
    };

    static listar(req, res){
        try {
            const filmes = FilmeModel.listarTodos()
            if (alunos.lenght === 0){
                return res.status(200).json({ mensagem: "nemhum filme cadastrado"})
            }    
            res.status(200).json(filmes)
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao listar filmes"})
        }
    }

    static listarporcodigo(req, res){
        try {
            const codigo = req.params.codigo
            const filme = FilmeModel.listarporcodigo(codigo)
            if (!filme){
                return res.status(200).json({ mensagem: "nemhum filme cadastrado"})
            }    
            res.status(200).json(filme)
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao listar filmes"})
        }
    }

    static atualizarTotal(req, res){
        try {
           
            const codigo = req.params.matricula
            const { titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa } = req.body
            const filme = FilmeModel.editar(codigo, titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa)
            res.status(200).json(filme)

    } catch (error) {
        res.status(500).json({ mensagem: "erro ao editar"})

    }

    } 

    static atualizarParcial(req, res){
        try {

            const codigo = req.params.matricula
            const { titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa } = req.body
            const filme = FilmeModel.editar(codigo, titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa)
            res.status(200).json(filme)
            
        } catch (error) {

            res.status(500).json({ mensagem: "erro ao editar"})
            
        }
    }
    

    static excluirTodos(req, res){
        try {
        FilmeModel.excluirTodos()
        res.status(200).json({ mensagem: "Todos os filmes excluidos" })
    } catch (error) {
        res.status(500).json({mensagem: "erro ao excluir todes"})

    }

}
static excluirPorCodigo(req, res){
    try {
        const matricula = req.params.matricula
        FilmeModel.excluirPorCodigo()
        res.status(200).json({mensagem: "filme excluido"})
    } catch (error) {
        res.status(500).json({mensagem: "erro ao excluir todes"})
    }
}}

export default FilmeController;