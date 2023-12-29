const express = require('express');
const searchRouter = express.Router({mergeParams:true});
const search = require('../controllers/search')

searchRouter.get('/partySearch',search.search_party);

module.exports = searchRouter;
