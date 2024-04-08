# My Application

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
