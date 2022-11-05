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
//============================================================================================

//============================================================================================
//Creating Object Variable to import GetUserController
const {GetUserController} = require('../../Controller/GetUserController');

//Creating Object Variable to import UpdateUserController
const {UpdateUserController} = require('../../Controller/UpdateUserController');

//Creating Object Variable to import DeleteUserController
const {DeleteUserController} = require('../../Controller/DeleteUserController.js');
//============================================================================================

//============================================================================================
//Creating route url for using GET
router.route('/get')
    //.get function(VerifyingJWT and Roles set to admin in order to get user)
    .get(verifyJWT,VerifyRoles(ROLES_LIST.Admin),GetUserController)

//Creating route url for using UPDATE
router.route('/update')
    //.update function(VerifyingJWT and Roles set to admin in order to update user)
    .put(verifyJWT,VerifyRoles(ROLES_LIST.Admin),UpdateUserController)

//Creating route url for using DELETE
router.route('/delete')
    //.delete function(VerifyingJWT and Roles set to admin in order to update user)
    .delete(verifyJWT,VerifyRoles(ROLES_LIST.Admin,ROLES_LIST.Professor),DeleteUserController)
//=============================================================================================

    // .delete((req, res) => {
    //     res.json({"id": req.body.id})
    // });

module.exports = router;