import { loadPage } from "../model/model.js";

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    console.log(pageID);
    loadPage(pageID);
}


function initApp() {
    loadPage("home");
    window.addEventListener("hashchange", changeRoute);
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.querySelector(".topnav a.icon")
    .addEventListener("click", myFunction);

initApp();


