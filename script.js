const container = document.getElementById('circle-container');
const body = document.body;
const themeButton = document.getElementById('theme-toggle');
const numberOfCircles = 40;
const numberOfStars = 100;

function updateButtonColor() {
    if (currentTheme === 'default') {
        themeButton.style.background = 'rgba(0, 0, 50, 0.8)';
    } else if (currentTheme === 'dark') {
        themeButton.style.background = 'rgba(50, 50, 50, 0.8)';
    } else if (currentTheme === 'neon') {
        themeButton.style.background = 'rgba(0, 0, 0, 0.8)';
    }

    themeButton.className = '';
    themeButton.classList.add(currentTheme);
}

for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.setProperty('--i', i);
    container.appendChild(circle);
}

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    body.appendChild(star);
}

let currentTheme = 'default';
themeButton.addEventListener('click', () => {
    if (currentTheme === 'default') {
        currentTheme = 'dark';
    } else if (currentTheme === 'dark') {
        currentTheme = 'neon';
    } else {
        currentTheme = 'default';
    }
    body.className = currentTheme;
    updateButtonColor();
});

updateButtonColor();
