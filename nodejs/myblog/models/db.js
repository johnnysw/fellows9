var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myblog4'
});

exports.query = function (sql, callback) {
    connection.connect();
    connection.query(sql, function(err, rows) {
        if (err) throw err;
        callback(rows);
        connection.end();
    });
};