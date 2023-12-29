const mongoose = require('mongoose');
let chill;
chill = require('../models/song.js')
let jamaica;
jamaica = require('../models/song.js')
let sad;
sad = require('../models/song.js')
let love;
love = require('../models/song.js')
let trap;
trap = require('../models/song.js')
let sherehe;
sherehe = require('../models/song.js')
let religious;
religious = require('../models/song.js')

exports.delete_song = (req,res)=> {
    sherehe.ShereheSongs.findByIdAndRemove(req.params.id, (err) => {
        if (!err) {
            res.json({msg: "success"})
        } else {
            res.json({msg: "error"})
        }
    });
}
