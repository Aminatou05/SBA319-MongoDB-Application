import express from 'express';
const router = express.Router();
import Cookie from '../models/cookies.mjs';
import db from '../db/connection.mjs';

// seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
      await Cookie.create([
        {
          name: "Jumbo Brownie",
          color: "Brown",
          quantity: "15",
          readyToEat: true,
        },
        {
          name: "Lemon Sugar",
          color: "Yellow",
          quantity: "35",
          readyToEat: false,
        },
        {
          name: "Monster Cookie",
          color: "Mixed Color",
          quantity: "20",
          readyToEat: true,
        },
      ]);
      res.status(200).redirect("/cookies");
    } catch (err) {
      res.status(400).send(err);
    }
  });
  // I - Index   display a list of elements
router.get("/", async (req, res) => {
  try {
    const foundCookies = await Cookie.find({});
    res.status(200).render("cookies/Index", { cookies: foundCookies });
  } catch (err) {
    res.status(400).send(err);
  }
});

// // N - New - allows a user to input a new Candy
router.get("/new", (req, res) => {
  res.render("cookies/New");
});
//ID- DELETE--
router.delete("/:id", async (req, res) => {
  try {
    const deletedCookie = await Cookie.findByIdAndDelete(req.params.id);
    console.log(deletedCookie);
    res.status(200).redirect("/cookies");
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
    const updatedCookie = await Cookie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    console.log(updatedCookie);
    res.redirect(`/cookies/${req.params.id}`);
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
    const createdCookie = await Cookie.create(req.body);
    res.status(200).send(createdCookie);
  } catch (err) {
    res.status(400).send(err);
  }
});

//  EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
    const foundCookie = await Cookie.findById(req.params.id);
    res.status(200).render("cookies/Edit", { cookie: foundCookie });
  } catch (err) {
    res.status(400).send(err);
  }
});





  export default router;