const express = require("express");
const router = express.Router();
const getConnection = require("../utils/db_connection");

const dbFunction = (query) => {
  let result = [];
  getConnection(async function (err, con) {
    if (err) {
      console.log(err);
    }
    await con.query(query, function (err, regions) {
      result = Object.values(JSON.parse(JSON.stringify(regions)));
      //console.log(result);
      con.release();
      return result;
    });
  });
  //console.log(result);
  return result;
};

router.get("/regions", (req, res, next) => {
  let query = `SELECT * FROM regions`;

  getConnection(async function (err, con) {
    if (err) {
      console.log(err);
    }
    await con.query(query, function (err, results) {
      let message = {
        status: "200",
        message: "OK!",
      };
      con.release();
      res.json({...results, message});
    });
  });
});

// Get Region By ID
router.get("/regions/:id", (req, res, next) => {
  let query = `SELECT * FROM regions WHERE region_id =  ${req.params.id}`;
  getConnection(function (err, con) {
    if (err) {
      console.log(err);
    }
    con.query(query, function (err, results) {
      let message = {
        status: "200",
        message: "OK!",
      };
      con.release();
      res.json({...results, message});
    });
  });
});

// Insert Region
router.post("/regions", (req, res, next) => {
  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `
            INSERT INTO regions (name, created_by, date_created, updated_by, date_updated)
            VALUES ('${req.body.name}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')
    `;
    console.log(query);
    con.query(query, function (err, result) {
        let message = {
            status: "200",
            message: "Record Inserted!",
        };
        if (err) throw err;
        con.release();
        res.send(message);
    });
  });
});

// Update Region
router.put("/regions", (req, res) => {
  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `
            UPDATE regions SET name = '${req.body.name}', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
            WHERE region_id = ${req.body.id}`;
    con.query(query, function (err, result) {
        let message = {
            status: "200",
            message: "Record Updated!",
        };
        if (err) throw err;
        con.release();
        res.send(message);
    });
  });
});

// Delete Region
router.delete("/regions/:id", (req, res, next) => {
  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `DELETE FROM regions WHERE region_id = ${req.params.id} `;

    con.query(query, function (err, result) {
        let message = {
            status: "200",
            message: "Record Deleted!",
        };
        if (err) throw err;
        con.release();
        res.send(message);
    });
  });
});

module.exports = router;
