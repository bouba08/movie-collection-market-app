const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});