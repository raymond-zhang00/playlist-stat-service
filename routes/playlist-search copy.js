import express from "express";
const router = express.Router();
import axios from "axios";
import { perform_auth } from "../controllers/auth.js";

async function performPlaylistSearch(searchText) {
    let access_token = await perform_auth();

    let axiosConfig = {
        url: "https://api.spotify.com/v1/search",
        method: "get",
        headers: {
            "Authorization": "Bearer " + access_token
        },
        params: {
            q: searchText,
            type: "playlist"
        }
    }

    let searchResponse = await axios(axiosConfig);
    if (searchResponse.data.playlists.items.length > 0) {
        return searchResponse.data.playlists.items
    } else {
        return []
    }
}

router.get("/api/playlist-search", (req, res) => {

    performPlaylistSearch(req.query.search)
        .then(playlists => {
            res.send(playlists)
        })
        .catch(error => {
            console.error(error);
        })

});


export default router;