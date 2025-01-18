// server.js
const express = require('express');
const app = express();
const PORT = 5000;

// Example users
const users = [
  { id: 1, username: 'green', email: 'green@example.com' },
  { id: 2, username: 'blue', email: 'blue@example.com' }
];



// Route to get all users
app.get('api/users', (req, res) => {
  res.json(users);
});

// Route to get a user by ID
app.get('api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
