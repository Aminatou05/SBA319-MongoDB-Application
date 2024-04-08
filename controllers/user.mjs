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

// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
  try {
      const foundUsers = await User.find({});
      res.status(200).render('users/Index', { users: foundUsers})
   
  } catch (err) {
      res.status(400).send(err);
  }
})

// N - New - allows a user to input a new user
router.get('/new', (req, res) => {
  res.render('users/New');

})

//ID- DELETE--to delete a user by id
router.delete('/:id', async( req, res) => {
  try{
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      console.log(deletedUser)
      res.status(200).redirect('users');
  
  } catch (err) {
      res.status(400).send(err);
  }
  }
)

// U - UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.rememberMe === 'on') {
      req.body.rememberMe = true;
  } else {
      req.body.rememberMe = false;
  }

  try {
      const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
          console.log(updatedUser);
      res.redirect(`/users/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})

// C - CREATE

// Route to create a new user
router.post('/', async (req, res) => {
  // Convert 'on' to true or false for the rememberMe field
  if (req.body.rememberMe === 'on') {
      req.body.rememberMe = true;
  } else {
      req.body.rememberMe = false;
  }

  try {
      // Create a new user using the User model
      const createdUser = await User.create(req.body);
      res.status(200).redirect('/users');
  } catch (err) {
      res.status(400).send('You are less than 18 old');
  }
});

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
      const foundUser = await User.findById(req.params.id);
      res.status(200).render('users/Edit', {user: foundUser});
  } catch (err) {
      res.status(400).send(err);
  }
})


// S - SHOW - show route displays details of an individual user
router.get('/:id', async (req, res) => {
  try {
      const foundUser = await User.findById(req.params.id);
      res.render('users/Show', {user:foundUser});
  } catch (err) {
      res.status(400).send(err);
  }
})

 export default router;