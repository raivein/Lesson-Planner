//Professors Data

const fsPromises = require('fs').promises;

const bcrypt = require('bcrypt');

const path = require('path');

//Setting variable "ProfDB" as function variable for calling user.json data
const ProfDB ={
    
    //users variable importing "File of User data .json"
    Prof: require('../Models/Professor.json'),

    //setUsers call data from folder name this.users
    setProf: function(data){this.Prof = data}
}

//creating "HnadleRegistrationControll" function variable to be asynchrnous (req, res)
const HandleRegistrationController = async(req, res) =>{

    //=================================================================================================================================
    //importing JSON data Username and Password request.body
    const {Username, Password, Firstname, Lastname} = req.body;

    //Check if input credentials of user is complete
    if(!Username || !Password) return res.status(400).json({message:"Username and Password are required."});
    //=================================================================================================================================

    //=================================================================================================================================
    //Check if the professor exist
    const foundProf = ProfDB.Prof.find((u) => u.Username == Username);

    //Function Foundprof used and if true responde with error 400 and message " User (Example) Already EXIST" 
    if(foundProf) return res.status(400).json({message: `This User ${Username} Already Exist!`});
    //=================================================================================================================================

    

  

   

    //=================================================================================================================================
   
    //to catch error so that the whole code or system will not stop.
    try{
        //=================================================================================================================================
        
        const hashedPassword = await bcrypt.hash(Password, 10);
        //Store ti
        //if not in ProfDB ask user to Register
        //create format of input Username(Left) as Directory, Username(Right) to go to that json title as inputs.
        const newProf = {
         id:ProfDB.Prof[ProfDB.Prof.length-1].id+1 ,
            Username: Username,
            Password: hashedPassword,
            Firstname: Firstname,
            Lastname: Lastname
    };
        //calling out variable object variable DB. to overwrite what is inside the ProfDB.Prof, to add the newProf
        ProfDB.setProf([...ProfDB.Prof, newProf]);
        //=================================================================================================================================
        await fsPromises.writeFile(path.join(__dirname, '..','Models','Professor.json'), JSON.stringify(ProfDB.Prof));
        res.json({message: "You are now registered"}); 




    } catch(err){
        console.error(err)
        res.sendstatus(500).json({'Error':err.message});
       
    }
    
}

module.exports = {HandleRegistrationController}