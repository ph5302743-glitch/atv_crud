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
    static cadastrar(codigo, titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa){
        const dados = { codigo, titulo, diretor, genero, anolancamento, duracao, classificacaoindicativa }
        filmes.push(dados)
    };
    static listar(){
        return alunos
    };
    static listar(codigo){
        return filmes = filme.find(filme => filme.codigo === codigo)
    };
    static editar(novoTitulo, novoDiretor, novoGenero, novoanoLancamento, novaDuracao, novaclassificacaoIndicativa){
        const filme = AlunoModel.listar()
        filme.titulo = novoTitulo;
        filme.diretor = novoDiretor;
        filme.genero = novoGenero;
        filme.anoLancamento = novoanoLancamento;
        filme.duracao = novaDuracao;
        filme.classificacaoIndicativa = novaclassificacaoIndicativa
    }
}
export default FilmeModel
