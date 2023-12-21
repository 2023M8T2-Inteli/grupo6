const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/get/:chat', chatController.getChat);
router.post('/post', chatController.postChat);

module.exports = router;