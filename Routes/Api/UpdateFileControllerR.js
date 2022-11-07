//=========================================RoutesUpdateFileController.js=======================

const express = require('express');

const router = express.Router();

const {verifyJWT} = require('../../Middleware/verifyJWT');

const VerifyRoles = require('../../Middleware/VerifyRoles');

//==================================================================================

//==================================================================================

const {UpdateFileController} = require('../../Controller/FileController/UpdateFileController');
const ROLES_LIST = require('../../config/Roles_List');

router.route('/')
    .put(UpdateFileController) //verifyJWT,VerifyRoles(ROLES_LIST.Professor),
    
module.exports = router;