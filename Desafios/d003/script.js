function contar() {
    var inicio = document.getElementById("txtini")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpass")
    var rest = document.getElementById("res")
    var cont = document.getElementById("cont")

    rest.innerHTML = ""

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        cont.innerHTML = "Impossível contar! <br>"
        cont.innerHTML += "<br>"
        cont.innerHTML += "Informe os números, por favor"
    } else {
            cont.innerHTML = "Contando: <br>"
            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)

            if (p <= 0) {
                alert("Passo inválido! Considerando PASSO 1")
                p = 1
            }

            if (i < f) {
                // CONTAGEM CRESCENTE
                for(var c = i; c <= f; c += p) {
                    rest.innerHTML += `${c} \u{1F449}`
                }
                rest.innerHTML += "\u{1F3C1}"
            } else {
                // CONTAGEM REGRESSIVA
                for (var c = i; c >= f; c -= p) {
                    rest.innerHTML += `${c} \u{1F449} `
                }
                rest.innerHTML += "\u{1F3C1}"
            }
        }
    }

function limpar () {
    document.getElementById("txtini").value = ""
    document.getElementById("txtfim").value = ""
    document.getElementById("txtpass").value = ""
    
    document.getElementById("res").innerHTML = ""; 
    document.getElementById("cont").innerHTML = "Informe os números";
}
