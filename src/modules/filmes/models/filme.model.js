import filmes from "../../../config/database.js"

class FilmeModel{
    //metodo especial do javascript
    constructor(codigo, titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa){
        //inicialização dos parametros
        this.codigo = codigo
        this.titulo = titulo
        this.diretor = diretor
        this.genero = genero
        this.anolacamento = anolancamento
        this.duracao = duracao
        this.classificacaoindicativa = classificacaoindicativa 
    };
    static adicionar(codigo, titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa){
        const dados = { codigo, titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa }
        filmes.push(dados)
    };
    static listar(){
        return filmes
    };
    static listarporCodigo(codigo){
        return filmes = filme.find(filme => filme.codigo === codigo)
    };
    static editarParcial(novoCodigo, novoTitulo, novoDiretor, novoGenero, novoanoLancamento, novaDuracao, novaclassificacaoindicativa){
        const filme = FilmeModel.listarPorCodigo(codigo)

        if(!filme){
            return null
        }
        filme.codigo = novoCodigo || filme.codigo
        filme.titulo = novoTitulo || filme.titulo
        filme.diretor = novoDiretor || filme.diretor
        filme.genero = novoGenero || filme.genero
        filme.anolacamento = novoanoLancamento || filme.anolacamento
        filme.duracao = novaDuracao || filme.duracao
        filme.classificacaoindicativa = novaclassificacaoindicativa || filme.classificacaoindicativa

        return filme

}    static atualizarTotal(novoCodigo, novoTitulo, novoDiretor, novoGenero, novoanoLancamento, novaDuracao, novaclassificacaoindicativa){
       const filme = TarefaModel.listarPorCodigo   
       if(!filme){
            return null
       }
       filme.codigo = novoCodigo 
        filme.titulo = novoTitulo 
        filme.diretor = novoDiretor 
        filme.genero = novoGenero 
        filme.anolacamento = novoanoLancamento 
        filme.duracao = novaDuracao 
        filme.classificacaoindicativa = novaclassificacaoindicativa 


       return tarefa
}

static excluir(codigo){
    const index = filmes.findIndex(filme => filme.codigo === codigo)

    if(index === -1){
        return null
    }

    const filmeRemovido = alunos.splice(index, 1)
    return filmeRemovido[0] 
}

static excluirTodos(){
    filmes.length = 0
}



}

export default FilmeModel