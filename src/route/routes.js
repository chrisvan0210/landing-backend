const express = require('express');
const router = express.Router();
const {postLandingPage,getLandingPage} = require('../controllers/landingControllers')

const listRoutes = (app) =>{

    router.post('/api/landingpage', postLandingPage)
    router.get('/api/landingpage', getLandingPage)

    return app.use(router)
}



module.exports = listRoutes;