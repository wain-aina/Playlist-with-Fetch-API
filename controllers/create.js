const mongoose = require('mongoose');
const sherehe = require('../models/song.js')

exports.create_song = async(req, res)=>{
    try {
        const { name, artist } = req.body;
        const newItem = new sherehe.ShereheSongs({ name, artist });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}