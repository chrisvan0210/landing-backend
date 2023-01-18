const LoginUser = require('../services/login');
const AddLandingPage = require('../services/create-landing');
const GetLandingPage = require('../services/read-landing');
const UpdateLandingPageUser = require('../services/update-landing-user');
const UpdateLandingPageAdmin = require('../services/update-landing-admin');
const DeleteLandingPage = require('../services/delete-landing');



const loginUser = async (req,res) =>{
    if(req.body && req.body.length !== 0){
     
        const response =  await LoginUser(req.body);
        console.log("response",response)
        if(response.user){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(200).send(response);
        }
        else{
            return res.send({ error: response});
        }
        
    }
    else{
        return res.send({ failed : "invalid body" });
    }
}

const postLandingPage = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await AddLandingPage(req.body)
        if(response.status === 200){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.send({ success: response.message});
        }
        else{
            return res.send({ error: response});
        }
        
    }
    else{
        return res.send({ failed : "invalid body" });
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
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.send(response.data);
    }else{
        return res.send({ error: response});
    }
 }

 const updateLandingPageUser = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await UpdateLandingPageUser(req.body)
        if(response.status === 200){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.send({ success: response.message});
        }
        else{
            return res.send({ error: response});
        }
        
    }
    else{
        return res.send({ failed : "invalid body" });
    }
 }

 const updateLandingPageAdmin = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await UpdateLandingPageAdmin(req.body)
        if(response.status === 200){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.send({ success: response.message});
        }
        else{
            return res.send({ error: response});
        }
        
    }
    else{
        return res.send({ failed : "invalid body" });
    }
 }

 const deleteLandingPage = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await DeleteLandingPage(req.body)
        if(response.status === 200){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.send({ success: response.message});
        }
        else{
            return res.send({ error: response});
        }
        
    }
    else{
        return res.send({ failed : "invalid body" });
    }
 }
 


module.exports = {
    loginUser,
    postLandingPage,
    getLandingPage,
    updateLandingPageUser,
    updateLandingPageAdmin,
    deleteLandingPage
};