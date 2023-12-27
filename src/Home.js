// let navItem=document.querySelector(".nav-item")
// let navIcon = document.querySelector(".nav-icon")

// navItem.addEventListener("click", function() {
// navIcon.classList.add("collapse")
// })

function navScroll() {

    let navbar = document.getElementById("navbar");
    let scrollPosition = window?.scrollY;

    if (scrollPosition > 50) {
        navbar?.classList.add("bg-blur")
    }
    else {
        navbar?.classList.remove("bg-blur")
    }
}

window.addEventListener('scroll', navScroll);

