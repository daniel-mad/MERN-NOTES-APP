const express = require("express")
const notes = require("./Data/notes")
const dotent = require("dotenv")

const app = express()
dotent.config()

const PORT = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.get('/api/notes', (req, res)=>{
    res.json(notes)
})

app.get('/api/notes/:id', (req, res)=>{
    const note = notes.find(note => note._id === req.params.id)
    res.json(note)
})


app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})