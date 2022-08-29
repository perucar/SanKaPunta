const express = require('express');
const router = express.Router();
const getConnection = require('../utils/db_connection');

// Get All Provinces by ID
router.get('/provinces', (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    let query = `SELECT * FROM provinces`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, results) {
      let resObj = {
        provinces: results
      }
      if(results.length == 0){
        message.message = "No record exist!";
      } else {
        message.message = "OK!";
        if (err) throw err;
        con.release();
      }
      res.json({...resObj, message});
    });
  });
});

// Get Province by ID
router.get('/provinces/:id', (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `SELECT * FROM provinces WHERE province_id =  ${req.params.id}`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, results) {
      let resObj = {
        province: results
      }
      if(results.length == 0){
        message.message = "Record does not exist!";
      } else {
        message.message = "OK!";
        if (err) throw err;
        con.release();
      }
      res.json({...resObj, message});
    });
  });
});

// Insert Provinces
router.post('/provinces', (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `
      INSERT INTO provinces (name, region_id, latitude, longitude, created_by, date_created, updated_by, date_updated)
      VALUES ('${req.body.name}', '${req.body.region_id}', '${req.body.latitude}', '${req.body.longitude}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, results) {
      if (err) throw err;
      message.message = "Record Inserted!";
      con.release();
      res.json({message});
    });
  });
});

// Update Province
router.put("/provinces", (req, res) => {
  let message = {
    status: "200",
    message: "Record Updated!",
  };
  getConnection(function (err, con) {
    const query = `
      UPDATE provinces SET name = '${req.body.name}', latitude = '${req.body.latitude}', longitude = '${req.body.longitude}', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
      WHERE region_id = ${req.body.id}`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, result) {
      if (err) throw err;
      message.message = "Record Updated!";
      con.release();
      res.json(message);
    });
  });
});

// Delete Province
router.delete("/provinces/:id", (req, res, next) => {
  let message = {
    status: "200",
    message: "",
};
  getConnection(function (err, con) {
    const query = `DELETE FROM provinces WHERE provinces_id = ${req.params.id} `;
    if (err) {
      console.log(err);
      message.message = err;
    }

    con.query(query, function (err, result) {
      if (err) throw err;
      message.message = "Record Deleted!";
      con.release();
      res.json(message);
    });
  });
});

module.exports = router;
