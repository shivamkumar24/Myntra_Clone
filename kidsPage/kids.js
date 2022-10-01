
import { footer } from "../components/footer.js";

let footerContainer = document.getElementById("big_footer");
footerContainer.innerHTML = footer();



let images = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/0e977afc-87e2-4798-a0d6-bfb05ba796911649782019489-Super-Bottoms_Desk_Banner.jpg",
];

let slider = document.getElementById("slider");

function sliderData() {
    slider.innerHTML = null;
    let img = document.createElement("img");
    let counter = 0;
    img.src = images[counter];
    slider.append(img);
    counter++;
    let id = setInterval(function () {
        if (counter === images.length) {
            counter = 0;
        }
        img.src = images[counter];
        slider.append(img);
        counter++;
    }, 2000);
}

sliderData();

document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "../index.html";
})

document.querySelector("#slider").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#favorite").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#picks").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#iconic").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#fashion").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#explore").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#space").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#budget").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})

document.querySelector("#shop_more").addEventListener("click", () => {
    window.location.href = "kidsProduct.html";
})








