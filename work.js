document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var toggleSignupLink = document.getElementById("toggleSignup");
  var toggleLoginLink = document.getElementById("toggleLogin");

  toggleSignupLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  toggleLoginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("emailSignup").value;
    const password = document.getElementById("passwordSignup").value;

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successfull! You can now log in.");
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;
    const storedUserData = localStorage.getItem("user");

    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      if (username === user.email && loginPassword === user.password) {
        alert("Login successfull!");
      } else {
        alert("Invalid username or password.");
      }
    } else {
      alert("No user found. Please sign up first.");
    }
  });
});
