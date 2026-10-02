const formulario = document.getElementById("formLogin")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
 
const emailErro = document.getElementById("emailErro")
const senhaErro = document.getElementById("senhaErro")
const resultado = document.getElementById("resultado")
 
formulario.addEventListener("submit", function(event) {
 
    event.preventDefault()
 
    emailErro.innerHTML = ""
    senhaErro.innerHTML = ""
    resultado.innerHTML = ""
 
    let formularioValido = true
 
    if (email.value.trim() === "") {
        emailErro.innerHTML = "Digite seu e-mail."
        formularioValido = false
    }
 
    if (senha.value.trim() === "") {
        senhaErro.innerHTML = "Digite sua senha."
        formularioValido = false
    }
 
    if (formularioValido) {
        resultado.innerHTML = "Login preenchido corretamente!"
    }
})