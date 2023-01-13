const AddLandingPage = require('../services/add-landinge');

let postLandingPage = async (req,res) =>{
   const msg =  await AddLandingPage(req.body)
    return res.send({ message: "Register succesfully !"});
}

module.exports = postLandingPage;