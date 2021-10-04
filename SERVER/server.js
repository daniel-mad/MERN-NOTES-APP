const express = require("express");
const notes = require("./Data/notes");
const dotent = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")

const app = express();
dotent.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});


app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
