const toggleTheme = document.getElementByID('toggleTheme');
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'dark') { 
    rootHtml.setAttribute('data-theme', 'light');
    }else {
    rootHtml.setAttribute('data-theme', 'dark');
    }
    
    toggleTheme.classList.toggle('bi-moon-stars');
    toggleTheme.classList.toggle('bi-sun');
}

toggleTheme.addEventListener('click', changeTheme);