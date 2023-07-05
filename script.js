"use strict";
// Navigation Buttons
const navBar = document.querySelector(".navbar");
const btnHome = document.querySelector(".btn_logo");
const btnPortfolio = document.querySelector(".btn_portfolio");
const btnContact = document.querySelector(".btn_contact");

// Social Buttons
const btnInstagram = document.querySelector(".instagram_icon");
const btnTwitter = document.querySelector(".twitter_icon");
const btnLinkedin = document.querySelector(".linkedin_icon");

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

btnInstagram.addEventListener("click", () => link(ig));
btnTwitter.addEventListener("click", () => link(tw));
btnLinkedin.addEventListener("click", () => link(li));
