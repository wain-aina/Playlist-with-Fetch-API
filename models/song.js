const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name:String,
    artist:String
});

module.exports = {
    ShereheSongs : new mongoose.model('Sherehe', songSchema),
};

