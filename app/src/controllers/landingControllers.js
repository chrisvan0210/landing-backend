const LoginUser = require('../services/login');
const CreateUser = require('../services/users');
const AddLandingPage = require('../services/create-landing');
const GetLandingPage = require('../services/read-landing');
const UpdateEachColumn = require('../services/update-each-column');
const UpdateAllColumns = require('../services/update-all-column');
const DeleteLandingPage = require('../services/delete-landing');



const loginUser = async (req,res) =>{
 
    if(req.body && req.body.username && req.body.password){
        const response =  await LoginUser(req.body);
        if(response){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(200).send(response);
        }
        else{
            return res.status(403).send({ error: "Server error"})
        }
    }
    else{
        return res.status(302).send({ failed : "invalid body" });
    }
}
const createUser = async (req,res) =>{
 
    if(req.body && req.body.username && req.body.password){
        const response =  await CreateUser();
        if(response){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(200).send(response);
        }
        else{
            return res.status(403).send({ error: "Server error"})
        }
    }
    else{
        return res.status(302).send({ failed : "invalid body" });
    }
}


const postLandingPage = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await AddLandingPage(req.body)
        if(response){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(200).send(response);
        }
        else{
            return res.status(403).send({ error: "Server error"});
        }
    }
    else{
        return res.status(302).send({ failed : "invalid body" });
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
    if(response){
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(200).send(response);
    }else{
        return res.status(403).send({ error: response});
    }
 }

 const updateEachColumn = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await UpdateEachColumn(req.body)
        if(response){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(200).send(response);
        }
        else{
            return res.status(403).send({ error: "Server error"});
        }
    }
    else{
        return res.status(302).send({ failed : "invalid body" });
    }
 }

 const updateAllColumns = async (req,res) =>{
    if(req.body && req.body.length !== 0){
        const response =  await UpdateAllColumns(req.body)
        if(response){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(200).send({ message : "Update landing page Successfully!"});
        }
        else{
            return res.status(403).send({ error: "Server error" });
        }
    }
    else{
        return res.status(302).send({ failed : "invalid body" });
    }
 }

 const deleteLandingPage = async (req,res) =>{
    if(req.body && req.body.id){
        const response =  await DeleteLandingPage(req.body)
        if(response){
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(200).send({ message : "Delete LandingPage Successfully!"});
        }
        else{
            return res.status(302).send({ error: "invalid id"});
        }
        
    }
    else{
        return res.send({ failed : "invalid body" });
    }
 }
 


module.exports = {
    loginUser,
    createUser,
    postLandingPage,
    getLandingPage,
    updateEachColumn,
    updateAllColumns,
    deleteLandingPage
};