const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware');
const firebaseAuthController = require('../controllers/firebase-auth-controller');
const { storeData } = require('../services/storeData.js');
// Auth routes
router.post('/api/register', firebaseAuthController.registerUser);
router.post('/api/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/api/reset-password', firebaseAuthController.resetPassword);
router.post('/api/store-data', function(req, res) {
    const { email, kidName, kidAge, kidDescription } = req.body;
    if (!email || !kidName || !kidAge || !kidDescription) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    storeData(email, kidName, kidAge, kidDescription)
        .then(success => {
            if (success) {
                return res.status(200).json({ message: 'Data stored successfully' });
            } else {
                return res.status(500).json({ error: 'Failed to store data' });
            }
        })
        .catch(error => {
            console.error('Error storing data:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
});


module.exports = router;
