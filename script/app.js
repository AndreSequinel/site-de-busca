function buscarCarros() {
    window.location.href = "buscaDeCarros.html";
}

function pesquisar(){
    let _campoPesquisa = document.getElementById("campo-pesquisa").value
    let _sectionResultado = document.getElementById("id-resultados-pesquisa")
    let _resultadosDaPesquisa = ""

    if (!_campoPesquisa){
        _sectionResultado.innerHTML = "<p>Nenhum valor encontrado</p>"
        return
    }

    _campoPesquisa = _campoPesquisa.toLowerCase()
    let titulo = ""
    let descricao = ""

    for (let carro of listaDeCarros) {       
        titulo = carro.titulo.toLowerCase()
        descricao = carro.descricao.toLowerCase()
        if (titulo.includes(_campoPesquisa) || descricao.includes(_campoPesquisa)){
            _resultadosDaPesquisa += `
            <div class="item-resultado">
                <h2>
                    ${carro.titulo}
                </h2>
                <p class="descricao-meta">
                    ${carro.descricao}
                </p>
                <ul>
                    <li><strong>Marca:</strong> ${carro.marca}</li>        
                    <li><strong>Modelo:</strong> ${carro.titulo}</li>
                    <li><strong>Potência:</strong> ${carro.potencia}</li>
                    <li><strong>Preço:</strong> ${carro.preco}</li>
                    <li><strong>Cambio:</strong> ${carro.cambio}</li>
                    <li><strong>Pais de origem:</strong> ${carro.paisDeOrigem}</li>
                    <li><strong>Saiba mais em:</strong> <a href="${carro.linkWikipedia}" target="_blank"> Mais informações </a></li>
                </ul>
            </div>
        `
        }        
    }
    
    if(!_resultadosDaPesquisa){
        _resultadosDaPesquisa = "<p>Este carro não está localizado na nossa base de dados.</p>"
    }
    _sectionResultado.innerHTML = _resultadosDaPesquisa;        
}


function buscarMotos() {
    window.location.href = "buscaDeMotos.html";
}

function PesquisarMoto(){

    let _campoPesquisaMotos = document.getElementById("campo-busca-motos").value
    let _sectionResultadoMoto = document.getElementById("resultados-pesquisa-motos")
    let _resultadoPesquisaMotos = "";

    if (_campoPesquisaMotos.trim() == "") {
        _sectionResultadoMoto.innerHTML = "<p> nada encontrado </p>"
        return
    }

    _campoPesquisaMotos = _campoPesquisaMotos.toLowerCase()
    let marca = ""
    let modelo = ""
    let nome = ""

    for (let moto of listaDeMotos) {
        marca = moto.marca.toLowerCase()
        modelo = moto.modelo.toLowerCase()
        nome = moto.nome.toLowerCase()
        if (marca.includes(_campoPesquisaMotos) || modelo.includes(_campoPesquisaMotos) || nome.includes(_campoPesquisaMotos)){
            _resultadoPesquisaMotos += `   
            <div class="item-resultado">
                <h2>
                    ${moto.marca} ${moto.nome} ${moto.modelo} 
                </h2>
                    <p class="descricao-meta">
                        ${moto.descricao}
                    </p>
                <ul>
                    <li><strong>Marca:</strong> ${moto.marca}</li>
                    <li><strong>Nome:</strong> ${moto.nome}</li>
                    <li><strong>Modelo:</strong> ${moto.modelo}</li>
                    <li><strong>Ano:</strong> ${moto.ano}</li>
                    <li><strong>Cilindrada:</strong> ${moto.cilindrada}</li>
                    <li><strong>Link:</strong> <a href="${moto.linkWikipedia}" target="_blank"> Mais informações</a></li>
                </ul>
            </div>
        `
        }
    }
    
    if (_resultadoPesquisaMotos == "") {
        _resultadoPesquisaMotos = "<p>Esta moto não está localizado na nossa base de dados.</p>"
    }

    _sectionResultadoMoto.innerHTML = _resultadoPesquisaMotos;
}
