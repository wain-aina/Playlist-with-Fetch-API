const express = require('express');
const getRouter = express.Router({mergeParams:true});
const getController = require('../controllers/get')

getRouter.route('/sherehe').get(getController.get_all);

module.exports = getRouter;