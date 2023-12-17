const database = require('../../database/db');

const getChat = async (req, res) => {
    try {
        const chat = await req.body;
        res.json(chat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getChat
};