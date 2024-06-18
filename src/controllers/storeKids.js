const { storeData } = require('../services/storeData.js');

class storeKids {
    storeData(req, res) {
        const { username, kidName, kidAge, kidDescription } = req.body;
        if (!username || !kidName || !kidAge || !kidDescription) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        storeData(username, kidName, kidAge, kidDescription)
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
    };
}

module.exports = new storeKids();