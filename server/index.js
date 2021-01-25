const path = require('path');
const express = require('express');
const port = 3005;

const app = express();

app.use(express.static(path.join(__dirname, '..public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`listening on port:${port}..`))