//require == import if python

//call back variable set to express to import express
const express = require('express');

//call back variable app to call all imported function of express()
const app = express(); 
 
//pag import ng dotenv "local environment sa file" para makuha yung environment variables
//require(`dotenv`).config();

//importing JWT to encrypt password Json Web Token
//const {verifyJWT} = require

//para masave yung refresh token
//const cookieParser = require('cookie-parser');

//Setting "usersDB" as function variable for calling user.json data
const userDB ={
    //users variable importing "File of User data .json"
    Professor : require('./Models/Professor.json'),
    //setUsers call data from folder name this.users
    setUsers: function(data){this.Professor = data}
}


//set variable of enviornment port to (PORT) and environment (PORT) set to localhost 5050
const PORT = process.env.PORT || 5050;

const path = require('path')

//parse Forms
app.use(express.urlencoded({extended: false}));

//Parse JSON
app.use(express.json());

//
app.use(express.static(path.join(__dirname,'Public')));

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname,'Views','login.html'))
})

//function app para kunin yung nasa loob ng curly, (/) meaning neto root, (Request,Response)
app.get('/api/data/Professor$', (req,res) =>{
    //response.status ng 
    res.status(200).json(userDB.Professor);
    //response.send para iprint ito sa HTML or LOCALHOST
    //res.send(`<h1> HELLO NIGGA </h1>`)
});

//User calling function "app.listen" to listen and call out "PORT", (5050) and do the stuffs under 
app.listen(PORT, () => {
    console.log(`=======================================`);
    //to print terminal on where the user listen to the port{Number}
    console.log(`        LISTENING TO PORT ${PORT}`);
    console.log('=======================================\n');
    //design lang ito
    console.log('    ʕ•́ᴥ•̀ʔっ  ┻━┻ ︵ヽ(`▭´)ﾉ︵﻿ ┻━┻   \n');
    console.log('=======================================');
    //To print localhost root url
    console.log(`http://localhost:${PORT}/\t <== ROOT URL`);
    console.log(`=======================================`);
})






//MVC
//MODEL VIEW CONTROLLER
//MODEL JSON HTML CSS YUNG NAKIKITA USER OR INPUTS
//VIEW  UNG NAKIKITA HTML CSS
//CONTROLLER DATA FLOW, INformation login page 
//ROUTE .get(./registerlogin)
//app.use()