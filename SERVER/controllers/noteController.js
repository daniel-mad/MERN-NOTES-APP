const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  return res.json(notes);
});

const createNote = async (req, res) => {
  const verfideFields = ["title", "content", "category"];
  const fields = Object.keys(req.body);
  const verified = fields.every((field) => verfideFields.includes(field));
  if (!verified)
    return res
      .status(404)
      .json({ message: "Please fill all nessessary fields" });

  try {
    const note = new Note({ user: req.user._id, ...req.body });

    await note.save();
    return res.status(201).json(note);
  } catch (error) {
    return res.status(500).json({ message: error._message });
  }
};

const getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    return res.json(note);
  } else {
    return res.status(404).json({ message: "Note not found" });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    if (note.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "You can't perform this action" });
    const updates = Object.keys(req.body);
    const allowedToUpdate = ["title", "content", "category"];
    const isValid = updates.every((update) => allowedToUpdate.includes(update));
    if (!isValid) return res.status(404).json({ message: "Invalid updates!" });
    updates.forEach((update) => (note[update] = req.body[update]));
    await note.save();
    return res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    if (note.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "You can't perform this action" });

    await note.remove();
    return res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNoteById,
};
