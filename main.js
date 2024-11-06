//Light and Dark mode toggle
const lightModeBtn = document.getElementById('light-mode-toggle');
const darkToggle = document.getElementById('dark-toggle');
const lightToggle = document.getElementById('light-toggle');
const body = document.body;

lightModeBtn.addEventListener('click', lightModeToggle);

function lightModeToggle() {
    body.classList.toggle('light-mode');

    //Toggle correct icon
    if (body.classList.contains('light-mode')) {
        darkToggle.classList.remove('hidden');
        lightToggle.classList.add('hidden');
    } else {
        darkToggle.classList.add('hidden');
        lightToggle.classList.remove('hidden');
    }
}