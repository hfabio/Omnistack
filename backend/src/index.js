const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send(`Ola ${req.query.name}`);
});

app.listen(3333);