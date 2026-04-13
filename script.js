// Efecto de partículas románticas
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'floatHeart 4s linear forwards';
    
    document.body.appendChild(heart);
    
    // Eliminar el corazón después de 4 segundos
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Crear corazones cada 300ms
setInterval(createHeart, 300);

// Efecto click en imagen principal
document.querySelector('.love-image').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Variable para la música
const musica = document.getElementById('musicaFondo');

// Efecto click en imagen principal Y reproducir música
document.querySelector('.love-image').addEventListener('click', function() {
    // 1. Hace la animación de latido
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    if (musica.paused) {
        musica.play();
    }
});

document.body.addEventListener('click', function() {
    if (musica.paused) {
        musica.play();
    }
}, { once: true });