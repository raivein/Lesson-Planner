//==========================================RoutesAdminR.js===================================
//create callback variable to import express
const express = require('express');

//Create callback variable to import function library express.Router
const router = express.Router();

//Creating object variable to import middleware verifyJWT
const {verifyJWT} = require('../../Middleware/verifyJWT')

//Creating callback variable to import config RolesList
const ROLES_LIST = require('../../config/Roles_List');

//Creating callback variable to import VerifyRoles
const VerifyRoles = require('../../Middleware/VerifyRoles');


const {DeleteFileController} = require('../../Controller/FileController/DeleteFileController');
router.route('/')
    //.delete function(VerifyingJWT and Roles set to admin in order to update user)
    .delete(verifyJWT,VerifyRoles(ROLES_LIST.Professor),DeleteFileController)

module.exports = DeleteFileController;