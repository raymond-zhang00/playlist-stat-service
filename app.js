'use strict';
const { response } = require('express');
const express = require("express");
const app = express();
const path = require('path');
//const connectDB = require("./config/connectdb");

const PORT = 5000;

// Connect to database
//connectDB();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/api", (req, res) => {res.send("Playlist Statistics API Page")});
app.use(require("./routes/person-image"))

app.post("/search", (req, res) => {

});

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});