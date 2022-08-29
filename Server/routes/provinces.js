const express = require('express');
const router = express.Router();
const getConnection = require('../utils/db_connection');
const data = require('../utils/testData/provinces');

router.get('/provinces', (req, res, next) => {
    let query = `SELECT * FROM provinces as p INNER JOIN province_info as pi WHERE p.province_id = pi.province_id`;
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
          res.json(results);
        });
    });
});

router.get('/provinces/city/:city', (req, res) => {
  let query = `SELECT * FROM provinces WHERE name = '${req.params.city}'`;

  getConnection(function (err, con) {
    if (err) {
      console.log(err);
    }
    con.query(query, function (err, results) {
      console.log(results)
      con.release();
      res.json(results);
    });
  });
})

router.get('/provinces/:id', (req, res, next) => {
  let query = `SELECT * FROM provinces WHERE province_id =  ${req.params.id}`;
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
      res.json(results);
    });
  });
});

router.post('/provinces', (req, res, next) => {
  let query = `
    INSERT INTO regions (name, region_id, latitude, longitude, created_by, date_created, updated_by, date_updated)
    VALUES ('${req.body.name}', '${req.body.region_id}', '${req.body.latitude}', '${req.body.longitude}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')
  `;
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

router.put("/provinces", (req, res) => {
  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `
            UPDATE provinces SET name = '${req.body.name}', latitude = '${req.body.latitude}', longitude = '${req.body.longitude}', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
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

router.delete("/provinces/:id", (req, res, next) => {
  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `DELETE FROM provinces WHERE provinces_id = ${req.params.id} `;

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
