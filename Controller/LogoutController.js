
//=========================================================================================================================================================================
const fsPromises = require('fs').promises;

const path = require('path');

const ProfDB ={
    
    //users variable importing "File of User data .json"
    Prof: require('../Models/Professor.json'),

    //setUsers call data from folder name this.users
    setProf: function(data){this.Prof = data}
}

const HandleLogoutController = async(req, res) =>{

    //creating function to request cookies
    const cookies = req.cookies;

    if(!cookies?.jwt) return res.sendStatus(204);
    
    //Creating function to look for  cookies
    const refreshToken = cookies.jwt;

    //creating function to look for Professor in ProfDB.Prof and find the token
    const foundProfWithToken = ProfDB.Prof.find((u)=> u.refreshToken == refreshToken);

    if(!foundProfWithToken) {
        res.clearCookie('jwt',{
            httpOnly:true,
            sameSite:'None'
        })
        return res.sendStatus(204);
    }

    //Delete refresh token in order to logout and remove access for the user.
    const otherProf = ProfDB.Prof.filter((u) => u.refreshToken !== refreshToken);

    const currentProf = {...foundProfWithToken, refreshToken:''};

    //Calling database ProfDB to setProf and overwrite inside the DB
    ProfDB.setProf([...otherProf, currentProf]);

    await fsPromises.writeFile(
        //'
        path.join(__dirname, '..','Models','Professor.json'),
        JSON.stringify(ProfDB.Prof)
    );

    //Clear cookie to remove access to user

    res.clearCookie('jwt',{
        httpOnly: true,
        sameSite: 'None'
    });

    res.sendStatus(204);
}
//========================================================================================================================================================================
module.exports = {HandleLogoutController}
