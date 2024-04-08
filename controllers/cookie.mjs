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

  // I - Index    GET         READ - display a list of elements
  router.get('/', async (req, res) => {
      try {
          const foundCookies = await Cookie.find({});
          res.status(200).render('cookies/Index', { cookies: foundCookies})
         
      } catch (err) {
          res.status(400).send(err);
      }
  })
  
  // N - New - allows a user to input a new cookie
  router.get('/new', (req, res) => {
      res.render('cookies/New');
  
  })
  
  //ID- DELETE--
  router.delete('/:id', async( req, res) => {
      try{
          const deletedCookie = await Cookie.findByIdAndDelete(req.params.id);
          // console.log(deletedCookie)
          res.status(200).redirect('cookies');
      
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
  })
  
  // C - CREATE
  // Route to create a new cookie
router.post('/', async (req, res) => {
  // Convert 'on' to true or false for the readyToEat field
  if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }

  try {
      // Create a new cookie using the Cookie model
      const createdCookie = await Cookie.create(req.body);
      res.status(200).redirect('/cookies');
  } catch (err) {
      res.status(400).send(err);
  }
});
  
  // E - EDIT - update an existing entry in the database
  router.get("/:id/edit", async (req, res) => {
      try {
          const foundCookie = await Cookie.findById(req.params.id);
          res.status(200).render('cookies/Edit', {cookie: foundCookie});
      } catch (err) {
          res.status(400).send(err);
      }
  })
  
  
  // S - SHOW - show route displays details of an individual cookie
  router.get('/:id', async (req, res) => {
      try {
          const foundCookie= await Cookie.findById(req.params.id);
          res.render('cookies/Show', {cookie: foundCookie});
      } catch (err) {
          res.status(400).send(err);
      }
  })




  export default router;