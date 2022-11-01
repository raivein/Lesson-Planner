//Use function router to import express and function Router
const router = require('express').Router();

const {HandleDeleteProfessorController} = require('../Controller/DeleteProfessorController.js');

//Using function router to use route library to directory root "(/)"
router.route('/')
    //para makapag post at gamitin si HandleRegistrationController sa Controller Folder
    .delete(HandleDeleteProfessorController)


//Export as objects lahat ng laman neto kase JSON file yung tinatawag neto "Line 7"
module.exports = router;