import filmes from "../../../config/database.js"

class FilmeModel {
    // metodo especial do javascript
    constructor(codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa) {
        this.codigo = codigo
        this.titulo = titulo
        this.diretor = diretor
        this.genero = genero
        this.anoLancamento = anoLancamento
        this.duracao = duracao
        this.classificacaoIndicativa = classificacaoIndicativa
    }

    static adicionar(codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa) {
        const filme = new FilmeModel(codigo, titulo, diretor, genero, anoLancamento, duracao, classificacaoIndicativa)
        filmes.push(filme)
        return filme
    }

    static listarTodos() {
        return filmes
    }

    static listarPorCodigo(codigo) {
        return filmes.find(filme => filme.codigo === codigo)
    }

    static editarParcial(codigo, novoTitulo, novoDiretor, novoGenero, novoAnoLancamento, novaDuracao, novaClassificacaoIndicativa) {
        const filme = FilmeModel.listarPorCodigo(codigo)

        if (!filme) {
            return null
        }

        filme.titulo = novoTitulo || filme.titulo
        filme.diretor = novoDiretor || filme.diretor
        filme.genero = novoGenero || filme.genero
        filme.anoLancamento = novoAnoLancamento || filme.anoLancamento
        filme.duracao = novaDuracao || filme.duracao
        filme.classificacaoIndicativa = novaClassificacaoIndicativa || filme.classificacaoIndicativa

        return filme
    }

    static atualizarTotal(codigo, novoTitulo, novoDiretor, novoGenero, novoAnoLancamento, novaDuracao, novaClassificacaoIndicativa) {
        const filme = FilmeModel.listarPorCodigo(codigo)

        if (!filme) {
            return null
        }

        filme.titulo = novoTitulo
        filme.diretor = novoDiretor
        filme.genero = novoGenero
        filme.anoLancamento = novoAnoLancamento
        filme.duracao = novaDuracao
        filme.classificacaoIndicativa = novaClassificacaoIndicativa

        return filme
    }

    static excluirPorCodigo(codigo) {
        const index = filmes.findIndex(filme => filme.codigo === codigo)

        if (index === -1) {
            return null
        }

        const filmeRemovido = filmes.splice(index, 1)
        return filmeRemovido[0]
    }

    static excluirTodos() {
        filmes.length = 0
    }
}

export default FilmeModel