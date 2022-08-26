const express = require("express");
const router = express.Router();
const getConnection = require("../utils/db_connection");
const data = require("../utils/testData/regions");

router.get("/categories", (req, res, next) => {
  try {
    let query = `SELECT * FROM categories`;
    getConnection(async function (err, con) {
      if (err) {
        console.log(err);
      }
      await con.query(query, function (err, categories) {
        con.release();
        res.json(categories);
      });
    });
  } catch (error) {
    return res.status(500).send();
  }
});

//get by Id
router.get("/categories/:id", (req, res, next) => {
  try {
    let query = `SELECT * FROM categories WHERE category_id =  ${req.params.id}`;
    getConnection(function (err, con) {
      if (err) {
        console.log(err);
      }
      con.query(query, function (err, category) {
        con.release();
        res.json(category);
      });
    });
  } catch (error) {
    return res.status(500).send();
  }
});

//insert
router.post("/categories", (req, res, next) => {
  try {
    getConnection(function (err, con) {
      if (err) {
        throw err;
      }
      const query = `
            INSERT INTO categories (name, created_by, date_created, updated_by, date_updated)
            VALUES ('${req.body.name}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')
        `;
      console.log(query);
      con.query(query, function (err, result) {
        if (err) throw err;
        con.release();
      });
    });
    res.send(req.body.name);
  } catch (error) {
    return res.status(500).send();
  }
});

//update
router.put("/categories", (req, res) => {
  try {
    let result = {
      status: "200",
      message: "updated completed",
    };

    getConnection(function (err, con) {
      if (err) {
        throw err;
      }
      const query = `
            UPDATE categories SET name = '${req.body.name}', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
            WHERE category_id = ${req.body.id}`;
      con.query(query, function (err, result) {
        if (err) throw err;
        console.log(query);
        result.message = "Record Updated!";

        con.release();
      });
    });

    res.send(result);
  } catch (error) {
    return res.status(500).send();
  }
});

//delete
router.delete("/categories/:id", (req, res, next) => {
  try {
    let result = {
      status: "200",
      message: "record deleted",
    };

    getConnection(function (err, con) {
      if (err) {
        throw err;
      }
      const query = `DELETE FROM categories WHERE category_id = ${req.params.id} `;

      con.query(query, function (err, result) {
        if (err) throw err;
        result.message = "Record Deleted!";
        con.release();
      });
    });
    res.send(result);
  } catch (error) {
    return res.status(500).send();
  }
});

module.exports = router;
