var blogModel = require('../models/blogModel');

exports.index = function (req, res) {
    res.render('adminIndex', {user: req.session.loginUser});
};

exports.blogType = function (req, res) {
    var user = req.session.loginUser;
    blogModel.queryAllTypes(user.user_id, function (result) {
        res.render('blogType', {
            user: req.session.loginUser,
            types: result
        });
    });

};
exports.addBlogType = function (req, res) {
    var typeName = req.body.typeName;

    var user = req.session.loginUser;

    blogModel.saveType(typeName, user.user_id, function (result) {
        if (result.affectedRows > 0) {
            res.redirect('/blogType');
        } else {
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
        });
    });

};
exports.listBlog = function (req, res) {
    var user = req.session.loginUser;
    blogModel.queryBlogs(user.user_id, function (result) {
        res.render('blogs', {
            user: req.session.loginUser,
            blogs: result
        });
    });
};

exports.addBlog = function (req, res) {
  var title = req.body.title;
  var content = req.body.content;
  var typeId = req.body.typeId;
  var user = req.session.loginUser;

  blogModel.saveBlog(title, content, typeId, user.user_id, function (result) {
      if(result.affectedRows > 0){
          res.redirect('/blogs');
      }else{
          res.redirect('/newBlog');
      }
  });
};

exports.delBlog = function (req, res) {
    var blogIds = req.query.blogIds;//"2,6"

    blogModel.deleteBlog(blogIds, function (result) {
        if(result.affectedRows > 0){
            res.send('success');
        }else{
            res.send('fail');
        }
    });
};