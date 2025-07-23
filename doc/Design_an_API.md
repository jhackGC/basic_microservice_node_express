## Understanding the Business Problem

The first step to designing an API is understanding the problem that that API is there to solve.

This usually comes in the form of some sort of business requirement.

## Identifying Resources and Actions

We then need to identify the resources and actions that the API needs to handle in order to achieve this goal.

In our scenario, the resources are vehicles.

At this point, we have a good idea of the scope of the API and what our intentions are.

## Design principle

We then need to choose a design principle.
Now, there are lots of different ways that we can architect an API, and in our scenario, we're using a RESTful microservice built using Node.js, so this isn't something we're going to spend much time on, but we will highlight some of the alternative options.

## Define enpoints

Next, we need to actually define our endpoints. These are the endpoints exposed by the API that will get consumed by client applications.

## Consider Security

If authentication is required, and how that will be managed.

## Document the API

Next, we need to document the API. We're using Swagger for this, and this will help people who consume our API to understand exactly what it does and how it behaves.

## Implement and Test the API

Finally, our last step is to implement and test the API. This is typically an iterative process, so as new requirements come in from the business, we go back and start the entire process again.

# Undertand business problem

As a software developer, you may not have had to deal with the business requirements too deeply.

This is often performed by a business analyst.
But if you're designing an API for yourself, it's important that you clearly understand what problem it needs to solve.

This means you have to gather requirements.
These requirements can be functional requirements or nonfunctional requirements.
And typically, you're going to get those requirements from other stakeholders in the business.
A functional requirement is something that defines how the system actually behaves.
So in our vehicle scenario, we might have something like this:

- Clients should be able to add new vehicles. Including details like make, model, registration number, price, year of manufacture, and additional attributes.

We also have a nonfunctional requirement that our API should be scalable and handle growing numbers of vehicles and users. A nonfunctional requirement deals with other issues like performance, reliability, and compliance.

With the requirements gathered, we now need to identify the target audience, who's actually going to be using our API.

This can have an important bearing on how we actually implement it.

Some APIs are public, whereas ours is private and only going to be used by our mobile and web applications.

We also need to set clear goals for our API.

This helps to set the scope and make sure that we don't end up creating overly complex features that we just don't need.

# Identifying Resources and Actions

Resources are the domain objects that our service is going to be responsible for.
Our vehicle service is only dealing with vehicle resources, but it might also need to know about orders or users.

Even though those resources will be handled by their own services, it's important to identify these.
The actions are the actions that the service needs to be able to perform, create a vehicle, update a vehicle, and delete a vehicle, and so on.

## Design Principles

Now, I want to talk about design principles briefly. In this course, we're building a REST service. REST stands for representational state transfer, and it's an architectural style that uses HTTP requests to access and manipulate data.

But there are other approaches that we could use.
We could create a GraphQL service. GraphQL is a query language for APIs that allows clients to request exactly what they need and nothing more.
Now, unlike REST, which uses multiple endpoints, GraphQL only uses a single endpoint.

We could use SOAP, which stands for Simple Object Access Protocol.
SOAP has fallen out of favor a bit over the last few years, but it's likely that you'll come across SOAP services at some point.
It's XML‑based and offers inbuilt security.
Many enterprise applications still make extensive use of SOAP services.

## Endpoints and Request/Response Formats

We now need to think about the endpoints themselves.
How many endpoints do we need?
What will they be called?
It's important to set a clear naming convention.
Our service is only one of many microservices at a company, and it's helpful to other developers if we follow a clear naming convention.
We should also consider versioning our API.
This makes it easier for us to make changes later on without impacting existing clients.

This isn't something that we're going to be doing in this project though.

Along with our endpoints, we need to think about the request and response formats.

That's the data that we send to and receive back from our API.
Is this going to be JSON data or XML?
It might be different for different endpoints, depending on the requirements.

We also need to think about the structure of our request and response bodies.

This should come from the initial analysis that we did, what data actually goes to make up a vehicle object.

## Error Handling

Finally, we need to think about error handling. How should the system behave when something goes wrong? Does the endpoint need to return certain data or status codes to the client, perhaps to display the appropriate error in the mobile app?

## Security Considerations

Most APIs are going to need to consider some form of security.
That may be handling an **_authentication_** token from a logged in user or dealing with **_authorization_**, perhaps an endpoint that's only available to certain users with a certain role, such as an administrator.

Some data, such as payment data, may need to be **_encrypted_** so that it can't be intercepted or manipulated by bad actors.
And almost all APIs that deal with users or user data are going to need to comply with some form of **_data protection or compliance legislation_**.

Now, this will depend on the markets that your company operates in, but this is the point that you'll need to start making these considerations.

### Implementation Priority

For a basic microservice like the vehicle service in this project, focus on implementing the **Core Security Fundamentals** first. The additional considerations become increasingly important as your microservices architecture grows in complexity and scale.

### Core Security Fundamentals

- **Authentication** - Verifying who the user/service is
- **Authorization** - Determining what they're allowed to do
- **Data Encryption** - Protecting data in transit and at rest
- **Compliance and data protection** - Meeting regulatory requirements
- **Input and output validation, rate limiting** - Preventing injection attacks and data corruption, limiting abuse

### Service-to-Service Communication

- **Mutual TLS (mTLS)** - Securing communication between microservices
- **Service mesh security** - Using tools like Istio for secure service communication
- **API Gateway security** - Centralized security enforcement point

#### Authentication Methods for Service-to-Service Calls

When microservices need to communicate with each other, they must authenticate these calls to ensure security. Here are the main approaches:

**1. Mutual TLS (mTLS)**

- Both services authenticate each other using X.509 certificates
- Each service validates the other's certificate before establishing connection
- Provides both authentication and automatic encryption
- Most secure but requires certificate lifecycle management
- Example: Service A presents its certificate to Service B, and Service B validates it against a trusted Certificate Authority

**2. Service Tokens/API Keys**

- Each service is assigned a unique token or API key
- Tokens are included in HTTP headers: `Authorization: Bearer <service-token>`
- Tokens can be rotated regularly for enhanced security
- Simpler to implement than certificate-based authentication
- Example: Vehicle service calls User service with `Authorization: Bearer vh_service_abc123`

**3. OAuth 2.0 Client Credentials Flow**

- Services authenticate with a central authorization server to obtain access tokens
- Access tokens are used for subsequent inter-service calls
- Tokens have expiration times and can include specific scopes/permissions
- Well-suited for enterprise environments with centralized identity management
- Example: Service requests token from Auth Server, then uses token to call other services

**4. Service Mesh Authentication**

- Service mesh tools (Istio, Linkerd, Consul Connect) handle authentication automatically
- Implements zero-trust networking where every connection is verified
  **_- Transparent to application code - handled at infrastructure level_**
- Automatic certificate rotation and policy enforcement
- Example: Istio automatically injects sidecar proxies that handle mTLS

**5. JWT (JSON Web Tokens) for Service Identity**

- Self-contained tokens with claims about the calling service
- Can be cryptographically signed and optionally encrypted
- Include service identity, permissions, and metadata
- Can be validated locally without calling back to authentication service
- Example: JWT contains `{"service": "vehicle-api", "scope": "read:users", "exp": 1234567890}`

#### Implementation Considerations

- **Development Environment**: Start with API keys or simple tokens for ease of development
- **Production Environment**: Use mTLS or service mesh for maximum security
- **Hybrid Approach**: API Gateway with mTLS for external traffic, service tokens for internal traffic
- **Token Rotation**: Implement automatic token/certificate rotation to minimize security risk
- **Monitoring**: Log all service-to-service authentication attempts for security auditing

### Network Security

- **Network segmentation** - Isolating services in separate network zones
- **Zero Trust architecture** - Never trust, always verify principle
- **Container network policies** - Controlling traffic between containers

### Secrets Management

- **Secret rotation** - Regularly updating API keys, passwords, certificates
- **Centralized secret storage** - Using tools like Azure Key Vault, HashiCorp Vault
- **Avoiding hardcoded secrets** - Never store secrets in code

### Monitoring & Observability

- **Security logging and monitoring** - Tracking security events across services
- **Distributed tracing for security** - Following security context across service calls
- **Anomaly detection** - Identifying unusual patterns that might indicate attacks

### Container & Infrastructure Security

- **Container image scanning** - Checking for vulnerabilities in base images
- **Runtime security** - Monitoring container behavior during execution
- **Least privilege principles** - Running services with minimal required permissions

### Rate Limiting & DDoS Protection

- **API rate limiting** - Preventing abuse and overload
- **Circuit breakers** - Protecting against cascading failures
- **Load balancing security** - Distributing and filtering traffic

## Documenting the API

API documentation is critically important, especially when your API is part of a microservices architecture. There are many tools available to help with this.

We will use Swagger, but other tools, such as Redoc, are also very popular.

When writing documentation, it's important to make sure it's clear and concise, as well as regularly kept up‑to‑date as your API evolves.

Now, there are several reasons I think that documentation is critical to the success of your API.

Firstly, good documentation makes it much easier for people to make use of your API. In a microservices world. it's highly likely that the products that use your API and the teams that are building those projects have no knowledge of how your API is implemented.

Therefore, they rely on good solid documentation. This documentation reduces errors, as the team consuming your API are less likely to have issues in integrating it.

This in turn reduces support costs, as you will have to spend less time supporting those teams.

And finally, it helps when it comes to future development and onboarding new team members.

## Implementation

First, we need to create the infrastructure that's going to host our API.
In our case, we're using Docker, but there are many other ways that this could be done.

We're obviously going to have to write the code for our service.
That's the individual endpoints that we designed in the previous steps.

Also write tests for the code. At the very least, this would be unit tests, but in reality, this could also include some automated integration testing.

And finally, when this is all done and we're happy with the quality of our API, we can deploy it.
