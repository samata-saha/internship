const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const dustbinRoutes = require('./routes/dustbinRoutes');

dotenv.config();
const app = express();
app.use(cors());
connectdb();
app.use('/api/dustbins', dustbinRoutes);
app.get('/', (req, res) => {
    res.send("Api is running");
});
app.listen(PORT, () => {
    console.log(`Server is running on port 6500`);
});