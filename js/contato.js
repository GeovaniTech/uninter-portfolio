function isEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

function onEnviarContato(event) {
    const email = document.getElementById('contato-email').value.trim();
    const mensagem = document.getElementById('contato-mensagem').value.trim();

    if (!isEmailValido(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    alert('Mensagem enviada com sucesso! Sua Mensagem: ' + mensagem);
    clearContatoForm();
}

function clearContatoForm() {
    document.getElementById('contato-email').value = '';
    document.getElementById('contato-mensagem').value = '';
}