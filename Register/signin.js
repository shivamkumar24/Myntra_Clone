let signupvalue = JSON.parse(localStorage.getItem("signupList")) || [];
let form = document.querySelector("form").addEventListener("submit", Signin);
function Signin(event) {
  event.preventDefault();
  let SigninObj = {
    email: document.querySelector("#email").value,
    pass: document.querySelector("#password").value,
  };

  if (SigninObj.email == "" || SigninObj.pass == "") {
    alert("Please fill all details......");
  }
  else {
    let flag;
    for (let i = 0; i < signupvalue.length; i++) {
      if (signupvalue[i].Email === SigninObj.email && signupvalue[i].Password === SigninObj.pass) {
        flag = true;
        localStorage.setItem("emailData", JSON.stringify(SigninObj.email));
        break;
      } else {
        flag = false;
      }
    }

    if (flag === true) {
      alert("SuccessFully SignIn.....");
      // window.location.href="index.html";
      window.location.href = "../index.html";
    } else {
      alert("Wrong details...");
    }
  }
}
// console.log(signupvalue);


document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../index.html"
});
