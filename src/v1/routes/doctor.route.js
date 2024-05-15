const express = require('express');
const upload = require('./../services/upload.service');
const createDoctor =  require('../controllers/doctors/createDoctor.controller');
const { adminMiddleware, userMiddleware } = require('./../../middlewares /auth.middleware');

const router = express.Router();

router.post('/doctors', adminMiddleware, upload.single('image'), createDoctor);

module.exports = router;