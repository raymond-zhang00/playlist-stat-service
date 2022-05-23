import express from "express";
const router = express.Router();
import axios from "axios";
import { perform_auth } from "../controllers/auth.js";

async function performGetPlaylist(playlistId) {
    let access_token = await perform_auth();

    let axiosConfig = {
        url: `playlists/${playlistId}`,
        baseURL: "https://api.spotify.com/v1",
        method: "get",
        headers: {
            "Authorization": "Bearer " + access_token
        }
    }

    let playlistResponse = await axios(axiosConfig);
    if (playlistResponse.data) {
        return playlistResponse.data;
    } else {
        return [];
    }
}

router.get("/api/get-playlist", (req, res) => {

    performGetPlaylist(req.query.id)
        .then(playlist => {
            res.send(playlist);
        })
        .catch(error => {
            console.error(error);
        })

});


export default router;