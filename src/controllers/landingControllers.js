const AddLandingPage = require('../services/add-landing');
const GetLandingPage = require('../services/get-landing');

const postLandingPage = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await AddLandingPage(req.body)
        if(response.status === 200){
            return res.send({ success: response.message});
        }
        else{
            return res.send({ error: response});
        }
        
    }
    else{
        return res.send({ failed : "Body empty" });
    }
}
const getLandingPage = async (req,res) =>{
    let id;
    if(req.query.id){
        id = req.query.id;
    }
    else if (req.params.id){
        id = req.params.id;
    }
    else{
        id = '';
    }
    const response =  await GetLandingPage(id);
    if(response.status === 200){
        return res.send({ success: response.data});
    }else{
        return res.send({ success: response});
    }
 }
 


module.exports = {postLandingPage,getLandingPage};