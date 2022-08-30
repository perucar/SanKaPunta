const express = require("express");
const router = express.Router();
const getConnection = require("../utils/db_connection");
const store = require('store2');

// Get all friends
router.get("/friends", (req, res, next) => {
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
        SELECT users.first_name as first_name, users.last_name as last_name, users.birth_date as birth_date, users.information as information, friends.friends_id as friends_id, friends.friend_user_id as friend_user_id 
        FROM friends JOIN users ON friends.friend_user_id = users.user_id WHERE friends.user_id = ${data[0].user_id} AND is_accepted = 1`;
        
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) { 
        let resObj = {
          friends: results
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

// Insert friends
router.post("/friends", (req, res, next) => {
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
          INSERT INTO friends (user_id, friend_user_id, is_accepted, created_by, date_created, updated_by, date_updated)
          VALUES ('${data[0].user_id}', '${req.body.friend_user_id}', '0', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')`;
        if (err) {
          console.log(err);
          message.message = err;
        }
        con.query(query, function (err, result) {
          message.message = "Record Inserted!";
          if (err) throw err;
          con.release();
          res.json(message);
        });
      });
  }
});

// Update friend
router.put("/friends/accept", (req, res) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `
            UPDATE friends SET is_accepted = '1', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
            WHERE friend_user_id = ${req.body.friend_user_id}`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, result) {
      message.message = "Record Updated!";
      if (err) throw err;
      con.release();
      res.json(message);
    });
  });
});

// Delete friend
router.delete("/friends/:id", (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `DELETE FROM friends WHERE friend_user_id = ${req.params.id} `;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, result) {
        message.message = "Record Deleted!";
        if (err) throw err;
        con.release();
        res.json(message);
    });
  });
});

module.exports = router;
