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

function fetchPosts() {
  fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((response) => response.json())
    .then((data) => renderPosts(data.slice(0, 5)));
}

function renderPosts(postArray) {
  const postHTML = postArray
    .map(
      (post) => `
    <article class="post">
        <h2 class="post-title">${post.title}</h2>
        <div class="post-body">${post.body}</div>
    </article>
`
    )
    .join("");

  allPostsDiv.innerHTML = postHTML;
}

fetchPosts();
