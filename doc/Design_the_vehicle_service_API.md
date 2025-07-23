We're going to analyze the problem that our vehicle service aims to address and identify the key features it needs to have.

After completing this, we should have the basic structure of our API ready for implementation.

Business requirements are here [Vehicle Service Requirements](./Requirements.md)

And those requirements are the sort of thing as a developer you'll need to be able to interpret.

We'll be using these to help us plan our vehicle service API.

In this project, we're just focusing on the functional elements.

We need to turn this document into a rough outline of our API.

What endpoints do we need?
What should they return?

So the first thing I want to understand is what does a vehicle actually look like?
What properties does it have?

Here in the first requirement, we can see that a vehicle has a make, a model, a registration number, manufacturing year, and a rental price.

Now, we also need to think about what types of data, these properties store.

So let's keep things simple and say that the year and price are numbers and that everything else is a string.

Now, let's look at our endpoints.

First, we need a "create vehicle" endpoint.

Now because we're creating a vehicle, we're going to have to send data to our API.
This means that this will need to be an HTTP POST operation.

In our request, we're going to be sending the vehicle data that we want to create, probably in JSON format.

We can also have the URL as well, as we'll need this later. You also need to think about what this endpoint will return.

If everything works as expected and there are no errors, then the endpoint should return a 201 response code and a copy of the data that was created in the database.

If anything goes wrong, then I want the API to return a 500 application error.

Next, we have a requirement to be able to update a vehicle.
Now, this endpoint isn't an HTTP POST. Instead it's an HTTP PUT endpoint. That's because we're dealing with an instance of an object that already exists in our system.

In our URL, we also need to pass a parameter, which is the "id" of the vehicle record that we want to update.
A request body will be the same, the vehicle object.
And our response codes change slightly. This time, I want to return a 200 response, which is simply OK.

You can actually return whatever status codes you like, but there are common conventions here which you should try and follow if possible.

Our next requirement is to be able to delete a vehicle.
Now, this will be an HTTP DELETE. Again, we're going to pass the id of the vehicle that we want to delete with the URL, and we no longer need to provide a request body.

And so we continue until we've mapped out all of our endpoints, and it should look something like this.
