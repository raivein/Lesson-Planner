//Use function router to import express and function Router
const router = require('express').Router();

const ROLES_LIST = require('../config/Roles_List.js');

const {HandleDeleteProfessorController} = require('../Controller/DeleteProfessorController.js');

const {verifyJWT} = require('../Middleware/verifyJWT')

const VerifyRoles = require('../Middleware/VerifyRoles');

//Using function router to use route library to directory root "(/)"
router.route('/')
    //para makapag post at gamitin si HandleRegistrationController sa Controller Folder
    .delete(verifyJWT,VerifyRoles(ROLES_LIST.Admin,ROLES_LIST.Professor),HandleDeleteProfessorController)


//Export as objects lahat ng laman neto kase JSON file yung tinatawag neto "Line 7"
module.exports = router;