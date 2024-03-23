const newPost = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#title-new-post").value.trim();
  const text = document.querySelector("#text-new-post").value.trim();

  if (title && text) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Could not create post");
    }
  }
};

const newPostForm = document.querySelector(".new-post-form");
if (newPostForm) {
  newPostForm.addEventListener("submit", newPost);
}
