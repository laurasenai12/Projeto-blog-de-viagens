function mostrarMensagem(texto, tipo = "info") {
    const msg = document.querySelector("#mensagem");
    msg.style.display = "block";
    msg.className = "alert alert-" + tipo;
    msg.textContent = texto;
}

function validaCPF() {
    const campoCPF = document.querySelector("#cpf");
    const cpf = campoCPF.value.replace(/\\D/g, "");

    if (cpf.length !== 11) {
        mostrarMensagem("CPF inválido! Digite os 11 números.", "danger");
        campoCPF.focus();
        return false;
    }
    if (/^(\\d)\\1{10}$/.test(cpf)) {
        mostrarMensagem("CPF inválido! Confira os números digitados.", "danger");
        campoCPF.focus();
        return false;
    }

    return true;
}

function salvarPerfil() {
    const form = document.querySelector("#formPerfil");

    if (!form.checkValidity()) {
        form.reportValidity();
        mostrarMensagem("Preencha os campos corretamente.", "warning");
        return;
    }

    if (!validaCPF()) {
        return;
    }

    const nome = document.querySelector("#nome").value.trim();
    mostrarMensagem("Perfil de " + nome + " salvo com sucesso!", "success");
}

function limparMensagem() {
    const msg = document.querySelector("#mensagem");
    msg.style.display = "none";
    msg.textContent = "";
    msg.className = "alert";
}

const campoSobre = document.querySelector("#sobre");
campoSobre.addEventListener("input", function () {
    document.querySelector("#contador").textContent =
        campoSobre.value.length + " de 300 caracteres";
});
