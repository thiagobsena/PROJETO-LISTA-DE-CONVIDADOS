// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante / Agua - 1000ml por pessoa + 6 horas - 1500ml

// Criança valem por 0,5


let inputAdultos = document.getElementById("adultos") ;
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular () {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adutos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML = `<p>${Math.ceilqtdTotalCerveja / 355} Latas de Cervejas</p>`
    resultado.innerHTML = `<p>${Math.ceilqtdTotalBebida / 2000} Garrafas de Bebidas</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000 ;
    } else {
        return 1200;
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500; 
    } else {
        return 1000
    }

}