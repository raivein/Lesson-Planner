
const data = {};

//calling json file
data.Lesson = require('../../Models/LessonFile.json');

//creating function to response all professor or user data.
const GetFileController = async(req,res) => {
    res.json(data.Lesson);
}
module.exports = {GetFileController}