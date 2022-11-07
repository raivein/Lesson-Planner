
//============================================Admin to Update all User info===============================
const fsPromises = require('fs').promises;
const path = require('path')
//Importing ProfDatabase
const ProfDB = {
    Prof: require('../Models/Professor.json'),
    setProf: function(data){this.Prof = data}
}

//=====================================================================================================================================
//creating "UpdateProfessorController"" function variable to be asynchrnous (req, res)
const UpdateUserController = async(req, res) =>{
    
    //Creating a variable Profs with a function to find for professors ID
    const FoundProf = ProfDB.Prof.find( Prof => Prof.id === parseInt(req.body.id));

    //if Profs not found
    if(!FoundProf){
        
        //send status 400 error and send message 
        return res.status(400).json({"message":`Professor ID ${req.body.id} not found`});
    }
    //====================================================================================================
    //request input for data below to change and to be updated
    if (req.body.Firstname) FoundProf.Firstname = req.body.Firstname;
    if (req.body.Lastname) FoundProf.Lastname = req.body.Lastname;
    if (req.body.Roles) FoundProf.Roles = req.body.Roles;
    if (req.body.Password) FoundProf.Password = req.body.Password
    //====================================================================================================
    //create function named filteredArray to callout prof database prof and filter prof ID and set to Interger
    const filteredArray = ProfDB.Prof.filter(Profs => Profs.id !== FoundProf.id);

    //Construct UnsortedArray 
    const unsortedArray = [...filteredArray, FoundProf];

    ProfDB.setProf(unsortedArray.sort((a, b) => a.id > b.id ? 1 :a.id < b.id ? -1 : 0 ));

    
    await fsPromises.writeFile(path.join(__dirname,'..','Models','Professor.json'), JSON.stringify(ProfDB.Prof)); 

    res.json(ProfDB.Prof);
}

module.exports = {UpdateUserController}


