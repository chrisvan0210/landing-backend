const db = require("../../models/index");

let GetLandingPage = async (id) => {
  try {
    if (id) {
      let data = await db.LandingPages.findOne({
        where: { id },
      });
      return data;
    } else {
      let data = await db.LandingPages.findAll({
        order:[
          ['id', 'DESC'],
        ],
        attributes: ['id','title','url']
      });
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
