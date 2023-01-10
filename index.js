/**
 * Challenge:
 *
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 *
 * Documentation: https://jsonplaceholder.typicode.com/
 *
 * Log the response data to the console
 */

const allPostsDiv = document.getElementById("all-posts");
const formEl = document.getElementById("post-form");

function fetchPosts() {
  fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((response) => response.json())
    .then((data) => renderPosts(data.slice(0, 5)));
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

  console.log(newPost);
});

fetchPosts();
