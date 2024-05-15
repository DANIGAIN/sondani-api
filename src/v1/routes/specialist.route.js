const express = require('express');
const getAllSpecialists = require('./../controllers/specialists/getAllSpecialists.controller')
const deleteSpecialist = require('./../controllers/specialists/deleteSpecialist.controller')
const createSpecialist = require('./../controllers/specialists/createSpecialist.controller')
const { adminMiddleware, userMiddleware } = require('./../../middlewares /auth.middleware');

const router = express.Router();

router.post('/specialists', adminMiddleware, createSpecialist);
router.get('/specialists', userMiddleware, getAllSpecialists);
router.delete('/specialists/:id', adminMiddleware, deleteSpecialist);

module.exports = router;