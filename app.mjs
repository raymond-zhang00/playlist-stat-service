'use strict';
import express from 'express';
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import personImage from './routes/person-image.js';
import playlistSearch from './routes/playlist-search.js';
import getPlaylist from './routes/get-playlist.js';
import getTracks from './routes/get-tracks.js';
import getExercise from './routes/get-exercise.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const PORT = 3000;
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

app.get("/api", (req, res) => {res.send("Playlist Statistics API Page")});
app.use(personImage);
app.use(playlistSearch);
app.use(getPlaylist);
app.use(getTracks);
app.use(getExercise);

app.post("/search", (req, res) => {

});

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});