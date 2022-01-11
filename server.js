const express = require('express');

const routes = require('./routes');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}....`));
