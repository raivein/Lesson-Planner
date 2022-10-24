//Professors Data
//Setting variable "ProfDB" as function variable for calling user.json data
const ProfDB ={
    
    //users variable importing "File of User data .json"
    Professor: require('../Models/Professor.json'),

    //setUsers call data from folder name this.users
    setUsers: function(data){this.Professor = data}
}

const HandleRegistrationController = (req,res) =>{
    const {Username, Password} = req.body;
    //Check if input credentials of user is complete
    
    if(Username || Password) return res.status(400), json({message:"Username and Password are required."});

    //Check if the professor exist
    const foundProf = ProfDB.Professor.find((u) => u.Username == Username);

    if(foundProf) res.status(400).json({message: "User Already Exist!"});
    //if not in userDB
    
    res.json({message: "Hello World"});
}

module.exports = {HandleRegistrationController}