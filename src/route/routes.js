const express = require('express');
const router = express.Router();
const postLandingPage = require('../controllers/landingControllers')

router.post('/landingpage', postLandingPage)

module.exports = router;