const router = require("express").Router();
const Player = require("../models/Player");

router.get("/api/players", (req, res) => {
    Player.find({}).then((data) => {
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