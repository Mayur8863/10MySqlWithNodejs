const {PrDetailsFindAll,PrDetailsSave} = require("../models/userPostModel");

const userGetAllControllers = async (req,res) =>{
        const [find,_] = await PrDetailsFindAll();
        res.send(find);
};

const userpostControllers = async (req,res) =>{
        let [user,_] = await PrDetailsSave(req.body.name,req.body.phoneNo,req.body.email);
        res.send(user);
};




module.exports = {
    userGetAllControllers : userGetAllControllers,
    userpostControllers : userpostControllers
}