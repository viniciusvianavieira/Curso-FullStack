// Animação

const items = document.querySelectorAll("[data-animacao");

const windowTop = window.pageYOffset + window.innerHeight;
console.log(windowTop);

const animeScroll = () => {
    items.forEach((element) => {
        const windowTop = window.pageYOffset + window.innerHeight * 0.65;
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        }
    });
}

window.addEventListener("scroll",()=>{
    animeScroll();
})

// Formulário

const inputNome = document.querySelector("#nome")
const inputEmail = document.querySelector("#email")
const labelnome = document.querySelector("#labelnome")
const labelemail = document.querySelector("#labelemail")
const buttonEnviar = document.querySelector("#buttonenviar")
let camposOK= false

inputNome.addEventListener("keyup",()=>{
    if(inputNome.value.length < 3){
        labelnome.innerText = " Nome - digite um nome valido"
        labelnome.style.color = "red"
        camposOK = false
    }else{
        labelnome.innerText = "Nome"
        labelnome.style.color = "black"
        camposOK = true
    }
    validaButton();
})

inputEmail.addEventListener("keyup",()=>{
    if(inputEmail.value.length < 3){
        labelemail.innerText = "Email - digite um email valido"
        labelemail.style.color = "red"
        camposOK = false
    }else{
        labelemail.innerText = "Email"
        labelemail.style.color = "black"
        camposOK = true
    }
    validaButton();
})

const validaButton = () =>{
    if(camposOK == false){
        buttonEnviar.setAttribute("disabled","disabled")
        buttonEnviar.style.border = "solid 1px red"
        buttonEnviar.style.color = "red"
    }else{
        buttonEnviar.removeAttribute("disabled","disabled")
        buttonEnviar.style.border = "solid 1px gray"
        buttonEnviar.style.color = "gray"
    }
}

validaButton();

buttonEnviar.addEventListener("click",()=>{
    alert("Formulario enviado com sucesso")
})
