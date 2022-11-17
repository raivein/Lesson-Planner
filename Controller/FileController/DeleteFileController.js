
const fsPromises = require('fs').promises;
const bcrypt = require('bcrypt');
const path = require('path');
const JWT = require('jsonwebtoken');

const LessonDB ={
    Lessons: require('../../Models/LessonFile.json'),
    setLesson: function(data){this.Lessons = data}
}

const DeleteFileController = async(req, res) =>{

    const {id} = req.body;
    if(!id)
        return res.status(400).json({'message': 'ID is required'});

    const foundLesson = LessonDB.Lessons.find((u) => u.id == id );
    if(!foundLesson){
        return res.status(401).json({'message':'this lesson does not exist'})
    }else{
        try{
            const match = await bcrypt.compare(Password, foundProf.Password);

        } catch(err){

        }
    }
    

}
module.exports = {DeleteFileController}