// const post_id = window.location.toString().split("/")[
//   window.location.toString().split("/").length - 1
// ];

const deletePost = async (e) => {
  e.preventDefault();
  if (e.target.matches(".delete-post")) {
    const post_id = e.target.getAttribute("data-post-id");
    const response = await fetch(`/api/post/${post_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Could not delete post");
    }
  }
};
const deleteBtn = document.querySelector(".delete-post");

if (deleteBtn) {
  deleteBtn.addEventListener("click", deletePost);
}
