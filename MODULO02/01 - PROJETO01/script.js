
var aleatorio1 = Math.floor(Math.random()*10)
var aleatorio2 = Math.floor(Math.random()*10) 

function chamar1(){
    document.getElementById("digito1").innerHTML = aleatorio1
}

function chamar2(){
    document.getElementById("digito2").innerHTML = aleatorio2
}


botao = document.getElementById("buttoncheck")
imagemfinal =document.getElementById("imagemfinal")

function imagem(){
    if (aleatorio1 == aleatorio2 ){
        imagemfinal.src = "../PROJETO01/Imagens/Acerto.png"
    }else{
        imagemfinal.src = "../PROJETO01/Imagens/Erro.png"
    }


}

