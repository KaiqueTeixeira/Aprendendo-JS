let num = document.getElementById("fnum")
let lista = document.getElementById("seltab")
let res = document.getElementById("res")
let valores = []

function isNumero(n){ //FUNÇÃO QUE VE SE O NÚMERO É ENTRE 1 E 100 
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){ //FUNÇÃO QUE VERIFICAR SE ESSE NÚMERO JÁ ESTÁ NA LISTA OU NÃO
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo, temos <strong> ${tot} número(s) cadastrado(s). </strong> </p>`
        res.innerHTML += `<p> O <strong> maior valor </strong> informado foi <strong> ${maior} </strong> </p>`
        res.innerHTML += `<p> O <strong> maior valor </strong> informado foi <strong> ${menor} </strong> </p>`
        res.innerHTML += `<p> A <strong> soma </strong> de todos os valores é igual a <strong> ${soma} </strong> </p>`
        res.innerHTML += `<p> A <strong> média </strong>  entres todos os números informados é <strong> ${media} </strong> </p>`

    }
}