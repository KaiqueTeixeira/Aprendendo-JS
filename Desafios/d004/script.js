function gerar() {
    var num = document.getElementById("txtn")
    var rest = document.getElementById("seltab")
    var c = 1

    if (num.value.length == 0){
        alert("Por favor, digite um número")
    } else {
        rest.innerHTML = ""
        while (c <= 10) {
            var n = Number(num.value)
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            rest.appendChild(item)
            c++
        }   
    }
} 





/*for (var c = 1 ; c <= 10 ;) {
    var mult = num * c
    rest.innerHTML += `${num} x ${c} = ${mult} <br>`
    c++


    while(c <= 10) {
    mult = num * c
    rest.innerHTML += `${num} x ${c} = <strong>${mult}</strong> <br>`
    c++
} */