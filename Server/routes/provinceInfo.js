const express = require('express');
const router = express.Router();
const path = require("path");
const getConnection = require('../utils/db_connection');
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, Date.now() + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif'){
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

// Get all province information
router.get('/provinceInfo', (req, res) => {
    try {
      let message = {
        status: "200",
        message: "",
      };
      getConnection(function (err, con) {
        let query = `SELECT * FROM provinces_info`;
        if (err) {
          console.log(err);
          message.message = err;
        }
        con.query(query, function (err, results) {
          let resObj = {
            province_infos: results
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
    } catch(error) {
      return res.status(500).send();
    }
});

// Get province information by ID
router.get('/provinceInfo/:id', (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `SELECT * FROM provinces_info WHERE province_info_id =  ${req.params.id}`;
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) {
        let resObj = {
          province_info: results
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
  } catch(error) {
    return res.status(500).send();
  }
});

// Insert province info
router.post('/provinceInfo/', upload.single('image'), (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `
        INSERT INTO province_info (province_id, title, description, image, category_id, created_by, date_created, updated_by, date_updated)
        VALUES ('${req.body.province_id}', '${req.body.title}', '${req.body.description}', '${req.file.path}', '${req.body.category_id}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')`;
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) {
        message.message = "Record Inserted";
        if (err) throw err;
        con.release();
        res.json(message);
      });
    });
  } catch(error) {
    return res.status(500).send();
  }
});

// Update province info
router.put('/provinceInfo/', upload.single('image'), (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `
        UPDATE province_info SET 
          province_id = '${req.body.province_id}', 
          title = '${req.body.title}', 
          description = '${req.body.description}', 
          image = '${req.file.path}', 
          category_id ='${req.body.category_id}', 
          updated_by = '${req.body.updated_by}', 
          date_updated) = '${req.body.date_updated}') 
          WHERE province_info_id = '${req.body.province_info_id}'`;
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) {
        message.message = "Record Updated";
        if (err) throw err;
        con.release();
        res.json(message);
      });
    });
  } catch(error) {
    return res.status(500).send();
  }
});

// Delete province info
router.put('/provinceInfo/:id', upload.single('image'), (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `
        DELETE FROM province_info WHERE provinces_info_id = ${req.params.id} `;
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) {
        message.message = "Record Deleted";
        if (err) throw err;
        con.release();
        res.json(message);
      });
    });
  } catch(error) {
    return res.status(500).send();
  }
});

module.exports = router;