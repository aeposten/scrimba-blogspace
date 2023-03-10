const allPostsDiv = document.getElementById("all-posts");
const formEl = document.getElementById("post-form");
const postURL = "https://apis.scrimba.com/jsonplaceholder/posts";

let postsArray = [];

function fetchPosts() {
  fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((response) => response.json())
    .then((data) => {
      postsArray = data.slice(0, 5);
      renderPosts(postsArray);
    });
}

function renderPosts(postArray) {
  allPostsDiv.innerHTML = postArray
    .map(
      (post) => `
    <article class="post">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-body">${post.body}</p>
    </article>
`
    )
    .join("");
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("title").value;
  const postBody = document.getElementById("body").value;

  const newPost = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(postURL, options)
    .then((response) => response.json())
    .then((data) => {
      postsArray.unshift(data);
      renderPosts(postsArray);
      formEl.reset();
    });
});

fetchPosts();
