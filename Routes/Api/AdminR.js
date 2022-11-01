
//==========================================RoutesAdminR.js===========================

const express = require('express');
const router = express.Router();
//const path = require('path');

const verifyJWT = require('../../Middleware/verifyJWT');



const {GetController} = require('../../Controller/GetController');

const {UpdateController} = require('../../Controller/UpdateController');

router.route('/get')

    .get(GetController)

router.route('/update')
    .put(UpdateController)


    // .put((req,res) => {
    //     res.json({
    //         "Firstname": req.body.Firstname,
    //         "Lastname": req.body.Lastname
    //     });
    // })

    // .delete((req, res) => {
    //     res.json({"id": req.body.id})
    // });

module.exports = router;