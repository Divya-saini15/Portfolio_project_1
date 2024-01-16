const { randomInt } = require("crypto");
const express = require("express");
const app = express();
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const bodyParser = require('body-parser');

const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

// Use express.json() middleware to parse JSON in the request body
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'redhat',
    database: 'DivyaSaini'
});

app.post("/dform", (req, res) => {
    // Destructure properties from req.body after ensuring it's not undefined
    const { name, email, website, java, Backend, React, message } = req.body || {};
    const id = faker.string.uuid();

    const que = `INSERT INTO userdata (id, name, email, website, java, Backend, React, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [id, name, email, website, java, Backend, React, message];

    connection.query(que, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error");
        }

        console.log(result);
        res.send(`Thank you ${name}`);
    });
});

// Divya World Server
app.get("/dev", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Listening for port ${port}`);
});
