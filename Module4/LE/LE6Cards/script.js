// DOM Elements
const postForm = document.getElementById("postForm");
const cardsContainer = document.getElementById("cardsContainer");

// Fetch and display posts using Fetch API
async function fetchPosts(limit = 10) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  const posts = await response.json();
  displayPosts(posts);
}

// Fetch and display posts using Axios
async function fetchPostsAxios(limit = 10) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    displayPosts(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Display posts in cards
function displayPosts(posts) {
  cardsContainer.innerHTML = ""; // Clear existing cards
  posts.forEach((post) => {
    const cardHTML = `
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            </div>
        `;
    cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Event Listener for Form Submission
postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const limit = document.getElementById("postLimit").value || 10;
  fetchPosts(limit);
});

// Load default posts on page load
fetchPosts(10);
