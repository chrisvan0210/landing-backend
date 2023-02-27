const express = require("express");
const router = express.Router();
const {
  postLandingPage,
  getLandingPage,
  updateEachColumn,
  updateAllColumns,
  deleteLandingPage,
  loginUser,
  createUser,
} = require("../controllers/landingControllers");

const listRoutes = (app) => {
  // Authentication
  router.post("/api/login", loginUser);
  router.post("/api/createuser", createUser);
  // Crud
  router.post("/api/addldp", postLandingPage);
  router.get("/api/getldp", getLandingPage);
  router.post("/api/update-each-col", updateEachColumn);
  router.post("/api/update-all-col", updateAllColumns);
  router.post("/api/deleteldp", deleteLandingPage);

  return app.use(router);
};

module.exports = listRoutes;
