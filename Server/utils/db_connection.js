const mysql = require('mysql');

const con = mysql.createPool({
    connectionLimit: 100,
    host: "10.242.94.151:3306",
    user: "root",
    password: "password123",
    database: "skpdb"
});
  
const getConnection = function(callback) {
    con.getConnection(function(err, conn) {
      if(err) {
        return callback(err);
      }
      console.log('connected to database');
      callback(err, conn);
    });
};

module.exports = getConnection;