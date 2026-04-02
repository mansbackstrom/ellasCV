import './style.css';

window?.addEventListener("scroll", (e: Event) => {
    const nav = document.querySelector("nav");
    const cursort = document.querySelector("cursor-pointer");

    if (nav) {
        if (window.scrollY > 2) {
            nav.style.backgroundColor = "white";
            nav.style.color = "black";
            nav.style.borderBottom = "solid";
            nav.style.borderColor = "lightgray";
            nav.style.borderWidth = "0.1rem";
        } else {
            // ORIGINAL LOOK (At the very top)
            nav.style.backgroundColor = "transparent";
            nav.style.color = "white";
            nav.style.boxShadow = "none";
            nav.style.border = "none";
        }
    }
});

const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

menuBtn?.addEventListener("click", () => {
    // This flips the 'hidden' class on and off
    mobileMenu?.classList.toggle("hidden");
    mobileMenu?.classList.toggle("flex");
});

// Close menu if user clicks a link (Optional but recommended)
mobileMenu?.querySelectorAll("h2").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
    });
});