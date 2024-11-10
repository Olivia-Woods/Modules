// Get Request
// The GET request is used to retrieve data from a server without modifying any resources.

const API_URL = "https://jsonplaceholder.typicode.com";

fetch(`${API_URL}/posts?_limit=8`) // Initiate Query
  .then((resp) => resp.json())
  .then((resultJSON) => console.log(resultJSON));
