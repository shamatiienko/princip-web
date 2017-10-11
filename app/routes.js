// require express
var express = require('express');
var path = require('path');

// create our route object
var router = express.Router();

// export our roter
module.exports = router;

// route for our homepage
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// route for our about page
router.get('/about', function (req, res) {
    res.send('hello world i am about page');
});

router.get('/contact');
router.post('/contact');