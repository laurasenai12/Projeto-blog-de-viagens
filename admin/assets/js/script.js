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

    if (email === "lauraadm@gmail.com" && senha === "lauraadm2904") {
        window.location.href = "dashboard.html";
    } else {
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

        
function filtrar(categoria, botao) {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                if (card.classList.contains(categoria)) {
                    card.classList.remove('escondido');
                } else {
                    card.classList.add('escondido');
                }
            });
            const botoes = document.querySelectorAll('.categoria');
            botoes.forEach(item => {
                item.classList.remove('ativa');
            });
            botao.classList.add('ativa');
        }


function filtrarTabela() {
            var pesquisa = document.getElementById("pesquisa").value.toLowerCase();
            var filtro = document.getElementById("filtroStatus").value;

            var tabela = document.getElementById("tabela-consulta");
            var linhas = tabela.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

            var encontrados = 0;

            for (var i = 0; i < linhas.length; i++) {
                var texto = linhas[i].textContent.toLowerCase();
                var status = linhas[i].getElementsByTagName("td")[3].textContent.trim();
                if (
                    texto.includes(pesquisa) &&
                    (filtro == "Todos" || status == filtro)
                ) {
                    linhas[i].style.display = "";
                    encontrados++;
                } else {
                    linhas[i].style.display = "none";
                }
            }
            document.getElementById("sem-resultados").style.display =
                encontrados == 0 ? "block" : "none";
        }
        function mostrarFiltro() {
            var filtro = document.getElementById("filtroStatus");

            if (filtro.style.display == "block") {
                filtro.style.display = "none";
            } else {
                filtro.style.display = "block";
            }

        }

        function visualizar(destino) {
            alert("Visualizando viagem para: " + destino);
        }
        function informacoes(destino, cliente) {
            alert("Destino: " + destino + "\nCliente: " + cliente);
        }
        function editar(destino) {
            alert("Edição da viagem: " + destino);
        }
        function mudarPagina(numero) {
            alert("Página " + numero);
        }
        function abrirMenu() {
            alert("Menu do sistema");
        }