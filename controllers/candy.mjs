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
    res.status(200).redirect("/candies");
  } catch (err) {
    res.status(400).send(err);
  }
});

// I - Index   display a list of elements
router.get("/", async (req, res) => {
  try {
    const foundCandies = await Candy.find({});
    res.status(200).render("candies/Index", { candies: foundCandies });
  } catch (err) {
    res.status(400).send(err);
  }
});
// // N - New - allows a user to input a new Candy
router.get("/new", (req, res) => {
  res.render("candies/New");
});
//ID- DELETE--
router.delete("/:id", async (req, res) => {
  try {
    const deletedCandy = await Candy.findByIdAndDelete(req.params.id);
    console.log(deletedCandy);
    res.status(200).redirect("/candies");
  } catch (err) {
    res.status(400).send(err);
  }
});
// // U - UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.readyToEat === "on") {
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
});

//CREATE
// I am starting with my post route so that I can see the things in my database
router.post("/", async (req, res) => {
  // // this will be useful when have a user input form
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on' - or the checkbox is checked
    req.body.readyToEat = true;
  } else {
    // if not checked, then it was undefined
    req.body.readyToEat = false;
  }
  console.log(req.body);

  try {
    const createdCandy = await Candy.create(req.body);
    res.status(200).send(createdCandy);
  } catch (err) {
    res.status(400).send(err);
  }
});

//  EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
    const foundCandy = await Candy.findById(req.params.id);
    res.status(200).render("candies/Edit", { candy: foundCandy });
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
