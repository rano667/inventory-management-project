const express = require('express');
const connectDB = require('./connectDB');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 4000; // You can change the port number as needed

// Middleware to enable CORS
app.use(cors({
  origin: "*"
}));

// Middleware to parse JSON requests
app.use(express.json());

connectDB();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(require('./routes/product'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
