const data = {};

//calling json file
data.Professor = require('../Models/Professor.json');



const UpdateController = async(req,res) => {
    res.json({
        "Username": req.body.Username,
        "Password": req.body.Password
    });
}
module.exports = {UpdateController}


