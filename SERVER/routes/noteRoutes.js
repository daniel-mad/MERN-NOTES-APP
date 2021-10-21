const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNoteById,
} = require("../controllers/noteController");
const auth = require("../Middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(auth, getNotes);
router.route("/create").post(auth, createNote);
router
  .route("/:id")
  .get(auth, getNoteById)
  .put(auth, updateNote)
  .delete(auth, deleteNoteById);

module.exports = router;
