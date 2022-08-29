const getConnection = require("./../utils/db_connection");
const express = require("express");
const router = express.Router();
const { sign } = require("jsonwebtoken");
const store = require('store2');

const getUsers = async (req, res) => {
  let query = "SELECT * FROM users";

  getConnection((err, con) => {
    if (err) throw err;

    con.query(query, (err, result) => {
      console.log("users", result);

      con.release();
      res.json(result);
    });
  });
};

const getUserById = (req, res) => {
  let query = `SELECT * FROM users WHERE user_id = ${req.params.id}`;

  getConnection((error, con) => {
    if (error) throw error;

    con.query(query, (err, result) => {
      console.log("result", result);
      con.release();
      res.send(result);
    });
  });
};

const loginUser = (req, res) => {
  const body = req.body;

  // console.log(body)
  getConnection((error, con) => {
    if (error) throw error;

    con.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [body.username, body.password],
      (err, results) => {
        if (err) throw res.send(err);

        if (results.length == 0) {
          return res.json({
            success: 0,
            data: "Invalid email and password",
          });
        }

        body.password = undefined;

        const jsontoken = sign({ result: results }, "userLogin", {
          expiresIn: "1h",
        });

        store.set('userToken', jsontoken);
        store.set('data', results);
        
        return res.json({
          success: 1,
          message: "Login successfully",
          user_id: results.user_id,
          data: results,
          token: jsontoken,
        });
      }
    );
  });
};

const addUser = (req, res) => {
  getConnection(function (err, con) {
    if (err) {
      throw err;
    }
    const query = `
            INSERT INTO users (first_name, last_name, birth_date, information,
                email, username, password, verified, user_type,
                created_by, date_created, updated_by,
                date_updated)
            VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.birth_date}'
             , '${req.body.information}', '${req.body.email}', '${req.body.password}','${req.body.password}'
             ,'${req.body.verified}','${req.body.user_type}'
             ,'${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')
    `;

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
};

const updateUser = (req, res) => {
  getConnection(function (err, con) {
    if (err) {
      throw err;
    }

    const query = `
            UPDATE users SET password = '${req.body.password}', updated_by = '${req.body.updated_by}', date_updated = '${req.body.date_updated}'
            WHERE user_id = ${req.body.id}`;

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
};
module.exports = {
  getUsers,
  getUserById,
  loginUser,
  addUser,
  updateUser,
};
