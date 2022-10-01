

import { footer } from "./components/footer.js";

let footerContainer = document.getElementById("big_footer");
footerContainer.innerHTML = footer();


document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.querySelector("#top_container_h-l").addEventListener("click", () => {
  window.location.href = "./home-living-product.html";
});

document
  .querySelector("#second_container_h-l")
  .addEventListener("click", () => {
    window.location.href = "./home-living-product.html";
  });

document.querySelector("#third_container_h-l").addEventListener("click", () => {
  window.location.href = "./home-living-product.html";
});

document
  .querySelector("#fourth_container_h-l")
  .addEventListener("click", () => {
    window.location.href = "./home-living-product.html";
  });



