

import { footer } from "../components/footer.js";

let footerContainer = document.getElementById("big_footer");
footerContainer.innerHTML = footer();


document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "../index.html";
})

document.querySelector("#banner").addEventListener("click", () => {
    window.location.href = "menProduct.html";
})

document.querySelector("#omg").addEventListener("click", () => {
    window.location.href = "menProduct.html";
})

document.querySelector("#badget").addEventListener("click", () => {
    window.location.href = "menProduct.html";
})

document.querySelector("#top_categories").addEventListener("click", () => {
    window.location.href = "menProduct.html";
})

document.querySelector("#top_brand").addEventListener("click", () => {
    window.location.href = "menProduct.html";
})

document.querySelector("#shop_categories").addEventListener("click", () => {
    window.location.href = "menProduct.html";
})








