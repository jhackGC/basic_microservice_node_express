# This Project: Vehicle Microservice API

## Course Overview

In this demo, I'm going to walk you through the vehicle microservice that we're going to be building during this course. This is a complete working example of our finished service, complete with GitHub repository and deployment pipeline. I think it's going to be useful to see the finished article so that we know what we're aiming for in the rest of this course.

## Deployment & Documentation

### Azure App Service Deployment

Our vehicle service is deployed to an Azure app service instance. That's essentially a Platform as a Service web host.

### Swagger API Documentation

This is provided by something called Swagger. If you're not familiar with Swagger, then don't worry, just know that it's a technology that allows us to describe our APIs in both a human and machine‑readable way. One of the benefits for us on this course is that it allows us to interact with our API directly from a web page.

We can see each individual endpoint. For each endpoint, we can see the request model. That's the payload of the request that the API is expecting, as well as the responses that you can expect to receive if you call the endpoint.

## API Endpoints

Now, this service includes **eight endpoints**:

### Health Check Endpoint

The first is a health check endpoint that we can use with monitoring tools to check if our service is up and running as expected.

### Vehicle Endpoints (7 total)

We also have seven vehicle endpoints.

#### Creating a Vehicle (POST)

We can create a new vehicle by calling the POST endpoint. If we open this, we can then call this endpoint directly. If I click the button **Try it out**, it populates the request body with some boilerplate content. We can change this, and when we're happy, just click **Execute**.

If we scroll down now, we can see the response that we received. The server returned a **201 status code**, which means content was created. We can also see the response body. This includes a copy of the data that's been created, as well as two additional properties:

- The `_id` property is the id of this record in the database
- The `_v` property relates to the version of this record in the database

#### Retrieving a Vehicle (GET)

If we copy this id value, we can now use this to try and retrieve the record using the GET endpoint. If I open the GET by id endpoint and then click **Try it out**, I can then paste in the id of the vehicle and click **Execute**. We then receive a **200 response**, along with our vehicle record in the response body.

#### Updating a Vehicle (PUT)

We can also update our record. If I open the PUT endpoint and click the **Try out** button, entering the id of our vehicle, I can then update the vehicle details.

So Swagger is a great tool for developers and what we will use in this course to help us test and explore our API.

## Source Code & Repository

### GitHub Actions CI/CD

If I select **Actions** at the top of this page, you can see I have a GitHub action configured that builds our code, wraps it into a Docker image, and pushes that image to Docker Hub.

You don't need to know anything about Docker, just know that our code is containerized on a Docker image that contains both our web server and our database server. And this is a common approach to deploying microservices.

## Project Structure

If we switch to Visual Studio Code now, we can see how this hangs together.

### Dockerfile

Firstly, our solution contains a **Dockerfile**. This file is used by Docker to create an image that contains a basic web server and our application code. We can use this locally to run our service, and it's also used by the Azure app service to host our application.

### Source Code Organization

The **src folder** contains our application. I'm not going to spend too long looking at this, but I want to point out a few important parts:

#### API Definition (index.js)

Firstly, the `index.js` file is where our API is actually defined. You can see these Swagger annotations that are used to generate our Swagger page. Underneath these annotations are our API roots. Notice that there is no implementation here.

#### Business Logic (Vehicle Service Class)

The actual logic is defined in the vehicle service class.
