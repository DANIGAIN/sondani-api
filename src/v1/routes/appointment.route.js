const express = require('express');
const getAppointment = require('./../controllers/appointments/getAppointment.controller');
const createAppointment = require('./../controllers/appointments/createAppointment.controller');
const deleteAppointment = require('./../controllers/appointments/deleteAppointment.controller');
const updateAppointment = require('./../controllers/appointments/updateAppointment.controller');
const getAllAppointments = require('./../controllers/appointments/getAllAppointments.controller');
const getCountAppointmentByStatus = require('./../controllers/appointments/getCountAppointmentByStatus.controller');
const getAllAppointmentsByPatient = require('./../controllers/appointments/getAllAppointmentsByPatient.controller');
const { adminMiddleware, checkAppRoleMiddleware, userMiddleware } = require('./../../middlewares/auth.middleware');

const router = express.Router();

router.get('/appointments/:id', checkAppRoleMiddleware, getAppointment);
router.post('/appointments', userMiddleware, createAppointment);
router.get('/appointments', adminMiddleware, getAllAppointments);
router.delete('/appointments/:id', checkAppRoleMiddleware, deleteAppointment);
router.put('/appointments/:id', checkAppRoleMiddleware, updateAppointment);
router.get('/appointments/:id', checkAppRoleMiddleware, getAllAppointmentsByPatient);
router.get('/appointments/status/:status', adminMiddleware, getCountAppointmentByStatus);


module.exports = router;