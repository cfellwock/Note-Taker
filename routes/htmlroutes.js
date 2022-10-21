//tpage navigation
const path = require('path');
const router = require('express').Router();

// "/notes" responds with notes.html file and defines endpoints
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Everything else gives index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
