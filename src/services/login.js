const db = require("../../models/index");

let LoginUser = async (id) => {
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
      data = await db.LandingPages.findAll({
        order:[
          ['id', 'DESC'],
        ],
        attributes: ['id','title','url']
      });
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

module.exports = LoginUser;
