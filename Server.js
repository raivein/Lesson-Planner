

//=====================================================================================================================
//Imports Start..
//call back variable set to express to import express
const express = require('express');

//call back variable app to call all imported function of express()
const app = express(); 

//importing local environment
require(`dotenv`).config();

//importing JWT to encrypt password Json Web Token
const {verifyJWT} = require('./Middleware/verifyJWT.js');

//Call back variable cookie parser Importing Cookie parser
const cookieParser = require('cookie-parser');

//set variable of function of path importing "path functions"
const path = require('path')

//set variable of enviornment port to (PORT) and environment (PORT) set to localhost 5050
const PORT = process.env.PORT || 5050;
//Imports End ..
//====================================================================================================================

//====================================================================================================================
//App Use Start ..
//parse Forms
app.use(express.urlencoded({extended: false}));

//Parse JSON
app.use(express.json());

//function to use absolute file path
app.use(express.static(path.join(__dirname,'Public')));

//Function to attach cookies to client request object
app.use(cookieParser())

app.use(express.static(path.join(__dirname,'../Aztecbinaynay/Lesson-Planner/build')))
//App use End ..
//====================================================================================================================

//====================================================================================================================
//app use routes
//function app para ilagay ito sa URL"Directory", Calling Routes
app.use('/api/data/register', require('./Routes/RegistrationR.js'));

app.use('/api/data/user',require('./Routes/UserInOutR.js'));

app.use('/api/data/refresh',require('./Routes/RefreshR.js'));

app.use('/admin', require('./Routes/Api/AdminR.js'));

app.use('/api/data/dashboard/create',require('./Routes/Api/CreateFileControllerR'));

app.use('/api/data/dashboard/update',require('./Routes/Api/UpdateFileControllerR'));

app.use('/api/data/dashboard/get',require('./Routes/Api/GetFileControllerR'));

app.use('/api/data/dashboard/delete',require('./Routes/Api/DeleteFileControllerR'));
//app.use('/LoginPage/', require('./Routes/LoginPageR.js'));
//app use routes End ..
//====================================================================================================================

//====================================================================================================================
//app.get to response localhost5050 with this HTML
// app.get('/loginPage', (req,res) => {

//     res.sendFile(path.join(__dirname,'Views','login.html'))
// })



//User calling function "app.listen" to listen and call out "PORT", (5050) and do the stuffs under 
app.listen(PORT, () => {
    console.log(`=======================================`);
    //to print terminal on where the user listen to the port{Number}
    console.log(`        LISTENING TO PORT ${PORT}`);
    console.log('=======================================\n');
    //design lang ito
    console.log('    ????????????????????  ????????? ??????(`?????)????????? ?????????   \n');
    console.log('=======================================');
    //To print localhost root url
    console.log(`http://localhost:${PORT}/\t <== ROOT URL`);
    console.log(`=======================================`);
})
//MVC
//MODEL VIEW CONTROLLER
//MODEL JSON  
//VIEW   HTML CSS
//CONTROLLER DATA FLOW, INformation login page 
//ROUTE .get(./registerlogin)
//app.use()