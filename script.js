// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});

// ======================================
// CLOSE MENU WHEN LINK IS CLICKED
// ======================================

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});

// ======================================
// STICKY HEADER
// ======================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const scrollBtn = document.createElement("div");

scrollBtn.className = "scroll-top";
scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ======================================
// FADE-UP ANIMATION
// ======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
`
.hero-text,
.hero-image,
.about-image,
.about-content,
.service-card,
.program-card,
.counter-card,
.gallery-item,
.testimonial-card,
.faq-item,
.contact-info,
.contact-form
`
).forEach(element=>{

    observer.observe(element);

});

// ======================================
// SMOOTH SCROLL FOR NAVIGATION
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================
// CURRENT YEAR IN FOOTER
// ======================================

const footerText = document.querySelector(".footer-bottom p");

if(footerText){

    footerText.innerHTML =
    `© ${new Date().getFullYear()} Bitstep Academy. All Rights Reserved.`;

}