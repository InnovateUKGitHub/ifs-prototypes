const express = require('express')
const router = express.Router()

// import * as testController from './views/controllers/testController';
// import testController from './views/controllers/testController'

// Add your routes here - above the module.exports line
router.get('/prototypes/example-journey', function(req, res) {
  let testVar = 'blah blah ';
  res.render('prototypes/example-journey/index.html', { 'name' : testVar });
});


router.post('/prototypes/example-journey', function(req, res) {
  const { name } = req.body;
  console.log(name);
  return res.redirect('/prototypes/example-journey/');

});

module.exports = router
