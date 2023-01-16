const db = require("../../models/index");

let DeleteLandingPage = async (body) => {
   
  try {
    let response;
    await db.LandingPages.destroy({ where: { id: body.id } })
      .then((res) => {
       return res
      })
      .catch((err) => {
        console.log(err);
      });
    response = {
        status: 200,
        message: "Successfully deleted landing page",
    }
    return response;
  } catch (e) {
    console.log(e);
    if (e.message) {
      console.log(e.message);
    }
  }
};

module.exports = DeleteLandingPage;