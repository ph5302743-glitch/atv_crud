import FilmeModel from "../models/filme.model.js";

class FilmeController {
    static adicionar(req, res) {
        try {
            const { codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa } = req.body;
            if (!codigo || !titulo || !diretor || !genero || !anoLancamento || !duracao || !classificacaoIndicativa) {
                return res.status(400).json({ mensagem: "Preencha todos os campos!" })
            }
            const filme = FilmeModel.adicionar(codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa);
            res.status(201).json({ mensagem: "filme catalogado com sucesso 👌😍", filme })
        } catch (error) {
            res.status(500).json({ mensagem: "error ao cadastrar filme!", erro: error.message })
        }
    }

    static listarTodos(req, res) {
        try {
            const filmes = FilmeModel.listarTodos()
            if (filmes.length === 0) {
                return res.status(200).json({ mensagem: "nenhum filme cadastrado" })
            }
            res.status(200).json(filmes)
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao listar filmes", erro: error.message })
        }
    }

    static listarPorCodigo(req, res) {
        try {
            const codigo = req.params.codigo
            const filme = FilmeModel.listarPorCodigo(codigo)
            if (!filme) {
                return res.status(404).json({ mensagem: "nenhum filme encontrado com esse código" })
            }
            res.status(200).json(filme)
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao listar filme", erro: error.message })
        }
    }

    static atualizarTotal(req, res) {
        try {
            const codigo = req.params.codigo
            const { titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa } = req.body
            const filme = FilmeModel.atualizarTotal(codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa)
            if (!filme) {
                return res.status(404).json({ mensagem: "nenhum filme encontrado com esse código" })
            }
            res.status(200).json(filme)
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao editar", erro: error.message })
        }
    }

    static atualizarParcial(req, res) {
        try {
            const codigo = req.params.codigo
            const { titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa } = req.body
            const filme = FilmeModel.editarParcial(codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa)
            if (!filme) {
                return res.status(404).json({ mensagem: "nenhum filme encontrado com esse código" })
            }
            res.status(200).json(filme)
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao editar", erro: error.message })
        }
    }

    static excluirTodos(req, res) {
        try {
            FilmeModel.excluirTodos()
            res.status(200).json({ mensagem: "Todos os filmes excluídos" })
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao excluir todos", erro: error.message })
        }
    }

    static excluirPorCodigo(req, res) {
        try {
            const codigo = req.params.codigo
            const filmeRemovido = FilmeModel.excluirPorCodigo(codigo)
            if (!filmeRemovido) {
                return res.status(404).json({ mensagem: "nenhum filme encontrado com esse código" })
            }
            res.status(200).json({ mensagem: "filme excluído" })
        } catch (error) {
            res.status(500).json({ mensagem: "erro ao excluir filme", erro: error.message })
        }
    }
}

export default FilmeController; 