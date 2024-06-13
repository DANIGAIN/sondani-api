const CustomError = require('../../utils/Error')
const express = require('express');
const loginUser = require('./../controllers/users/loginUser.controller');
const signupUser = require('./../controllers/users/signupUser.controller');
const logoutUser = require('./../controllers/users/logoutUser.controller');
const getProfile = require('./../controllers/users/getProfile.controller');
const getAllUsers = require('./../controllers/users/getAllUsers.controller');
const deleteUser = require('./../controllers/users/deleteUser.controller');
const { getUser } = require('./../services/auth.service')
const seedUser = require('./../controllers/users/seedUser.controller');
const { adminMiddleware } = require('./../../middlewares/auth.middleware');


const router = express.Router();

router.post('/users/login', loginUser);
router.get('/users/logout', logoutUser);
router.post('/users/signup', signupUser);
router.get('/users/profile', getProfile);
router.get('/users/seed', seedUser);
router.get('/users', adminMiddleware, getAllUsers);
router.delete('/users/:id', adminMiddleware, deleteUser);
router.get('/users/:id', adminMiddleware, getUser);

module.exports = router;