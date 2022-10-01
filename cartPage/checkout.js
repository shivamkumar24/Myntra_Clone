
let number = document.getElementById("cardNumber");
let name = document.getElementById("holderName");
let expire = document.getElementById("monthYear");
let cvv = document.getElementById("cardCvv");

document.getElementById("pay").addEventListener("click", () => {
    if (number.value == "" || name.value == "" || expire.value == "" || cvv.value == "") {
        alert("Please fill all details......");
    } else {
        window.location.href = "otp.html";
    }
});


document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "../index.html";
})


