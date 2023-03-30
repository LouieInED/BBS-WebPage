const fs = require("fs");
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5002;
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    "/scripts/js", 
    express.static(
        path.join(__dirname, "node_modules/bootstrap/dist/js")
    )
);
app.use(routes);


app.listen(PORT, () => console.log(`Listening to Server: www.localhost:${PORT}`));