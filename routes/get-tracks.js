import express from "express";
const router = express.Router();
import axios from "axios";
import { perform_auth } from "../controllers/auth.js";

async function performGetTracks(playlistId) {
    let access_token = await perform_auth();

    let axiosConfig = {
        url: `playlists/${playlistId}/tracks`,
        baseURL: "https://api.spotify.com/v1",
        method: "get",
        headers: {
            "Authorization": "Bearer " + access_token
        }
    }

    let tracksResponse = await axios(axiosConfig);
    if (tracksResponse.data.total > 0) {
        return tracksResponse.data.items;
    } else {
        return [];
    }
}

router.get("/api/get-tracks", (req, res) => {

    performGetTracks(req.query.id)
        .then(tracks => {
            res.send(tracks);
        })
        .catch(error => {
            console.error(error);
        })

});


export default router;