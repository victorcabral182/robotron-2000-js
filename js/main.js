const controls = document.querySelectorAll("[data-controle");
const statistics = document.querySelectorAll("[data-estatistica]");
const parts = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const sendRobot = document.querySelector("#producao");
//////////////////////////////////////////////////////////////////////////////////////
controls.forEach((element)=>{
    element.addEventListener("click", (event)=>{
        //console.log(event.target.dataset.controle, event.target.parentNode, event.target.dataset.peca)
        changeData(event.target.dataset.controle, event.target.parentNode, event.target.dataset.peca)
    })
})

sendRobot.addEventListener("click", ()=>{
    alert("Robô enviado para o combate!")
})

function changeData(operation, counter, piece){
    const part = counter.querySelector("[data-contador]")
    if(part.value >= 0) {
        //console.log(statistics[0].textContent)
        if(operation === "+") {
            part.value = parseInt(part.value) + 1;
            statistics.forEach((element)=>{
                element.textContent = parseInt(element.textContent) + parts[piece][element.dataset.estatistica]
                for (let index = 0; index < statistics.length; index++) {
                    let statisticPart = statistics[index];
                    if(statisticPart.textContent < 0) {
                        statisticPart.textContent = 0;
                    }
                }
            })
        } else if(operation === "-"){
            if(part.value === 0) {
                //nada
            } else if(part.value >= 1){
                part.value = parseInt(part.value) - 1;
                changeMathSign()
                statistics.forEach((element)=>{
                    if(element.textContent > 0){
                        element.textContent = parseInt(element.textContent) - parts[piece][element.dataset.estatistica]
                        if(element.textContent < 0) {
                            element.textContent = 0;
                        }
                    }
                })
                changeMathSign()
            }
        }
        if(part.value < 0) {
            part.value = 0;
        }
    }
}

function changeMathSign(){
    parts.bracos.energia = parts.bracos.energia * -1;
    parts.bracos.velocidade = parts.bracos.velocidade * -1;
    parts.blindagem.velocidade = parts.blindagem.velocidade * -1;
    parts.nucleos.velocidade = parts.nucleos.velocidade * -1;
    parts.pernas.energia = parts.pernas.energia * -1;
    parts.foguetes.velocidade = parts.foguetes.velocidade * -1;
}

//                  CÓDIGO DESENVOLVIDO ATRAVÉS DA AULA

/*
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento)=> {
        //console.log(evento.target)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(operacao, peca) {
    //console.log(pecas[peca])
    estatisticas.forEach((elemento)=>{
        if(operacao === "-"){
            //console.log(elemento.dataset.estatistica)
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } 
    })
}
*/