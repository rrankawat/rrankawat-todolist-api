const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('todo', TodoSchema);
