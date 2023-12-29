const express = require('express');
const createRouter = express.Router({mergeParams:true});
const createController = require('../controllers/create')

createRouter.route('/sherehe').post(createController.create_song);

module.exports = createRouter;