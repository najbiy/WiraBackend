const express = require('express');
const router = express.Router();
const { getSequentialAudio } = require('../controllers/audioUp');
const firebaseAuthController = require('../controllers/auth');
const storeKids = require ('../controllers/storeKids')
// Auth routes
router.post('/register', firebaseAuthController.registerUser);
router.post('/login', firebaseAuthController.loginUser);
router.post('/logout', firebaseAuthController.logoutUser);
router.post('/reset-password', firebaseAuthController.resetPassword);

// Store Kids data
router.post('/storeKids', storeKids.storeData);

router.get('/sequential-audio', getSequentialAudio);


module.exports = router;
