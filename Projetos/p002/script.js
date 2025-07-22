function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    var img = document.getElementById("imagem")
    if (fano.value.lenght == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.src = "imgs/fotocrimasculino.png"
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.src = "imgs/fotojovmasculino.png"
            } else if (idade < 50){
                //ADULTO
                img.src = "imgs/fotoadumasculino.png"
            } else {
                //IDOSO
                img.src = "imgs/fotoidomasculino.png"
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.src = "imgs/fotocrifeminino.png"
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.src = "imgs/fotojovfeminino.png"
            } else if (idade < 50){
                //ADULTO
                img.src = "imgs/fotoadufeminino.png"
            } else {
                //IDOSO
                img.src = "imgs/fotoidofeminino.png"
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}