const express = require("express");
const router = express.Router();
const getConnection = require("../utils/db_connection");
const data = require("../utils/testData/regions");

// const dbFunction = (query) =>
// getConnection(async function (err, con) {
//   if (err) {
//     console.log(err);
//   }
//   await con.query(query, function (err, regions) {
//     con.release();
//     return regions;
//   });
// });

router.get("/regions", (req, res, next) => {
  let query = `SELECT * FROM regions`;
  // res.json(dbFunction(query));
  getConnection(async function (err, con) {
    if (err) {
      console.log(err);
    }
    await con.query(query, function (err, regions) {
      con.release();
      res.json(regions);
    });
  });
  //   var a = dbFunction(query);

  //   console.log(a);
  //   res.send(a);
});

//get by Id
router.get("/regions/:id", (req, res, next) => {
  let query = `SELECT * FROM regions WHERE region_id =  ${req.params.id}`;
  getConnection(function (err, con) {
    if (err) {
      console.log(err);
    }
    con.query(query, function (err, region) {
      con.release();
      res.json(region);
    });
  });
});

//insert
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
      if (err) throw err;
      con.release();
    });
  });
  res.send(req.body.name);
});

//update
router.put("/regions", (req, res) => {
  let result = {
    status: "200",

    message: "",
  };

  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `
            UPDATE regions SET name = '${req.body.name}', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
            WHERE region_id = ${req.body.id}`;
    con.query(query, function (err, result) {
      if (err) throw err;
      console.log(query);
      result.message = "Record Updated!";

      con.release();
    });
  });

  res.send(result);
});

//delete
router.delete("/regions/:id", (req, res, next) => {
  let result = {
    status: "200",
    message: "",
  };

  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `DELETE FROM regions WHERE region_id = ${req.params.id} `;

    con.query(query, function (err, result) {
      if (err) throw err;
      result.message = "Record Deleted!";
      con.release();
    });
  });
  res.send(result);
});

module.exports = router;
