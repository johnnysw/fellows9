var express = require('express');
var router = express.Router();
var welcome = require('../controllers/welcome');
var user = require('../controllers/user');
var blog = require('../controllers/blog');
var admin = require('../controllers/admin');

router.get('/', welcome.index);
router.get('/login', user.login);
router.get('/logout', user.logout);
router.get('/reg', user.reg);
router.post('/checkLogin', user.checkLogin);
router.post('/regist', user.regist);
router.get('/adminIndex', admin.index);
router.get('/blogType', admin.blogType);
router.post('/addBlogType', admin.addBlogType);
router.get('/newBlog', admin.newBlog);
router.get('/blogs', admin.listBlog);
router.post('/addBlog', admin.addBlog);
router.get('/delBlog', admin.delBlog);

router.get('/viewPost', blog.viewPost);


module.exports = router;
