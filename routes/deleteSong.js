const express = require('express');
const deleteRouter = express.Router({mergeParams:true});
const deleteController = require('../controllers/delete')

deleteRouter.route('/delete/:id').delete(deleteController.delete_song);

module.exports = deleteRouter;
