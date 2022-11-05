const router = require('express').Router();



const {HandleRefreshToken} = require('../Controller/RefreshController.js');

router.route('/')


    .post(HandleRefreshToken);

module.exports = router;