//TEMPORARY Alert until ThriveTalk is deployed

const thriveTalk = document.getElementById('thrive-talk');

thriveTalk.addEventListener('click', () => {
    alert("This site is currently being worked on and hasn't been deployed yet. Check back soon!")
});

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
const navMenu = document.querySelector('.nav-container ul');
const navLink = document.querySelectorAll('.nav-link');

openNavToggle.addEventListener('click', openNavbar);
closeNavToggle.addEventListener('click', closeNavbar);
window.addEventListener('resize', resizeWindow);

resizeWindow();

function openNavbar() {
    navMenu.classList.add('open');
    navMenu.classList.remove('close');
    mobileHidden.forEach(element => {
        element.classList.remove('mobile-hidden');
    });
    closeNavToggle.style.display = 'flex';
    openNavToggle.style.display = 'none';
}

function closeNavbar() {
    navMenu.classList.remove('open');
    navMenu.classList.add('close');
    mobileHidden.forEach(element => {
        element.classList.add('mobile-hidden');
    });
    if (window.innerWidth <= 900) {
        openNavToggle.style.display = 'flex';
        closeNavToggle.style.display = 'none';
    } else {
        openNavToggle.style.display = 'none';
        closeNavToggle.style.display = 'none';
    }
}

//Close nav bar when a link is clicked

navLink.forEach(link => {
    link.addEventListener('click', closeNavbar);
});

//Change nav text color when the user scrolls down

const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }
});

//Handle icon visibility when the user resizes the window

function resizeWindow() {
    if (window.innerWidth > 900) {
        mobileHidden.forEach(element => {
            element.classList.remove('mobile-hidden');
        });
        openNavToggle.style.display = 'none';
        closeNavToggle.style.display = 'none';
        navMenu.classList.remove('open');
    } else {
        mobileHidden.forEach(element => {
            element.classList.add('mobile-hidden');
        });
        openNavToggle.style.display = 'flex';
        closeNavToggle.style.display = 'none';
    }
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