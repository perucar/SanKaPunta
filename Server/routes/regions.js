const express = require('express');
const router = express.Router();
const getConnection = require('../utils/db_connection');
const data = require('../utils/testData/regions');

router.get('/regions', (req, res, next) => {
    res.json(data.regions);
});

router.get('/regions/:id', (req, res, next) => {
    const region = data.regions.find(reg => reg.id == parseInt(req.params.id));
    res.json(region);
});

router.get('/regions/:id/name', (req, res, next) => {
    const region = data.regions.find(reg => reg.id == parseInt(req.params.id));
    res.json(region.name);
});

router.get('/regions/:id/provinces', (req, res, next) => {
    const region = data.regions.find(reg => reg.id == parseInt(req.params.id));
    res.json(region.name);
});


module.exports = router;
