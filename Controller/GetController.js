
//===================================code for admin controls============================================

const data = {};

//calling json file
data.Professor = require('../Models/Professor.json');


const GetController = async(req,res) => {
    res.json(data.Professor);
}
module.exports = {GetController}
