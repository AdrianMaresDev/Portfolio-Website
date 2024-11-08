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

//Navigation Toggle

const openNavToggle = document.getElementById('open-nav-toggle');
const closeNavToggle = document.getElementById('close-nav-toggle');
const mobileHidden = document.querySelectorAll('.mobile-hidden');

openNavToggle.addEventListener('click', openNavbar);
closeNavToggle.addEventListener('click', closeNavbar);

function openNavbar() {
    mobileHidden.forEach(element => {
        element.classList.remove('mobile-hidden');
        closeNavToggle.style.display = 'flex';
        openNavToggle.style.display = 'none';
    });
}

function closeNavbar() {
    mobileHidden.forEach(element => {
        element.classList.add('mobile-hidden');
    });
    openNavToggle.style.display = 'flex';
    closeNavToggle.style.display = 'none';
}

//Skill Icon Scroller

const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicated = item.cloneNode(true);
            duplicated.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicated);
        });
    });
}