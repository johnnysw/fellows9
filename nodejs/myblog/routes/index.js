var express = require('express');
var user = require('../controllers/user');
var router = express.Router();


router.get('/login', user.login);
router.get('/reg', user.reg);
router.post('/checkLogin', user.checkLogin);



module.exports = router;
