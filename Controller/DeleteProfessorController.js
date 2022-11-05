//================================Admin delete users==========================================

const fsPromises = require('fs').promises;


const path = require('path');

//Setting variable "ProfDB" as function variable for calling user.json data
const ProfDB ={
    
    //users variable importing "File of User data .json"
    Prof: require('../Models/Professor.json'),

    //setUsers call data from folder name this.users
    setProf: function(data){this.Prof = data}
}
//=====================================================================================================================================
//creating "HnadleRegistrationControll" function variable to be asynchrnous (req, res)
const HandleDeleteProfessorController = async(req, res) =>{


//====================================================Version 1========================================================================
//===================================Only The Admin has the rights to delete User======================================================


    //=================================================================================================================================
    //importing JSON data Username and Password request.body
    const {id,Username} = req.body
    
    //Check if input credentials of user is complete
    if(!id || !Username) return res.status(400).json({message:"Username is required."});
    //===================================================================================================================================



    //===================================================================================================================================
    //Check if the professor exist
    const foundProf = ProfDB.Prof.find((u) => u.id == id);

    if(!foundProf)
        return res.status(403).json({message:"This user ID does not exist"})

    //filter the name of the prof in order to isolate
    const filteredProf = ProfDB.Prof.filter((x) => x.id !== foundProf.id);
    //===================================================================================================================================
    


    //===================================================================================================================================
    //calling out variable object variable DB. to overwrite what is inside the ProfDB.Prof, to add the newProf
    ProfDB.setProf(filteredProf);
    //===================================================================================================================================



    //===================================================================================================================================
   
    //to catch error so that the whole code or system will not stop.
    try{

        await fsPromises.writeFile(path.join(__dirname, '..','Models','Professor.json'), JSON.stringify(ProfDB.Prof));
        res.json({message: `Your Username ${Username} is deleted`}); 
    } catch(err){
        console.error(err)
        res.sendstatus(500);
       
    }
//========================================================================================================================================

//================================================================Version 2 ==============================================================
//=======================================Professor Has capabilities to delete its own account=============================================


//     //=================================================================================================================================
//     //importing JSON data Username and Password request.body
//     const cookies = req.cookies;

//     if(!cookies?.jwt) return res.sendStatus(204);
    
//     //Creating function to look for  cookies
//     const refreshToken = cookies.jwt;



//     const foundProfWithToken = ProfDB.Prof.find((u)=> u.refreshToken === refreshToken);
//     //=================================================================================================================================



//     //=================================================================================================================================
//     //filter the name of the prof in order to isolate
//     const filteredProf = ProfDB.Prof.filter((x) => x.id !== foundProfWithToken.id);
//     //=================================================================================================================================
    


//     //=================================================================================================================================
//     //calling out variable object variable DB. to overwrite what is inside the ProfDB.Prof, to add the newProf
//     ProfDB.setProf(filteredProf);
//     //=================================================================================================================================



//     //=================================================================================================================================
   
//     //to catch error so that the whole code or system will not stop.
//     try{
//         await fsPromises.writeFile(path.join(__dirname, '..','Models','Professor.json'), JSON.stringify(ProfDB.Prof));
//         res.clearCookie('jwt',{
//             httpOnly:true,
//             sameSite:'None'
//         })
//         res.json({message: `Your Username ${foundProfWithToken.Username} is deleted`}); 
//     } catch(err){
//         console.error(err)
//         res.sendStatus(500);
       
//     }
    
}
//=====================================================================================================================================
module.exports = {HandleDeleteProfessorController}