function checkVisibility() {
    const elementos = document.querySelectorAll('.texto-animado');
    
    elementos.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Verifica se o elemento está na tela (se sua parte superior está visível)
        if (rect.top <= window.innerHeight * 0.75) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}




// Chama a função no scroll e também ao carregar a página
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Chama a função quando a página carrega para garantir que o efeito ocorra desde o início
checkVisibility();

document.getElementById('hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');
});