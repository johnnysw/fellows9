var express = require('express');
var router = express.Router();
var welcome = require('../controllers/welcome');
var user = require('../controllers/user');
var blog = require('../controllers/blog');

router.get('/', welcome.index);
router.get('/login', user.login);
router.get('/reg', user.reg);
router.post('/checkLogin', user.checkLogin);
router.post('/regist', user.regist);

router.get('/viewPost', blog.viewPost);


module.exports = router;
