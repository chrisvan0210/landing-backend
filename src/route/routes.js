const express = require("express");
const router = express.Router();
const {
  postLandingPage,
  getLandingPage,
  updateLandingPageUser,
  updateLandingPageAdmin,
  deleteLandingPage,
  loginUser,
} = require("../controllers/landingControllers");

const listRoutes = (app) => {
  // Authentication
  router.post("/api/login", loginUser);
  // Crud
  router.post("/api/addldp", postLandingPage);
  router.get("/api/getldp", getLandingPage);
  router.post("/api/updateldp-user", updateLandingPageUser);
  router.post("/api/updateldp-admin", updateLandingPageAdmin);
  router.post("/api/deleteldp", deleteLandingPage);

  return app.use(router);
};

module.exports = listRoutes;
