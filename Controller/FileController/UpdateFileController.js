
//============================================Admin to Update all User info===============================
const fsPromises = require('fs').promises;
const path = require('path')


const LessonFileDB = { 
    Lesson: require('../../Models/LessonFile.json'),
    setLesson: function(data){this.Lesson = data}
}

//=====================================================================================================================================
//creating "UpdateFileimage.pngController"" function variable to be asynchrnous (req, res)
const UpdateFileController = async(req, res) =>{
    
    //Creating a variable Profs with a function to find for professors ID
    const Lessons = LessonFileDB.Lesson.find( Lesson => Lesson.id === parseInt(req.body.id));

    //if Profs not found
    if(!Lessons){
        
        //send status 400 error and send message 
        return res.status(400).json({"message":`Lesson ID ${req.body.id} not found`});
    }
    //====================================================================================================
    //request input for data below to change and to be updated
    if (req.body.GradingPeriod) Lessons.GradingPeriod = req.body.GradingPeriod;
    if (req.body.Week) Lessons.Week = req.body.Week;
    if (req.body.NoOfHours) Lessons.Week = req.body.NoOfHours;
    if (req.body.Laboratory) Lessons.Laboratory = req.body.Laboratory;
    if (req.body.Lecture) Lessons.Lecture = req.body.Lecture;
    if (req.body.Title) Lessons.LessonInfo.Title = req.body.Title;
    if (req.body.IntendedLearningOutcomes) Lessons.LessonInfo.InstructionalMaterials = req.body.IntendedLearningOutcomes;
    if (req.body.Topics) Lessons.LessonInfo.Topics = req.body.Topics;
    if (req.body.TeachingandLearningActivities) Lessons.LessonInfo.TLAandATs.TLA.TeachingandLearningActivities = req.body.TeachingandLearningActivities;
    if (req.body.AssessementTasks) Lessons.LessonInfo.TLAandATs.ATs.AssessementTasks = req.body.AssessementTasks;
    if (req.body.InstructionalMaterials) Lessons.LessonInfo.InstructionalMaterials = req.body.InstructionalMaterials;
    if (req.body.Remarks) Lessons.Remarks = req.body.Remarks;
    if (req.body.Comment) Lessons.Comment = req.body.Comment;

    //====================================================================================================
    //create function named filteredArray to callout prof database prof and filter prof ID and set to Interger
    const filteredArray = LessonFileDB.Lesson.filter(Lessons => Lessons.id !== parseInt(req.body.id));

    //Construct UnsortedArray 
    const unsortedArray = [...filteredArray, LessonFileDB.Lesson];

  LessonFileDB.setLesson(unsortedArray.sort((a, b) => a.id > b.id ? 1 :a.id < b.id ? -1 : 0 ));
    res.json(LessonFileDB.Lesson);
    fsPromises.writeFile(path.join(__dirname, '..','..','Models','LessonFile.json'), JSON.stringify(LessonFileDB.Lesson)); 

}

module.exports = {UpdateFileController}


