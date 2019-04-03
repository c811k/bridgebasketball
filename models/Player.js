const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    number: {
        type: Number,
        unique: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    ministry: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    gp: Number,
    points: Number,
    rebounds: Number,
    assists: Number,
    steals: Number,
    blocks: Number,
    threepa: Number,
    threepm: Number,
    fga: Number,
    fgm: Number,
    fta: Number,
    ftm: Number,
    fouls: Number,
    ppg: Number,
    rpg: Number,
    apg: Number,
    bpg: Number,
    spg: Number,
    threepp: Number,
    fgp: Number,
    ftp: Number
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;