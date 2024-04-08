import express from "express";
const router = express.Router();
import Candy from "../models/candies.mjs";
import db from "../db/connection.mjs";

// seed route
router.get("/seed", async (req, res) => {
  console.log("in seed");
  try {
    await Candy.create([
      {
        name: "Lollipop",
        color: "pink",
        quantity: "10",
        readyToEat: true,
      },
      {
        name: "Gummy Bears",
        color: "purple",
        quantity: "15",
        readyToEat: false,
      },
      {
        name: "Chocolate Bar",
        color: "Mixed Fruit",
        quantity: "20",
        readyToEat: true,
      },
    ]);
    res.status(200).redirect('/candies');
  } catch (err) {
      res.status(400).send(err);
  }
});

// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
  try {
      const foundCandies = await Candy.find({});
      res.status(200).render('candies/Index', { candies: foundCandies})
      // res.status(200).send(foundCandies);
  } catch (err) {
      res.status(400).send(err);
  }
})

// N - New - allows a user to input a new fruit
router.get('/new', (req, res) => {
  res.render('candies/New');

})

//ID- DELETE--
router.delete('/:id', async( req, res) => {
  try{
      const deletedCandy = await Candy.findByIdAndDelete(req.params.id);
      // console.log(deletedCandy);
      res.status(200).redirect('candies');
  
  } catch (err) {
      res.status(400).send(err);
  }
  }
)

// U - UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }

  try {
      const updatedCandy = await Candy.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
          console.log(updatedCandy);
      res.redirect(`/candies/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})

//Validation rules ensure that the `name` is provided and the `quantity` is at least 5, and check that the route responds with a 400 status code and an appropriate error message.
// Route to create a new candy
router.post('/', async (req, res) => {
  // Convert 'on' to true or false for the readyToEat field
  if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }

  try {
    const createdCandy = await Candy.create(req.body);
        res.status(200).send(createdCandy);
      } catch (err) {
        res.status(400).send(err.message); // Send only the error message
      }
});



// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
      const foundCandy = await Candy.findById(req.params.id);
      res.status(200).render('candies/Edit', {candy: foundCandy});
  } catch (err) {
      res.status(400).send(err);
  }
})


// S - SHOW - show route displays details of an individual fruit
router.get('/:id', async (req, res) => {
  try {
      const foundCandy = await Candy.findById(req.params.id);
      res.render('candies/Show', {candy: foundCandy});
  } catch (err) {
      res.status(400).send(err);
  }
})
export default router;
