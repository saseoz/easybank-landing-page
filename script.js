const nav = document.querySelector("nav");
const navBtn = document.querySelector(".nav-btn-mobile");

navBtn.addEventListener("click", () => {
    const navbtncheck = navBtn.getAttribute("data-active");
    if(navbtncheck === "false") {
        navBtn.setAttribute("data-active", true);
        nav.setAttribute("data-visible", true);
    } else {
        navBtn.setAttribute("data-active", false);
        nav.setAttribute("data-visible", false);
    }
})