const mysql = require("mysql");

const con = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "root",
  port: "3307",
  database: "skpdb",
});

const getConnection = function (callback) {
  con.getConnection(function (err, conn) {
    if (err) {
      return callback(err);
    }
    console.log("connected to database");
    callback(err, conn);
  });
};

module.exports = getConnection;
