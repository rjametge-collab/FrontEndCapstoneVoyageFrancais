const express = require("express");

const router = express.Router();

const {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
} = require("../controllers/destinationController");

// GET all
router.get("/", getDestinations);

// GET one
router.get("/:id", getDestinationById);

// CREATE
router.post("/", createDestination);

// UPDATE
router.put("/:id", updateDestination);

// DELETE
router.delete("/:id", deleteDestination);

module.exports = router;