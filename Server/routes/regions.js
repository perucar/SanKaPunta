const express = require("express");
const router = express.Router();
const getConnection = require("../utils/db_connection");

router.get("/regions", (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `SELECT * FROM regions`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, results) { 
      let resObj = {
        regions: results
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
});

// Get Region By ID
router.get("/regions/:id", (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `SELECT * FROM regions WHERE region_id =  ${req.params.id}`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, results) {
      let resObj = {
        region: results
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

// Get All Provinces in each Region By ID
router.get("/regions/:id/provinces", (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `SELECT * FROM provinces WHERE region_id =  ${req.params.id}`;
    if (err) {
      console.log(err);
      message.message = err;
    }
    con.query(query, function (err, results) {
      let resObj = {
        region: results
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

// Insert Region
router.post("/regions", (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `
            INSERT INTO regions (name, created_by, date_created, updated_by, date_updated)
            VALUES ('${req.body.name}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')`;
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
});

// Update Region
router.put("/regions", (req, res) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `
            UPDATE regions SET name = '${req.body.name}', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
            WHERE region_id = ${req.body.id}`;
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

// Delete Region
router.delete("/regions/:id", (req, res, next) => {
  let message = {
    status: "200",
    message: "",
  };
  getConnection(function (err, con) {
    const query = `DELETE FROM regions WHERE region_id = ${req.params.id} `;
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
