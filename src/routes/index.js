const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware');
const firebaseAuthController = require('../controllers/firebase-auth-controller');
const { storeData } = require('../services/storeData.js');
// Auth routes
router.post('/register', firebaseAuthController.registerUser);
router.post('/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/reset-password', firebaseAuthController.resetPassword);
router.post('/store-data', firebaseAuthController.storeData);


module.exports = router;
