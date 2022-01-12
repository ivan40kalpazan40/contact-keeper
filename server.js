const express = require('express');

const routes = require('./routes');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}....`));
