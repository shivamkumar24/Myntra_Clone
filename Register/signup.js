let signupArr = JSON.parse(localStorage.getItem("signupList")) || [];
let form = document.querySelector("form").addEventListener("submit", Signup);

function Signup(event) {
  event.preventDefault();
  let signupEmail = document.querySelector("#email").value;
  let signupPhone = document.querySelector("#phone").value;
  let signupPassword = document.querySelector("#password").value;
  let signupObj = {
    Email: signupEmail,
    Phone: signupPhone,
    Password: signupPassword,
  };

  if (signupObj.Email == "" || signupObj.Phone == "" || signupObj.Password == "") {
    alert("Please fill all information......");
  } else {
    let flag;
    if ((signupArr.length === 0)) {
      flag = true;
    } else {
      for (let i = 0; i < signupArr.length; i++) {
        if (signupArr[i].Email !== signupEmail) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
    }

    if (flag === true) {
      signupArr.push(signupObj);
      localStorage.setItem("signupList", JSON.stringify(signupArr));
      alert("SignUp SuccessFully Now you can Signin......");
      window.location.href = "signin.html";
    } else {
      alert("Email Already Exists......");
    }
  }
}
// console.log(signupArr.length);

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../index.html";
})



