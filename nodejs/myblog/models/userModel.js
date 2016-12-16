var db = require('./db');

exports.queryByNameAndPwd = function (username, password, callback) {
    var sql = "select * from t_user where username='"+username+"' and password='"+password+"'";
    db.query(sql, callback);
};