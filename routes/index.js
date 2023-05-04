var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const { correcto } = req.query;
  const { error } = req.query;
  res.render('index', { title: 'Express', correcto, error });
});

module.exports = router;
