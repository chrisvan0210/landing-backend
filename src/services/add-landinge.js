const db = require('../../models/index')

let AddLandingPage = async (body) => {
    console.log(db.LandingPage);
    try{
        const addlanding = await db.LandingPage.create({
            meta1: body.meta1,
            meta2: body.meta2
        });
        return addlanding;
    }
    catch(e){
        console.log(e);
        if(e.message){
            console.log(e.message);
        }
    }


}

module.exports = AddLandingPage