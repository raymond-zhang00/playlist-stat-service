const express = require("express");
const router = express.Router();
const axios = require("axios");

const personUrl = 'https://this-person-does-not-exist.com/';
const re = new RegExp('img/avatar-(.*?).jpg');

let getB64Img = async() => {
    const guidres = await axios.get(personUrl);
    
    let guid = guidres.data.match(re)[1];

    console.log(guid);
    console.log(personUrl + `img/avatar-${guid}.jpg`);

    const imgres = await axios.get(personUrl + `img/avatar-${guid}.jpg`, {responseType: 'arraybuffer'});

    //console.log(imgres);

    let b64img = Buffer.from(imgres.data, 'binary').toString('base64');

    //console.log(b64img);

    return b64img;
}

router.get("/api/person-image", (req, res) => {
    //res.setHead(200, {'Content-Type': 'image/jpeg'});
    getB64Img()
        .then(b64 => {
            let jsonbody = {
                b64encodedimg: b64
            }
            res.send(jsonbody);
        });
})

module.exports = router;