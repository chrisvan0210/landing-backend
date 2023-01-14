const db = require("../../models/index");

let GetLandingPage = async (id) => {
  try {
    let getlanding;
    let response;
    if (id) {
        getlanding = await db.LandingPages.findOne({
        where: { id },
      });
      response = {
        status: 200,
        data: getlanding,
      };
      return response;
    } else {
      getlanding = await db.LandingPages.findAll();
      response = {
        status: 200,
        data: getlanding,
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
