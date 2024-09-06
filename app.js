function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let informacaoObjetivo = document.getElementById("informacao-objetivo").value

    if (informacaoObjetivo == "") {

        section.innerHTML = "<p>Você não digitou nada</p>"
        return
        
    }

    informacaoObjetivo = informacaoObjetivo.toLowerCase()

    console.log(section);

    
    let resultados = "";
    let titulo = "";
    let descricao = "";


    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (titulo.includes(informacaoObjetivo) || descricao.includes(informacaoObjetivo) ) {
            resultados +=`
    <div class="item-resultado">
    <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href=${dado.link} target="_blank">Saber mais.</a>
    </div>
    `
        }
    }

    if (!resultados) {
        resultados = "<p>nada foi encontrado</p>"
    }

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
}



