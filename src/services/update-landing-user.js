const db = require("../../models/index");

let UpdateLandingPageUser = async (body) => {
  try {
    let response;
    let keyname = Object.keys(body)[1].toString();
    const returnObj = () => {
      switch (keyname) {
        case "title": return { title: body[keyname]};
        case "url": return { url: body[keyname]};
        case "keyword": return { keyword: body[keyname]};
        case "description": return { description: body[keyname]};
        case "analytics": return { analytics: body[keyname]};
        case "affid": return { affid: body[keyname]};
        case "facebookcode": return { facebookcode: body[keyname]};
        case "noscript": return { noscript: body[keyname]};
        case "mainurl": return { mainurl: body[keyname]};
        case "redirect": return { redirect: body[keyname]};
        case "h1": return { h1: body[keyname]};
        case "h2": return { h2: body[keyname]};
        case "button1": return { button1: body[keyname]};
        case "button2": return { button2: body[keyname]};
        case "button3": return { button3: body[keyname]};
      }
    };

    await db.LandingPages.update(returnObj(), { where: { id: body.id } })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
      response = {
        status: 200,
        message: `${keyname} is updated`,
    }
    return response;
  } catch (e) {
    console.log(e);
    if (e.message) {
      console.log(e.message);
    }
  }
};

module.exports = UpdateLandingPageUser;
