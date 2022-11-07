
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
    const FoundLesson = LessonFileDB.Lesson.find( Lesson => Lesson.id === parseInt(req.body.id));

    //if Profs not found
    if(!FoundLesson){
        
        //send status 400 error and send message 
        return res.status(400).json({"message":`Lesson ID ${req.body.id} not found`});
    }
    //====================================================================================================
    //request input for data below to change and to be updated
    if (req.body.GradingPeriod) FoundLesson.GradingPeriod = req.body.GradingPeriod;
    if (req.body.Week) FoundLesson.Week = req.body.Week;
    if (req.body.NoOfHours) FoundLesson.Week = req.body.NoOfHours;
    if (req.body.Laboratory) FoundLesson.Laboratory = req.body.Laboratory;
    if (req.body.Lecture) FoundLesson.Lecture = req.body.Lecture;
    if (req.body.Title) FoundLesson.LessonInfo.Title = req.body.Title;
    if (req.body.IntendedLearningOutcomes) FoundLesson.LessonInfo.InstructionalMaterials = req.body.IntendedLearningOutcomes;
    if (req.body.Topics) FoundLesson.LessonInfo.Topics = req.body.Topics;
    if (req.body.TeachingandLearningActivities) FoundLesson.LessonInfo.TLAandATs.TLA.TeachingandLearningActivities = req.body.TeachingandLearningActivities;
    if (req.body.AssessementTasks) FoundLesson.LessonInfo.TLAandATs.ATs.AssessementTasks = req.body.AssessementTasks;
    if (req.body.InstructionalMaterials) FoundLesson.LessonInfo.InstructionalMaterials = req.body.InstructionalMaterials;
    if (req.body.Remarks) FoundLesson.Remarks = req.body.Remarks;
    if (req.body.Comment) FoundLesson.Comment = req.body.Comment;

    //====================================================================================================
    //create function named filteredArray to callout prof database prof and filter prof ID and set to Interger
    const filteredArray = LessonFileDB.Lesson.filter(Lessons => Lessons.id !== parseInt(req.body.id));

    //Construct UnsortedArray 
    const unsortedArray = [...filteredArray, FoundLesson ];

  LessonFileDB.setLesson(unsortedArray.sort((a, b) => a.id > b.id ? 1 :a.id < b.id ? -1 : 0 ));
    res.json(LessonFileDB.Lesson);
    fsPromises.writeFile(path.join(__dirname, '..','..','Models','LessonFile.json'), JSON.stringify(LessonFileDB.Lesson)); 

}

module.exports = {UpdateFileController}


