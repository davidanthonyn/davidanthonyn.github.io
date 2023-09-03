/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*=============== MENU SHOW ===============*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    /* When user click each nav__link, remove the show-menu class */
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_3mh4myu', 'template_awiid9t', '#contact-form', 'feozX_5FFYbUGU_al')
    .then(() => {
        //Show success message
        contactMessage.textContent = 'Message sent successfully! ✅'

        //Remove message after seven seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 7000)

        //Clear input field after message sent
        //contactForm.reset() //Delete first to prevent if user was typo

    }, () => {
        //Show error message
        contactMessage.textContent = 'Message failed to send! 😞'

        //Remove message after seven seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 7000)
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
} 

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id"),
        sectionsClass = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );
  
      if (sectionsClass) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass.classList.add("active-link");
        } else {
          sectionsClass.classList.remove("active-link");
        }
      }
    });
  };

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //Animations repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data`, `.skills__data`, {origin: 'left'})
sr.reveal(`.about__image`, `.skills__content`, {origin: 'right'})
sr.reveal(`.services__card`, `.projects__card`, {interval: 100})

/*=============== LIGHT / DARK MODE ===============*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'light-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

};

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());

});