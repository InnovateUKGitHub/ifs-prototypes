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

// Survey
router.get('/prototypes/survey', function(req, res) {
  let applicationOptions, applicationID, userID;

  applicationOptions = ['110','111','112','113','114','114','115','116','117','118','119','120','121','122','122','123','124','125','126','127','128','129'];

  applicationID = applicationOptions[Math.floor(Math.random() * applicationOptions.length)];
  userID = Math.floor(Math.random() * 9999) + 1000;
  console.log('userID = ' + userID + "\n" + 'applicationID = ' + applicationID);


  res.render('prototypes/survey/index.html', {
    'applicationID' : applicationID,
    'userID' : userID
  });
});









//
module.exports = router
