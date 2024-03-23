const comment = async (e) => {
  e.preventDefault();
  const post_id = parseInt(window.location.pathname.split("/").pop());

  const content = document.querySelector("#content-new-comment").value.trim();

  if (content) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ comment: content, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create a comment.");
    }
  }
};

const commentForm = document.querySelector(".new-comment-form");
if (commentForm) {
  commentForm.addEventListener("submit", comment);
}
