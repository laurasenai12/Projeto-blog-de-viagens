function mostrarCadastro(event) {
            event.preventDefault();
            document.getElementById('form-login').classList.add('escondido');
            document.getElementById('form-cadastro').classList.remove('escondido');
        }

function mostrarLogin(event) {
            event.preventDefault();
            document.getElementById('form-cadastro').classList.add('escondido');
            document.getElementById('form-login').classList.remove('escondido');
        }
function entrar(event) {
    event.preventDefault();
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;

    if (email !== "" && senha !== "") {
        window.location.href = "index.html";
    }
}
function cadastrar(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email-cadastro').value;
            const senha = document.getElementById('senha-cadastro').value;
            const confirmarSenha = document.getElementById('confirmar-senha').value;

            if (senha !== confirmarSenha) {
                alert("As senhas não coincidem!");
                return;
            }
            console.log(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
            window.location.href = "index.html";
        }
function esqueciSenha(event) {
            event.preventDefault();
            alert("Funcionalidade de recuperação de senha ainda não implementada.");
        }
