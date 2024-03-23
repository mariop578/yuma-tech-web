const login = async (e) => {
  e.preventDefault();
  const username = document.querySelector("#inputUserName3").value.trim();
  const password = document.querySelector("#inputPassword3").value.trim();
  // console.log(`Username: ${userName} Pass: ${password}`);

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      console.log("Logged in successfully!");
    } else {
      alert("Incorrect Username & Or Password.");
      console.log("Could not login.");
    }
  }
};

const loginForm = document.querySelector(".login-form");
if (loginForm) {
  loginForm.addEventListener("submit", login);
}
