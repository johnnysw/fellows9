var blogModel = require('../models/blogModel');

exports.index = function (req, res) {
  res.render('adminIndex', {user: req.session.loginUser}) ;
};

exports.blogType = function (req, res) {
    var user = req.session.loginUser;
    blogModel.queryAllTypes(user.user_id, function (result) {
        res.render('blogType', {
            user: req.session.loginUser,
            types: result
        }) ;
    });

};
exports.addBlogType = function (req, res) {
    var typeName = req.body.typeName;

    var user = req.session.loginUser;

    blogModel.saveType(typeName, user.user_id, function (result) {
        if(result.affectedRows > 0){
            res.redirect('/blogType');
        }else{
            res.redirect('/addBlogType');
        }
    });
};

exports.newBlog = function (req, res) {
    var user = req.session.loginUser;
    blogModel.queryAllTypes(user.user_id, function (result) {
        res.render('newBlog', {
            user: req.session.loginUser,
            types: result
        }) ;
    });

};