import axios from "axios";
import "dotenv/config";

let client_id = process.env.SPOTIFY_CLIENT_ID;
let client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export async function perform_auth(){

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials")

    let axiosConfig = {
        url: "https://accounts.spotify.com/api/token",
        method: "post",
        headers: {
            "Authorization": "Basic " + (Buffer.from(client_id + ":" + client_secret).toString("base64"))
        },
        data: params
    }

    const response = await axios(axiosConfig);

    return response.data.access_token;

}