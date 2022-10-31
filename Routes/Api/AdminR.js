const express = require('express');
const router = express.Router();
//const path = require('path');
const data = {};

//const ProfessorController = require('../../Controller/ProfessorController');

//calling json file
data.Professor = require('../../Models/Professor.json');

const verifyJWT = require('../../Middleware/verifyJWT');

router.route('/')

    .get((req, res) => {
        res.json(data.Professor);
    })

    .post((req, res) => {
        req.json({
            "Firstname": req.body.Firstname,
            "Lastname": req.body.Lastname
        });
    })

    .put((req,res) => {
        res.json({
            "Firstname": req.body.Firstname,
            "Lastname": req.body.Lastname
        });
    })

    .delete((req, res) => {
        res.json({"id": req.body.id})
    });

router.route('/:id')
    .get((req,res) => {
        res.json({"id": req.params.id});
    });


module.exports = router;