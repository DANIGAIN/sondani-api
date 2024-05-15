const express = require('express');
const getAllContacts = require('./../controllers/contacts/getAllContacts.controller');
const createContact = require('./../controllers/contacts/createContact.controller');
const deleteContact = require('./../controllers/contacts/deleteContact.controller');
const getContact = require('./../controllers/contacts/getContact.controller');
const { adminMiddleware, userMiddleware } = require('./../../middlewares /auth.middleware');

const router = express.Router();

router.get('/contacts', adminMiddleware, getAllContacts);
router.delete('/contacts/:id', adminMiddleware, deleteContact);
router.get('/contacts/:id', adminMiddleware, getContact);
router.post('/contacts', userMiddleware, createContact);

module.exports = router;
