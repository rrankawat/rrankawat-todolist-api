const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to TodoList API');
});

// Define Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/todos', require('./routes/todos'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
