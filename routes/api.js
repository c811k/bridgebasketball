const router = require("express").Router();
const Player = require("../models/Player");

router.get("/api/players", (req, res) => {
    Player.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/api/players/points", (req, res) => {
    Player.find({"ppg": {"$exists": true }}).sort({ppg: -1}).limit(5).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/api/players/:firstname", (req, res) => {
    Player.find({
        firstname: req.params.firstname
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.post("/api/player", (req, res) => {
    Player.create(req.body).then(() => {
        res.end();
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;