const express = require('express');
const cors = require('cors');
require('dotenv').config();

const perfumeRoutes = require('./routes/perfumeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/perfumes', perfumeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});