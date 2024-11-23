let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

let newNews = []; // To Track Newly Added News
let intervalId;

// Function to Display News
function renderNews() {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = ""; // Clear Existing News

  // Render Original News
  news.forEach((item) => {
    const newsElement = document.createElement("div");
    newsElement.className = "news-item";
    newsElement.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.content}</p>
      `;
    newsContainer.appendChild(newsElement);
  });

  // Render Newly Added News
  newNews.forEach((item) => {
    const newsElement = document.createElement("div");
    newsElement.className = "news-item new-news";
    newsElement.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.content}</p>
      `;
    newsContainer.appendChild(newsElement);
  });
}

// Start Auto-Refreshing News
function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(renderNews, 5000);
  }
}

// Stop Auto-Refreshing News
function stopUpdates() {
  clearInterval(intervalId);
  intervalId = null; // Ensure Interval is Reset
}

// Add NEW News to the Array
document.getElementById("news-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent Form Submission
  const title = document.getElementById("news-title").value;
  const content = document.getElementById("news-content").value;

  // Add to New News
  newNews.push({ id: news.length + newNews.length + 1, title, content });

  // Re-render News Immediately
  renderNews();

  // Clear Form Inputs
  document.getElementById("news-form").reset();
});

// Event Listener for the Stop Updates Button
document.getElementById("stop-updates").addEventListener("click", stopUpdates);

// Initial Setup
renderNews(); // Display Initial News
startInterval(); // Start Auto-Refresh
