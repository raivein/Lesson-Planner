//=========================================RoutesCreateFileController.js=======================

const express = require('express');

const router = express.Router();

const {verifyJWT} = require('../../Middleware/verifyJWT');

const VerifyRoles = require('../../Middleware/VerifyRoles');

//==================================================================================

//==================================================================================

const {CreateFileController} = require('../../Controller/FileController/CreateFileController');
const ROLES_LIST = require('../../config/Roles_List');

router.route('/')
    .post(verifyJWT,VerifyRoles(ROLES_LIST.Professor),CreateFileController)

module.exports = router;

