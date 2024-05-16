const express = require('express');
const upload = require('./../services/upload.service');
const createDoctor =  require('../controllers/doctors/createDoctor.controller');
const deleteDoctor =  require('../controllers/doctors/deleteDoctor.controller');
const getAllDoctors =  require('../controllers/doctors/getAllDoctors.controller');
const getAllDoctorsBySpecialist =  require('../controllers/doctors/getAllDoctorsBySpecialist.controller');
const { adminMiddleware } = require('./../../middlewares /auth.middleware');

const router = express.Router();

router.post('/doctors', adminMiddleware, upload.single('image'), createDoctor);
router.get('/doctors', getAllDoctors);
router.get('/doctors/:sp', getAllDoctorsBySpecialist);
router.delete('/doctors/:id', adminMiddleware, deleteDoctor);

module.exports = router;