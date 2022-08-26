const express = require('express');
const router = express.Router();
const getConnection = require('../utils/db_connection');
const data = require('../utils/testData/provinces');

router.get('/provinces', (req, res, next) => {
    res.json(data.provinces);
});

router.get('/provinces/:id', (req, res, next) => {
    const provinces = data.provinces.find(reg => reg.id == parseInt(req.params.id));
    res.json(provinces);
});

router.get('/provinces/:id/name', (req, res, next) => {
    const provinces = data.provinces.find(reg => reg.id == parseInt(req.params.id));
    res.json(provinces.name);
});

module.exports = router;
