const db = require("../../models/index");

let CreateUser = async (body) => {
  try {
    let result = await db.Admins.create({
        username: 'admin',
        password: 'admin556699',
        level:'1',
    });
    if (result) {
      // await new Promise((delay) => {
      //   setTimeout(delay, 1000);
      // });
      return { result};
    }
  } catch (e) {
    console.log(e);
    if (e.message) {
    }
  }
};

module.exports = CreateUser;
