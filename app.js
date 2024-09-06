function pesquisar() {
    // obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisar for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontado. você precisa digitar  nome de um atleta ou esport</p>"
        return
    }

    // Inicializa uma strin vazia para armazenar os resultados
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //Itera sobre cada dadoda lista de dados 
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se titulo icludes camposPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento HTML para cada resultado
            resultado += `
             <div class="item-resultado">
             <h2>
              <a href="#" target="_black">${dado.titulo}</a>
              </h2>
              <p class= "descricao-meta">${dado.descricao}</P>
              <a href=${dado.link}target="_black"> Mais informações</a>
              </div>
            `;
        }

    }

    if (!resultado) {
        resultados = "<p> Nada foi encontado</p>"
    }
    // Atribui os resultados gerados á seção HTML
    section.innerHTML = resultado

}