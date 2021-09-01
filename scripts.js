let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {

        return resposta.json()
        
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputvalorReais = Number(document.getElementById("input").value)

    let inputmoedas = document.getElementById("input-moedas")

    let inputreal = document.getElementById("input-real")

    inputreal.innerHTML = inputvalorReais.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })


    if (select.value === "US$ Dólar-Americano") {
        let valoremDolares = inputvalorReais / dolar
        inputmoedas.innerHTML = valoremDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }


    if (select.value === "€ Euro") {
        let valoremeuros = inputvalorReais / euro
        inputmoedas.innerHTML = valoremeuros.toLocaleString("de-DE", { style: 'currency', currency: 'EUR' })
    }

}


function trocademoeda() {

    let textomoedas = document.getElementById("texto-moedas")
    let bandeiramoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ Dólar-Americano") {
        textomoedas.innerHTML = "Dólar Americano"
        bandeiramoedas.src = "./img/usa.png"
    }

    if (select.value === "€ Euro") {
        textomoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./img/euro.png"
    }

    converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocademoeda)
