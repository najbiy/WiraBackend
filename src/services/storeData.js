const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore({ projectId: 'wira-wicara', databaseId: 'ml-histories' });

async function storeData(username, kidName, kidAge, kidDescription) {
    try {
        const userRef = db.collection('data_anak').doc(username);
        await userRef.set({
            kids: {
                [kidName]: {
                    age: kidAge,
                    description: kidDescription
                }
            }
        });
        console.log('Data stored successfully');
        return true;
    } catch (error) {
        console.error('Error storing data:', error);
        return false;
    }
}

module.exports = { storeData };