const db = require("../../models/index");

let LoginUser = async (body) => {
  try {
    let result = await db.Admin.findOne({
      where: { username: body.username },
    });
    if (result && result.password === body.password) {
      await new Promise((delay) => {
        setTimeout(delay, 3000);
      });
      return { username: result.username };
    }
  } catch (e) {
    console.log(e);
    if (e.message) {
    }
  }
};

module.exports = LoginUser;
