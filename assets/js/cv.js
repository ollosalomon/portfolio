
// Fonction pour vérifier si l'élément GitHub est visible
function checkGitHubVisible() {
    const githubIcon = document.getElementById('github-icon');
    const rect = githubIcon.getBoundingClientRect();
    
    // Si l'élément est visible dans la fenêtre
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Afficher l'icône CV
        document.querySelector('.home__cv-icon').style.display = 'block';
    }
}

// Appel de la fonction lors du chargement de la page et à chaque scroll
window.addEventListener('load', checkGitHubVisible);
window.addEventListener('scroll', checkGitHubVisible);
