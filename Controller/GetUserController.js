
//===================================code for Getting the list of users controls============================================\
//creating an object variable named data to import professor or user data
const data = {};

//calling json file
data.Professor = require('../Models/Professor.json');

//creating function to response all professor or user data.
const GetUserController = async(req,res) => {
    res.json(data.Professor);
}
module.exports = {GetUserController}
