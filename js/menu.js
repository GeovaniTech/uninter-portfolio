/**
 * Adiciona a classe que deixar o menu mobile aberto.
 */
function toggleMobileMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('mobile-nav-open');
}


/**
 * Adiciona onclick event para os links do menu, fechando o menu mobile ao clicar em algum link.
 */
const linksMenus = document.querySelectorAll("header nav > a");

linksMenus.forEach(link => {
    link.addEventListener("click", () => {
        const header = document.querySelector('header');
        header.classList.remove('mobile-nav-open');
    });
});