// Post Request Example
// This script demonstrates a POST request to an API endpoint
// The POST method is used to send data to a server, typically to create a new resource or record.
// Unlike GET requests, which retrieve data, POST requests allow us to send information that the server can use to update or add to its database.

const API_URL = "https://jsonplaceholder.typicode.com";

fetch(`${API_URL}/posts`, {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "This is a new title",
    body: "This is a new body",
  }),
})
  .then((resp) => resp.json())
  .then((resultJSON) => console.log(resultJSON));