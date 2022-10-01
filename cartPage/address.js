
let value = JSON.parse(localStorage.getItem("emailData"));

document.getElementById("Reg_email").innerText = "Hello, " + value;

function userAddress(n, p, e, a, p, c, s, c) {
    this.name = n;
    this.phone = p;
    this.email = e;
    this.address = a;
    this.pin = p;
    this.city = c;
    this.state = s;
    this.country = c;
}


let orderAddress = JSON.parse(localStorage.getItem("Address")) || [];
let arr = [];
function orderData(event) {
    event.preventDefault();
    let form = document.getElementById("user_datails");
    let name = form.name.value;
    let phone = form.phone.value;
    let email = form.email.value;
    let address = form.address.value;
    let pin = form.pincode.value;
    let city = form.city.value;
    let state = form.state.value;
    let country = form.country.value;

    let user_address = new userAddress(name, phone, email, address, pin, city, state, country);

    if (user_address.name == "" || user_address.phone == "" || user_address.email == "" || user_address.address == "" || user_address.pin == "" || user_address.city == "" || user_address.state == "" || user_address.country == "") {
        alert("Please fill all Address details.....");
    } else {
        arr.push(user_address);
        console.log(arr);
        localStorage.setItem("Address", JSON.stringify(arr));

        alert("Confirm Address ....");
        window.location.href = "checkout.html";
    }
}


document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "../index.html";
})