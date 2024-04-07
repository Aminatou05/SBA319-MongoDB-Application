import express from 'express';
const router = express.Router();
import User from '../models/users.mjs';
import db from '../db/connection.mjs';

// seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
      await User.create([
        { name: 'Alice',
         email: 'alice@gmail.com',
          age: 25 },

        { name: 'Bob',
         email: 'bob@yahoo.com', 
         age: 30 },

        { 
        name: 'Charlie', 
        email: 'charlie@rr.com', 
        age: 35 }
      ]);
      res.status(200).redirect("/users");
    } catch (err) {
      res.status(400).send(err);
    }
  });


// Routes
// //Here's how you can use these query parameters:

// // To get all users: GET /users
// // To get users with a specific age: GET /users?age=30
// // To get users with a specific name: GET /users?name=Bob
// router.get("/", async  (req, res) => {
//     try {
//         let query = {};

//         // Check if age query parameter is provided
//         if (req.query.age) {
//             query.age = req.query.age;
//         }

//         // Check if name query parameter is provided
//         if (req.query.name) {
//             query.name = req.query.name;
//         }

//         const users = await User.find(query);
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// I - Index   display a list of users
router.get("/", async (req, res) => {
    try {
      const foundUsers = await User.find({});
      res.status(200).render("users/Index", { users: foundUsers });
    } catch (err) {
      res.status(400).send('Error fetching users');
    }
  });
  
  
  // // N - New - allows a user to input a new Candy
  router.get("/new", (req, res) => {
    res.render("users/New");

  });

 // DELETE a user by ID
  router.delete("/:id", async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      console.log(deletedUser);
      res.status(200).redirect("/users");
    } catch (err) {
      res.status(400).send(err);
    }
  });
// // PATCH/update a user by ID You can test this route using a tool like Postman or curl by sending a PATCH request to /users/:id with a JSON body containing the fields to be updated
router.patch("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(200).send(newUser);
    } catch (err) {
      res.status(400).send(err.message); // Send only the error message
    }
  });
  
  //  EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
      const foundUser = await User.findById(req.params.id);
      res.status(200).render("users/Edit", { user: foundUser });
    } catch (err) {
      res.status(400).send(err);
    }
  });

 export default router;