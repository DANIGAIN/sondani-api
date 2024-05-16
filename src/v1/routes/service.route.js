const express = require('express');
const createService = require('./../controllers/services/createService.controller')
const deleteService = require('./../controllers/services/deleteService.controller')
const getAllServices = require('./../controllers/services/getAllServices.controller')
const { adminMiddleware } = require('./../../middlewares /auth.middleware');

const router = express.Router();

router.post('/services', adminMiddleware,createService);
router.get('/services', getAllServices);
router.delete('/services/:id', adminMiddleware, deleteService);

module.exports = router;