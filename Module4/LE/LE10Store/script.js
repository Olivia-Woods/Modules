const API_URL = "https://fakestoreapi.com/products";

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");

// Fetch Products from the API
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    renderProducts(products);
    populateCategories(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    productContainer.innerHTML = `<p class="text-danger">Failed to load products. Please try again later.</p>`;
  }
}

// Render products as Bootstrap cards with UNIFORM SIZES
function renderProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${
      product.title
    }">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text flex-grow-1">${product.description.substring(
              0,
              100
            )}...</p>
            <p class="text-success">$${product.price}</p>
            <a href="#" class="btn btn-primary mt-auto">Buy Now</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Populate the Category Dropdown
function populateCategories(products) {
  const categories = [...new Set(products.map((product) => product.category))];
  categories.forEach((category) => {
    categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
  });
}

// Filter Products by Category
categoryFilter.addEventListener("change", async () => {
  const selectedCategory = categoryFilter.value;
  const response = await fetch(API_URL);
  const products = await response.json();

  if (selectedCategory === "all") {
    renderProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
    renderProducts(filteredProducts);
  }
});

// Initialize the App
fetchProducts();
