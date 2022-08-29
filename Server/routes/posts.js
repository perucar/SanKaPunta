const express = require('express');
const router = express.Router();
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

router.get('/posts', (req, res) => {
    try {
      let message = {
        status: "200",
        message: "",
      };
      getConnection(function (err, con) {
        let query = `SELECT * FROM posts`;
        if (err) {
          console.log(err);
          message.message = err;
        }
        con.query(query, function (err, results) {
          let resObj = {
            posts: results
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

router.get('/posts/:id', (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `SELECT * FROM posts WHERE post_id =  ${req.params.id}`;
      if (err) {
        console.log(err);
        message.message = err;
      }
      con.query(query, function (err, results) {
        let resObj = {
          post: results
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

router.post('/posts', upload.single('image'), (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `
        INSERT INTO posts (user_id, province_id, title, description, image, category_id, created_by, date_created, updated_by, date_updated)
        VALUES ('${req.body.user_id}', '${req.body.province_id}', '${req.body.title}', '${req.body.description}', '${req.file.path}', '${req.body.category_id}', '${req.body.created_by}', '${req.body.date_created}', '${req.body.updated_by}', '${req.body.date_updated}')`;
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

router.put('/posts', upload.single('image'), (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `
        UPDATE posts SET  
          province_id = '${req.body.province_id}', 
          title = '${req.body.title}', 
          description = '${req.body.description}', 
          image = '${req.file.path}', 
          category_id ='${req.body.category_id}', 
          updated_by = '${req.body.updated_by}', 
          date_updated = '${req.body.date_updated}'
          WHERE post_id = '${req.body.post_id}'`;
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

router.put('/posts/:id', upload.single('image'), (req, res) => {
  try {
    let message = {
      status: "200",
      message: "",
    };
    getConnection(function (err, con) {
      const query = `
        DELETE FROM posts WHERE posts_id = ${req.params.id} `;
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