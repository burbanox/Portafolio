const NAV_BUTTON = document.getElementById("nav-button")
const NAV = document.getElementById("nav")
const MENU = document.getElementById("header-menu-img")


MENU.addEventListener("click", ()=>
{
    NAV.classList.remove("eliminate")
    NAV.classList.add("deploy")
})
NAV_BUTTON.addEventListener("click", () =>
{
    NAV.classList.remove("deploy")
    NAV.classList.add("eliminate")
})