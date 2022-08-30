const express = require("express");
const router = express.Router();
const getConnection = require("../utils/db_connection");
const store = require('store2');

// Get all favorites
router.get("/favorites", (req, res, next) => {
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
        SELECT users.first_name, users.last_name, posts.user_id as user_post_id, posts.image, posts.title, posts.description, provinces.province_id, provinces.name as province_name,
        provinces.latitude, provinces.longitute, catrgories.category_id, categories.name 
        FROM favorites 
        JOIN users ON users.user_id = favortes.user_id
        JOIN posts ON posts.post_id = favortes.post_id
        JOIN provinces ON provinces.province_id = favortes.province_id
        JOIN categories ON categories.category_id = favortes.category_id
        WHERE favorites.user_id = ${data[0].user_id}`;
        
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) { 
        let resObj = {
          favorites: results
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

// Insert favorites
router.post("/favorites", (req, res, next) => {
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
        INSERT INTO favorites (user_id, post_id, created_by, date_created, updated_by, date_updated)
        VALUES ('${data[0].user_id}', '${req.body.post_id}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')`;
        
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) { 
        message.message = "Record Inserted!";
        if (err) throw err;
        con.release();
        res.json({message});
      });
    });
  }
});

// Delete favorites
router.delete("/favorites", (req, res, next) => {
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
        DELETE FROM favorites WHERE favorite_id = '${req.body.id}' AND user_id = '${data[0].user_id}'`;
        
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) { 
        message.message = "Record Deleted!";
        if (err) throw err;
        con.release();
        res.json({message});
      });
    });
  }
});