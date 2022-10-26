const JWT = require('jsonwebtoken');

const ProfDB ={
    
    //users variable importing "File of User data .json"
    Prof: require('../Models/Professor.json'),

    //setUsers call data from folder name this.users
    setProf: function(data){this.Prof = data}
}

const HandleRefreshToken = (req, res) => {
    
    const cookies = req.cookies;

    if(!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;

    //console.log(refreshToken)

    const foundProf = ProfDB.Prof.find((u) => u.refreshToken == refreshToken );

    //console.log(foundProf)

    if(!foundProf) return res.sendStatus(403);
    

    JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,{
        algorithm: "HS256"


    },(err, decoded) => {

        if(err || foundProf.Username !== decoded.Username) return res.sendStatus(403);

        const payload = {
            Username: decoded.Username
        };
        const accessToken = JWT.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
            algorithm: "HS256",
            expiresIn: "30s"
        });

        res.status(200).json({accessToken: accessToken});
    })
}

module.exports = {HandleRefreshToken}