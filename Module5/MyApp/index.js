const app = require("./app");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = 3000;

// Integrating Swagger UI
app.use(
  "/api-docs", // Swagger UI will be accessible at http://localhost:3000/api-docs
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(`Server can now be called at ${port}`);
  console.log(
    `API documentation available at http://localhost:${port}/api-docs`
  );
});
