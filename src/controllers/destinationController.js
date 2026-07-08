const Destination = require("../models/Destination");

// GET all destinations
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET one destination
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.status(200).json(destination);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE destination
const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json(destination);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE destination
const updateDestination = async (req, res) => {
  try {

    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.status(200).json(destination);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE destination
const deleteDestination = async (req, res) => {
  try {

    const destination = await Destination.findByIdAndDelete(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.status(200).json({
      message: "Destination deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
};