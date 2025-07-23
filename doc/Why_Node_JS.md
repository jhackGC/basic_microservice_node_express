# Why Node.js for Microservices?

## What is Node.js?

Let's look now at Node.js. What exactly is it, and why is it a good choice for building microservices?

Node.js is a runtime environment that allows you to execute JavaScript code on the server side. Before the advent of Node.js, JavaScript was a language used only in the browser. In fact, JavaScript is used on almost every website, pairing dynamic content and improving the user experience. When Node.js arrived, developers were then able to write server‑side code using a language with which they were familiar.

When we say that Node is a runtime environment, we mean that it provides the necessary tools, settings, and conditions to execute JavaScript outside of a browser environment.

## Key Features of Node.js

See Node documentation (@TBD to be linked to docs) for more details.

### Event-Driven Architecture - The Event loop

The event loop is a core part of Node.js that allows it to handle asynchronous operations efficiently. It enables Node.js to perform non-blocking I/O operations, and which is crucial for building high-performance applications that can handle many simultaneous connections without blocking the execution of other code.

### Non-blocking I/O

Node.js uses non-blocking I/O operations, which means that it can handle multiple requests at the same time without waiting for any single request to complete. This is particularly useful for I/O-bound tasks, such as reading from a database or making HTTP requests, where the application would otherwise be sitting idle waiting for a response

### NPM Package Manager

NPM stands for node package manager with NPM. Developers have access to a vast repository of libraries and modules making it easy to incorporate various functionalities into your application without building everything from scratch.

All of this makes node a great environment for building server side applications with JavaScript.

## Why Node.js is Perfect for Microservices

But node is particularly well suited to microservices.

### Lightweight and Fast

One of the key advantages of node when it comes to microservices in particular is that it is lightweight and very fast. This makes it a perfect candidate for microservices which require minimal overhead and quick start up times.

### Scalability

But we don't just need our services to be fast. We also need them to be scalable. This means we need them to be able to cope with high volumes of traffic again. No ticks all the boxes here driven in part by its event driven and non blocking architecture.

### Rich Ecosystem

With NPM. Developers have access to a rich ecosystem third party libraries that can speed up the development process. And many of these libraries are tailored for building and maintaining microservices. Express Js is one such example and we will use several of these libraries during this course.

### Containerization and Isolation

Microservices thrive on isolation, allowing individual services to be deployed and scaled independently. Node applications can easily be containerized using technologies like Docker making deployments, scaling and isolation a breeze. Again, this is something that we'll explore a little in this course.

### Database Support

Almost all microservices will need access to a database of some description. And node offers excellent support for various database technologies. This is something that's crucial when building microservices as they often require rapid data access without significant overhead.

## Potential Disadvantages

As with everything, though there are a few potential disadvantages to using node Js to build microservices:

### Single-Threaded Nature

Firstly, it's important to understand that node is single threaded by design. It makes use of its non blocking event driven architecture to achieve concurrency. While this is fantastic for IO bound operations where we're simply reading and writing data, it can become a bottleneck for CPU bound operations.

### CPU Bound Operations

CPU bound operations are where you need to do lots of heavy computation. Now, it's unlikely that this is gonna be the case within a microservice, but it's something to be aware of. If you have CPU intensive tasks, you should probably consider handing these off to another process.

### Memory Intensive Applications

If you have a logic in your application that uses a large amount of memory, then node may not be the best tool for the job.

## Conclusion

Even with these concerns, you'll find that node is a perfect tool for building modern high quality microservices.
