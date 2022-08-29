const getConnection = require('./../utils/db_connection');
const express = require('express');
const router = express.Router();
const { sign } = require('jsonwebtoken');

const getUsers = async (req, res) => {
    let query = 'SELECT * FROM users';

    getConnection((err, con) => {
        if(err) throw err;

        con.query(query, (err, result) => {
            console.log("users", result);

            con.release();
            res.json(result);
        })
    })
}

const getUserById = (req, res) => {
    let query = `SELECT * FROM users WHERE user_id = ${req.params.id}`;

    getConnection((error, con) => {
        if(error) throw error;

        con.query(query, (err, result) => {
            console.log("result", result);
            con.release();
            res.send(result);
        })
    })
}

const loginUser = (req, res) => {
    const body = req.body;

    // console.log(body)
    getConnection((error, con) => {
        if(error) throw error;

        con.query('SELECT * FROM users WHERE username = ? AND password = ?', [body.username, body.password], (err, results) => {
            if(err) throw res.send(err);

            console.log(results)

            if (results.length == 0) {
                return res.json({
                    success: 0,
                    data: "Invalid email and password"
                })
            } 


            body.password = undefined;

            const jsontoken = sign({result: results}, 'userLogin', {
                expiresIn: '1h'
            });

            return res.json({
                success: 1,
                message: "Login successfully",
                user_id: results.user_id,
                data: results,
                token: jsontoken
            });
        })
    })
}

module.exports = {
    getUsers,
    getUserById,
    loginUser
}