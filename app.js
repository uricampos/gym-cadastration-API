const express = require('express');
const studentsRouter = require('./src/routes/students');

require('./config/database');

const app = express();

app.use(express.json());

app.use('/students', studentsRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
