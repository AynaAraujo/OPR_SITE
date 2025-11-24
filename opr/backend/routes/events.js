// routes/events.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventsController');

router.get('/', controller.listEvents);
router.post('/', controller.createEvent);
router.put('/:id', controller.updateEvent);
router.delete('/:id', controller.deleteEvent);

module.exports = router;
