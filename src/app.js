const express = require('express');
const userRoutes = require('./infrastructure/webserver/routes/userRoutes');
const dataRoutes = require('./infrastructure/webserver/routes/dataRoutes');
const dotenv = require('dotenv');


dotenv.config();
const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/data', dataRoutes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
