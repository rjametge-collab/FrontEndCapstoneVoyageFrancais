const Lesson = require("../models/Lessons");

// GET all lessons
const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET one lesson
const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json(lesson);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE lesson
const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);

    res.status(201).json(lesson);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE lesson
const updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json(lesson);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE lesson
const deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json({
      message: "Lesson deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson,
};