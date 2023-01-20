const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscribers");
//Getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
//Creating one
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Upgrading one
router.post("/:id", (req, res) => {});
//Deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
