const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vehicle API",
      version: "1.0.0",
      description: "A simple Express API for managing vehicles",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
      {
        url: "https://vehicleservice.azurewebsites.net",
        description: "Production server",
      },
    ],
  },
  // The paths in the apis array are relative to the root folder where you run your Node.js process
  // (usually your project root).
  // If you run your app from the root, index.js will correctly point to the file inside the src folder.
  // Always make sure the paths match your project structure and your working directory when starting
  // the server.
  apis: ["./src/index.js", "./models/vehicleModel.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
