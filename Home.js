

import { footer } from "./components/footer.js";

let footerContainer = document.getElementById("big_footer");
footerContainer.innerHTML = footer();


import { navbarData } from "./components/navbar.js";

let navbarContainer = document.getElementById("navbar");
navbarContainer.innerHTML = navbarData();


document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "./index.html";
});







