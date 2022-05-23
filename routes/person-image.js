import express from "express";
const router = express.Router();
import axios from "axios";

const personUrl = 'https://this-person-does-not-exist.com/';
const re = new RegExp('img/avatar-(.*?).jpg');

let getB64Img = async() => {
    const guidres = await axios.get(personUrl);
    
    let guid = guidres.data.match(re)[1];

    //console.log(guid);
    //console.log(personUrl + `img/avatar-${guid}.jpg`);

    const imgres = await axios.get(personUrl + `img/avatar-${guid}.jpg`, {responseType: 'arraybuffer'});

    let b64img = Buffer.from(imgres.data, 'binary').toString('base64');

    return b64img;
}

router.get("/api/person-image", (req, res) => {
    getB64Img()
        .then(b64 => {
            let jsonbody = {
                "b64encodedimg": b64,
                "citation": "This image was taken from this-person-does-not-exist.com"
            }
            res.send(jsonbody);
        });
})

export default router;