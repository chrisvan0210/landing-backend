const db = require("../../models/index");

let GetLandingPage = async (id) => {
  try {
    let data;
    let response;
    if (id) {
      data = await db.LandingPages.findOne({
        where: { id },
      });
      response = {
        status: 200,
        data: data,
      };
      return response;
    } else {
      data = await db.LandingPages.findAll();
      response = {
        status: 200,
        data: data,
      };
      return response;
    }
  } catch (e) {
    console.log(e);
    if (e.message) {
      console.log(e.message);
    }
  }
};

module.exports = GetLandingPage;
