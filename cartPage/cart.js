

let cartArr = JSON.parse(localStorage.getItem("selectProduct")) || [];
let total = 0;
let Qty = 0;

//BrushesArr Access
cartArr.forEach(function (elem, index) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h2");
    let del = document.createElement("button");
    image.setAttribute("src", elem.img);
    name.innerText = elem.title;
    price.innerText = elem.price;
    del.innerText = "Delete";
    del.addEventListener("click", function () {
        deleteContent(elem, index);
    });
    total = total + Number(elem.price);
    Qty++;
    box.append(image, name, price, del);
    document.querySelector("#container").append(box);
});
// console.log(total);
// console.log(Qty);

function deleteContent(elem, index) {
    total = total - Number(elem.price);
    Qty--;
    cartArr.splice(index, 1);
    localStorage.setItem("selectProduct", JSON.stringify(cartArr));

}

document.querySelector("#totalAmount").innerText = total;
document.querySelector("#totalQuantity").innerText = Qty;


document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "../index.html";
})

document.getElementById("shopping_continue").addEventListener("click", function () {
    window.location.href = "address.html";
});





