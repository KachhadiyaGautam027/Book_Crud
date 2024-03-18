const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const routes = require('./routes/route');
const db = require('./config/db');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port, () => {
    console.log("Server Starting port 3000...");
})