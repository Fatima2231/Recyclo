const themes = document.querySelectorAll('.theme-circle');
const contents = document.querySelectorAll('.content-page');
const backButtons = document.querySelectorAll('.back-content');

themes.forEach(theme => {
    theme.addEventListener('click', () => {
        const themeId = theme.getAttribute('data-theme');
        contents.forEach(c => c.style.display = 'none');
        document.getElementById(`content-${themeId}`).style.display = 'flex';
    });
});

backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        contents.forEach(c => c.style.display = 'none');
    });
});