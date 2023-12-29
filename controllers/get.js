const mongoose = require('mongoose');
let Sherehe;
Sherehe = require('../models/song.js')

exports.get_all = (req,res)=>{
    Sherehe.ShereheSongs.find({}, (err, data)=>{
        if(err){
            res.json({msg: "error"})
        } else {
            res.render('sherehe', {data:data})
        }
    });
}
