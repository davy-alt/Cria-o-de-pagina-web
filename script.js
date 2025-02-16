function toggleDarkMode() {
    // Adiciona ou remove a classe 'dark-mode'
    document.body.classList.toggle('dark-mode');

     // Pega o botão que muda para o modo escuro pelo ID
    const botao = document.getElementById('dark-mode-btn');

    //Verifica se o body ta com a classe 'dark-mode'
    if (document.body.classList.contains('dark-mode')) {
        botao.textContent = 'Desativar Modo Escuro';
    } else {
        botao.textContent = 'Ativar Modo Escuro';
    }
}