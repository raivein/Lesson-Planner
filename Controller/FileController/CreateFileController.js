//========================================================CreateFileController================================

const fsPromises = require('fs').promises;
const path = require('path')

const LessonFileDB = { 
    Lesson: require('../../Models/LessonFile.json'),
    setLesson: function(data){this.Lesson = data}
}

const CreateFileController= (req, res) => {
    
        //if information is missing ask user to fill up all the missing information.
    if (!req.body.GradingPeriod || !req.body.Week || !req.body.NoOfHours || !req.body.Laboratory || !req.body.Lecture ||
        !req.body.LessonInfo.Title || !req.body.LessonInfo.IntendedLearningOutcomes || !req.body.LessonInfo.Topics || 
        !req.body.LessonInfo.TLAandATs.TLA.TeachingandLearningActivities || !req.body.LessonInfo.TLAandATs.ATs.AssessementTasks ||
        !req.body.LessonInfo.InstructionalMaterials ){
            return res.status(400).json({'message': 'Please fill up the required information.'});
        }

    const NewLesson = {
        id : LessonFileDB.Lesson?.length ? LessonFileDB.Lesson[LessonFileDB.Lesson.length - 1].id + 1 : 1,
        "GradingPeriod": req.body.GradingPeriod,
        "Week": req.body.Week,
        "NoOfHours": req.body.NoOfHours,
        "Laboratory": req.body.Laboratory,
        "Lecture": req.body.Lecture,
        "LessonInfo":{
            "Title": req.body.LessonInfo.Title,
            "IntendedLearningOutcomes":req.body.LessonInfo.IntendedLearningOutcomes,
            "Topics": req.body.LessonInfo.Topics,
            "TLAandATs":{
                "TLA":{
                    "TeachingandLearningActivities": req.body.LessonInfo.TLAandATs.TLA.TeachingandLearningActivities
                },
                "ATs":{
                    "AssessementTasks": req.body.LessonInfo.TLAandATs.ATs.AssessementTasks
                },
            },
            "InstructionalMaterials":req.body.LessonInfo.InstructionalMaterials,
        },
        "Remarks":{"Not_Yet_Reviewed":000},
        "Comment":req.body.Comment
    }

    LessonFileDB.setLesson([...LessonFileDB.Lesson, NewLesson]);
    res.json(LessonFileDB.Lesson);
    fsPromises.writeFile(path.join(__dirname, '..','..','Models','LessonFile.json'), JSON.stringify(LessonFileDB.Lesson));
}
module.exports = {CreateFileController}