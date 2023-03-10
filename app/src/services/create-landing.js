const db = require('../../models/index')

let AddLandingPage = async (body) => {
    try{
        const response = await db.LandingPages.create({
            title: body.title,
            url: body.url,
            keyword: body.keyword,
            description: body.description,
            analytics: body.analytics,
            affid: body.affid,
            facebookcode: body.facebookcode,
            noscript: body.noscript,
            mainurl: body.mainurl,
            redirect: body.redirect,
            h1: body.h1,
            h2: body.h2,
            button1: body.button1,
            button2: body.button2,
            button3: body.button3,
        });
        // await new Promise(delay=> setTimeout(delay,1000))
        return response;
    }
    catch(e){
        console.log(e);
        if(e.message){
            console.log(e.message);
        }
    }
}

module.exports = AddLandingPage