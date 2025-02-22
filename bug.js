const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Handle the error properly, don't just log it
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});