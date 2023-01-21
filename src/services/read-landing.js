const db = require("../../models/index");

let GetLandingPage = async (id) => {
  try {
    if (id) {
      let data = await db.LandingPages.findOne({
        where: { id },
      });
      // await new Promise((delay) => {
      //   setTimeout(delay, 1000);
      // });
      return data;
    } else {
      let data = await db.LandingPages.findAll({
        order:[
          ['id', 'DESC'],
        ],
        attributes: ['id','title','url']
      });
      // await new Promise((delay) => {
      //   setTimeout(delay, 1000);
      // });
      return data;
    }
  } catch (e) {
    console.log(e);
    if (e.message) {
      console.log(e.message);
    }
  }
};

module.exports = GetLandingPage;
