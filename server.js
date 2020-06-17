const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to TodoList API');
});

// Define Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/todos', require('./routes/todos'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
