# My SBA319-MongoDB-Application
## Description
This is a RESTful API server application using Node.js, Express, and MongoDB. It provides CRUD operations for managing three different data collections within the database (such as users, candies, and cookie).
# Candy API
This API allows users to interact with a database of candies. Users can create, read, update, and delete candy entries.
## Routes
### Seed Route
- **GET /seed**
  - Populates the database with initial candy data.
  - **Operation*: CREATE
### Index Route
- **GET /**
  - Displays a list of all candies.
  - **Operation**: READ
### New Route
- **GET /new**
  - Provides a form to submit a new candy.
  - **Operation**: CREATE
### Delete Route
- **DELETE /:id**
  - Deletes a specific candy by ID.
  - **Operation**: DELETE
### Update Route
- **PUT /:id**
  - Updates a specific candy by ID.
  - **Operation**: UPDATE
## Models
- `Candy`
  - `name`: String
  - `color`: String
  - `quantity`: Number
  - `readyToEat`: Boolean
## Validation
Ensure that all inputs are validated before being processed by the API.
## MongoDB Indexes
I used Indexes for frequently queried fields // Index for querying by name,
 // Index for querying by color
## MongoDB Validation Rules
Validation rules ensure that the `name` is provided and the `quantity` is at least 5.

# Cookie API
## Description
This API allows you to manage a collection of delicious cookies. You can add new cookie types, update their details, retrieve a list of all cookies, or find a specific cookie by its name.## Routes
### Seed Route
- **GET /seed**
  - Populates the database with initial cookie data.
  - **Operation**: Create
### Index Route
- **GET /**
  - Retrieves a list of all cookies.
  - **Operation**: Read
### New Route
- **GET /new**
  - Displays a form to create a new cookie.
  - **Operation**: Read (form display)
### Delete Route
- **DELETE /:id**
  - Deletes a cookie with the specified ID.
  - **Operation**: Delete
### Update Route
- **PUT /:id**
  - Updates the 'readyToEat' status of a cookie with the specified ID.
  - **Operation**: Update
## Models
The API revolves around the `Cookie` model, which has the following schema:
- `name`: A unique string that identifies the cookie type.
- `color`: The color of the cookie.
- `quantity`: The number of cookies available.
- `readyToEat`: A boolean indicating if the cookie is ready to eat.

