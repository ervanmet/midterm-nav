import home from "../pages/home.js";
import about from "../pages/about.js";
import services from "../pages/services.js";
import contact from "../pages/contact.js";

export function loadPage(pageID) {
    console.log(`module.js ${pageID}`);
    const main = document.querySelector("main");

    switch (pageID) {
        case "home":
            main.innerHTML = home;
            break;
        case "about":
            main.innerHTML = about;
            break;
        case "services":
            main.innerHTML = services;
            break;
        case "contact":
            main.innerHTML = contact;
            break;
    }
}