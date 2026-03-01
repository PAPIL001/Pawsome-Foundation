const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../data/contacts.json');

// Ensure data file exists
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
}

exports.submitContact = (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const newContact = {
            id: Date.now().toString(),
            name,
            email,
            message,
            date: new Date().toISOString()
        };

        // Read existing
        const rawData = fs.readFileSync(dataFile);
        const contacts = JSON.parse(rawData);

        // Append and save
        contacts.push(newContact);
        fs.writeFileSync(dataFile, JSON.stringify(contacts, null, 2));

        res.status(201).json({ message: 'Contact message saved successfully.', data: newContact });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

exports.getAllContacts = (req, res) => {
    try {
        const rawData = fs.readFileSync(dataFile);
        const contacts = JSON.parse(rawData);
        res.json(contacts);
    } catch (error) {
        console.error('Error reading contacts:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
