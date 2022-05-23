import express from "express";
const router = express.Router();
import axios from "axios";

async function performGetExercise(intensity) {

    let exercisesResponse = await axios.get("http://localhost:3001/exercises");
    for (let i=0; i < exercisesResponse.data.exercises.length; i++){
        if (exercisesResponse.data.exercises[i].intensity == intensity){
            return exercisesResponse.data.exercises[i].name;
        }
    }
    return {Error: "No Matching Exercise Found"};
}

router.get("/api/get-exercise", (req, res) => {

    performGetExercise(req.query.intensity)
        .then(exercise => {
            res.send(exercise);
        })
        .catch(error => {
            console.error(error);
        })

});


export default router;