# Express.js

We're going to be building our vehicle service API.

To help us with this, we're going to be using a framework called Express.js, which offers us a robust set of features for building APIs.

We're also going to explore how we package and deploy our API using Docker.

So let's get started. Express.js, often referred to simply as Express, is a lightweight and flexible web application framework for Node.js.

Express offers a range of features for developing web applications, and it greatly simplifies API development.

This means that you can focus on your API's business logic without having to worry about all the complicated server code.

To get started with Express, we have two main options.

Firstly, we can add Express to an existing Node application, and we do this by installing the Express package using Node Package Manager.

We then have to configure our application to use Express, and we'll look at this shortly in our demo.

Now, while we're not using it in this course, you can also use something called the Express Generator. The Express Generator creates an entirely new skeleton application for which you can then modify to suit your needs.

We're using Express to build a microservice, but the Express Generator can create you an application that serves static content, like web pages. As such, it typically configures an application with a view engine that renders this content.

## Features of Express

Express is ideal for building APIs due to two key features:

### Routing

Express provides sophisticated routing to handle different HTTP methods (GET, POST, PUT, DELETE) and URL paths. Routes are defined as:

```javascript
app.method(path, handler);
```

Example:

```javascript
app.get("/", (req, res) => res.send("Hello Node!"));
app.post("/vehicles", (req, res) => {
  /* handler logic */
});
```

### Middleware

Middleware functions execute sequentially during the request-response cycle. They can:

- Execute code
- Modify request/response objects
- End the request-response cycle
- Call the next middleware function

Example custom middleware:

```javascript
function myLoggerMiddleware(req, res, next) {
  console.log(`${req.url} - ${new Date()}`);
  next(); // Pass control to next middleware
}
app.use(myLoggerMiddleware);
```

Express provides built-in middleware and supports community middleware modules for common tasks like parsing request bodies, compression, and cookie handling.

# Documentation

## Swagger Documentation

Swagger is a powerful tool for documenting APIs. It allows you to define your API endpoints, request/response formats, and other details in a structured way.
In our Express application, we can integrate Swagger to automatically generate API documentation based on our routes and models.

## Configuring Swagger

To configure Swagger in our Express application, we need to set up a Swagger specification file and integrate it with our Express app.

```javascript
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
```

You can access the API documentation at `/api-docs`.
