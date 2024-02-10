var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'project' });
});

module.exports = router;