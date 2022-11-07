const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET "/api/notes" retrieves note information from db
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', (req, res) => {


  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
     title, text
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = router;