"use strict";

// Navigation Buttons
const navBar = document.querySelector(".navbar");
const btnHome = document.querySelector(".btn_logo");
const btnPortfolio = document.querySelector(".btn_portfolio");
const btnAbout = document.querySelector(".btn_about");
const btnContact = document.querySelector(".btn_contact");

// Social Buttons
const btnInstagram = document.querySelectorAll(".instagram_icon");
const btnTwitter = document.querySelectorAll(".twitter_icon");
const btnLinkedin = document.querySelectorAll(".linkedin_icon");

// Proyects Buttons
const btnLive = document.querySelector(".btn__live");
const btnCode = document.querySelector(".btn__code");

// Sections
const sectionHome = document.querySelector(".nav_bar");
const sectionHero = document.querySelector(".hero");
const sectionPortfolio = document.querySelector(".portfolio");
const sectionContact = document.querySelector(".contact_section");

// Social links
const ig = "https://www.instagram.com/ness733/";
const tw = "https://twitter.com/Ness_ar733";
const li = "https://www.linkedin.com/in/nestor-rosales-7848b6266/";

// Submit form
const formSubmit = document.querySelector(".form_information");
const formSent = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close_modal");

// Inject About me
const aboutMe = document.querySelector(".about_me");
const closeAbout = document.querySelector(".close_about");

// Inject Proyects
const projectsBlock = document.querySelector(".portfolio_block");

// Editing
const aboutText = `Hi! My name is Nestor. Currently I'm going through courses and documentation for Front-End web development, but the goal is to reach Full-Stack status.
I'm enjoying the process of creating sites using the tools I've learned and molding my ideas until they fit exactly what I wanted to achieve.
I'm looking forward with excitement to work with others and tackle more challenging projects while pushing myself out of the comfort zone to help make someone's vision the best version of it can be.
<br><br>Currently learning: HTML, CSS, JS, REACT, PYTHON, DJANGO
`;

// Sticky navigation bar

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navBar.classList.add("sticky");
  else navBar.classList.remove("sticky");
};

const navbarObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.01,
  rootMargin: "-90px",
});

navbarObserver.observe(sectionHero);

// Button home
btnHome.addEventListener("click", function (e) {
  e.preventDefault();
  sectionHero.scrollIntoView({ behavior: "smooth" });
});

// Scroll portfolio section into view
btnPortfolio.addEventListener("click", function (e) {
  e.preventDefault();
  sectionPortfolio.scrollIntoView({ behavior: "smooth" });
});

// Make About me appear
btnAbout.addEventListener("click", function (e) {
  e.preventDefault();
  let html = `
    <p>${aboutText}</p>
  `;
  aboutMe.insertAdjacentHTML("beforeend", html);
  aboutMe.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Close about me
closeAbout.addEventListener("click", function (e) {
  e.preventDefault();
  aboutMe.classList.add("slideOut");

  setTimeout(() => {
    aboutMe.classList.add("hidden");
    overlay.classList.add("hidden");
    aboutMe.querySelector("p").remove();
    aboutMe.classList.remove("slideOut");
  }, 300);
});

// Scroll contact section into view
btnContact.addEventListener("click", function (e) {
  e.preventDefault();
  sectionContact.scrollIntoView({ behavior: "smooth" });
});

// Social buttons
const link = function (url) {
  const newTab = window.open(url, "_blank");
  newTab.focus();
};

btnInstagram.forEach((x) => {
  x.addEventListener("click", () => link(ig));
});

btnTwitter.forEach((x) => {
  x.addEventListener("click", () => link(tw));
});

btnLinkedin.forEach((x) => {
  x.addEventListener("click", () => link(li));
});

// Form functionality
closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  formSent.classList.add("hidden");
  overlay.classList.add("hidden");
  formSent.querySelector("p").remove();
});

const modalWindow = function (msg = "") {
  let html = `
    <p>
      ${msg}
    </p>
  
    `;
  formSent.insertAdjacentHTML("afterbegin", html);
  formSent.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const addProject = (
  projectName,
  projectImg,
  projectText,
  projectLive,
  projectCode
) => {
  let html = `
  <div class="portfolio__element">
          <h2>${projectName}</h2>
  
          <div class="project_img">
          <img src=${projectImg} alt="project image" />
          </div>
          
          <p>
            ${projectText}
          </p>
          <div class="btns">
            <ul >
            <li class="btn__live">
            <a  href=${projectLive}>LIVE</a>
            </li>
              <li class="btn__code">
              <a class="btn__code" href=${projectCode}>CODE</a></li>
            </ul>
          </div>
        </div>
  `;
  projectsBlock.insertAdjacentHTML("afterbegin", html);
};

formSubmit.addEventListener("submit", function (e) {
  const _initEmail = "WTOlGcumvWIKf2lfe";
  const fullName = formSubmit.fullname.value;
  const contactEmail = formSubmit.email.value;
  const subject = formSubmit.subject.value;

  try {
    e.preventDefault();
    if (fullName == "") {
      modalWindow(`Can't submit message without a name 😅`);
    } else if (contactEmail == "") {
      modalWindow(`Can't submit message without contact email 📨`);
    } else if (subject == "") {
      modalWindow(`Can't submit an empty message 🔴`);
    } else if (!fullName == "" && !contactEmail == "" && !subject == "") {
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs
        .sendForm("service_xvs3mtg", "contact_form", this, _initEmail)
        .then(
          function () {
            formSubmit.fullname.value = "";
            formSubmit.subject.value = "";
            formSubmit.email.value = "";
            modalWindow(
              `
            Your message has been sent succesfully! 🎉<br>I'll get back to you as soon as possible 🫡
            `
            );
            formSent.classList.remove("hidden");
            overlay.classList.remove("hidden");
            // console.log("Success!");
          },
          function (error) {
            formSent.console.log("Failed...", error);
          }
        );
    }
  } catch (error) {
    modalWindow(`
    🔴 Something went wrong 🔴 <br>
    Please try again later.
    `);
  }
});

addProject(
  "AnotherMovieDB",
  "./imgs/movieDB.png",
  "Small test project to practice fetching data from a movies DB. Unfortunately the Login functionality doesn't work with the API for being in an unsecure domain. Modals, Error Catch, Search and Add To Favorites functionalities. <br/><br/><br/> Made with ReactJS and Bootstrap",
  "https://ness733.github.io/moviedb-react-alkemy/"
);
