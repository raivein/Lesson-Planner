const fsPromises = require('fs').promises;



const ProfDB = {
    Prof: require('../Models/Professor.json'),
    setProf: function(data){this.Prof = data}
}

//=====================================================================================================================================
//creating "HnadleRegistrationControll" function variable to be asynchrnous (req, res)
const UpdateProfessorController = async(req, res) =>{
    
    const Profs = ProfDB.Prof.find( Prof => Prof.id === parseInt(req.body.id));


    if(!Profs){
        return res.status(400).json({"message":`Professor ID ${req.body.id} not found`});
    }
    if (req.body.Firstname) Profs.Firstname = req.body.Firstname;
    if (req.body.Lastname) Profs.Lastname = req.body.Lastname;
    if (req.body.Roles) Profs.Roles = req.body.Roles;
    if (req.body.Password) Profs.Password = req.body.Password

    const filteredArray = ProfDB.Prof.filter(Profs => Profs.id !== parseInt(req.body.id));

    const unsortedArray = [...filteredArray, Profs];

  ProfDB.setProf(unsortedArray.sort((a, b) => a.id > b.id ? 1 :a.id < b.id ? -1 : 0 ));
    res.json(ProfDB.Prof);
}

module.exports = {UpdateProfessorController}


