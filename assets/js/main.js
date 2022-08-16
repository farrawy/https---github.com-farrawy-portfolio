/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/

/*=============== Projects ==================*/

const projects = document.getElementById("projects");
const data = [
  {
    id: "1",
    image: "../assets/img/krypt-web3.0.png",
    name: "Krypt - Web3.0 Smart Contract",
    class: "web3",
    link: "https://web3-krypt-blockchain.netlify.app/",
    source: "https://google.com",
    a: "View Project",
  },
  {
    id: "2",
    image: "../assets/img/todolist-cover.png",
    name: "Animated To Do List Website",
    class: "web",
    link: "./projects/todolist/todo_index.html",
    source: "https://google.com",
    a: "View Project",
  },
  {
    id: "3",
    image: "../assets/img/shopping-website.png",
    name: "Shopping Website",
    class: "web",
    link: "../projects/Shopping Cart/index.html",
    source: "https://google.com",
    a: "View Project",
  },
  {
    id: "4",
    image: "../assets/img/speedtyping.png",
    name: "Speed Typing Game",
    class: "web",
    link: "../projects/speedtyping/index.html",
    source: "https://google.com",
    a: "View Project",
  },
  {
    id: "5",
    image: "../assets/img/food-masters.png",
    name: "Food Recipes App - Android",
    class: "mobile",
    link: "../projects/Food Masters/food-masters-index.html",
    source: "https://google.com",
    a: "View Project",
  },
  {
    id: "6",
    image: "../assets/img/react-todo.png",
    name: "To Do React Native App",
    class: "mobile",
    source: "https://github.com/farrawy/React-Native-To-Do-List.git",
    a: "View Project Source",
  },
  {
    id: "7",
    image: "../assets/img/nft-marketplace.png",
    name: "React Native NFT Marketplace",
    class: "mobile web3",
    source: "https://github.com/farrawy/Tesla-Clone-App",
    a: "View Project Source",
  },
  {
    id: "8",
    image: "../assets/img/tesla-clone.png",
    name: "React Native Tesla Clone App",
    class: "mobile",
    source: "https://github.com/farrawy/RN-NFT-Marketplace",
    a: "View Project Source",
  },
];
data.forEach(projectFunction);
function projectFunction(item, index) {
  var project = `<div class="work__card mix ${item.class}">`;
  project += `<img src="${item.image}" class="work__img"/>`;
  project += `<h3 class="work__title">${item.name}</h3>`;
  {
    item.link
      ? (project += `<a href="${item.link}" class="work__button">
                ${item.a} <i class="bx bx-right-arrow-alt work__icon"></i></a>`)
      : (project += `<a href="${item.source}"><i class='bx bxl-github work__icon work__source'></i></a>`);
  }
  {
    item.link
      ? (project += `<a href="${item.source}"><i class='bx bxl-github work__icon work__source'></i></a>`)
      : null;
  }
  project += `</div>`;
  projects.innerHTML += project;
}
/* ================================== */

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: 400,
  reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, orgin: "bottom" });

/*================= Read More ==================*/

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var readMore = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore.innerHTML = "Read More <i class='bx bx-right-arrow-alt' ></i>";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
