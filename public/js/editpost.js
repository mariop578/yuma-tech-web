const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const editPost = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#title-update-post").value.trim();
  const text = document.querySelector("#text-update-post").value.trim();

  if (title && text) {
    const response = await fetch(`/api/post/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Could not update post");
    }
  }
};

const updateBtn = document.querySelector("#update-Btn");

if (updateBtn) {
  updateBtn.addEventListener("click", editPost);
}
