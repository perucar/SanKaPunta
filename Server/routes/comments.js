const express = require("express");
const router = express.Router();
const getConnection = require("../utils/db_connection");
const store = require('store2');

// Get all comments
router.get("/comments", (req, res, next) => {
  const userToken = store.get('userToken');
  const data = store.get('data');
  let message = {
    status: "200",
    message: "",
  };
  if(userToken == null){
    message.message = 'Not logged in!';
    res.send(message); 
  } else {
    getConnection(function (err, con) {
      const query = `
        SELECT users.first_name as first_name, users.last_name as last_name, post_id, comments.comment 
        FROM comments 
        JOIN users ON users.user_id = comments.user_id
        WHERE user_id = '${data[0].user_id}' AND post_id = ${req.body.post_id}`;
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) { 
        let resObj = {
          comments: results
        }
        if(results.length == 0){
          message.message = "No records exist!";
        } else {
          message.message = "OK!";
          if (err) throw err;
          con.release();
        }
        res.json({...resObj, message});
      });
    });
  }
});

// Insert comment
router.post("/comments", (req, res, next) => {
  const userToken = store.get('userToken');
  const data = store.get('data');
  let message = {
    status: "200",
    message: "",
  };
  if(userToken == null){
    message.message = 'Not logged in!';
    res.send(message); 
  } else {
    getConnection(function (err, con) {
      const query = `
        INSERT INTO comments (user_id, post_id, comment, created_by, date_created, updated_by, date_updated)
        VALUES ('${data[0].user_id}', '${req.body.post_id}', '${req.body.comment}', '${data[0].first_name} ${data[0].last_name}', '${req.body.date_created}', '${data[0].first_name} ${data[0].last_name}', '${req.body.dateUpdated}');
        `;
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) { 
        message.message = "OK!";
        if (err) throw err;
        con.release();
        res.json({...resObj, message});
      });
    });
  }
});


module.exports = router;