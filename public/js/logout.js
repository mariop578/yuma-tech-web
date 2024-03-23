const logout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Could not logout.");
  }
};

const logoutBtn = document.querySelector("#logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}
