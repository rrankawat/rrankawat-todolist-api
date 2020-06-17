const express = require('express');
const router = express.Router();

// @route    POST /users
// @des      Register user & get token
// @access   Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
