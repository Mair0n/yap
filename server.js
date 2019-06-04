require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const router = require('./api/router');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Good');
});

app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})