const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());

app.get('/v1/:context', function (req, res) {
    const { context } = req.params;

    try {
        const rawdata = fs.readFileSync(`./src/mocks/${context}.json`);
        res.json(JSON.parse(rawdata));
    } catch(e) {
        res.status(404).json({error: 404, message: 'not found'});
    }
})

app.listen(3000)