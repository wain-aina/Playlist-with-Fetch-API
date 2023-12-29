const mongoose = require('mongoose');
let Chill;
Chill = require('../models/song.js')
let Jamaica;
Jamaica = require('../models/song.js')
let Sad;
Sad = require('../models/song.js')
let Love;
Love = require('../models/song.js')
let Trap;
Trap = require('../models/song.js')
let Sherehe;
Sherehe = require('../models/song.js')
let Religious;
Religious = require('../models/song.js')
    exports.search_party = async(req,res)=>{
        try {
            const response = await Sherehe.ShereheSongs.find({$or:[{name:{$regex: new RegExp(req.query.search),$options: 'mixs'}},{artist:{$regex: new RegExp(req.query.search), $options: 'mixs'}}]}).exec()
            if(response){
                if(response.length !== 0){
                   res.status(201).json(response)
                } else {
                    res.json({msg: "Not Found"})
                }
            } else {
                res.json({msg: "Not Found"})
            }
        } catch (error) {
            console.log(error);
        }
    }

