const express = require('express');
const router = express.Router();

// @route    GET /todos
// @des      Get all todos
// @access   Private
router.get('/', (req, res) => {
  res.send('Get all todos');
});

// @route    POST /todos
// @des      Add new todo
// @access   Private
router.post('/', (req, res) => {
  res.send('Add new todo');
});

// @route    PUT /todos
// @des      Complete todo by id
// @access   Private
router.put('/:id', (req, res) => {
  res.send('Complete todo');
});

// @route    DELETE /todos
// @des      Delete todo by id
// @access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete todo');
});

module.exports = router;
