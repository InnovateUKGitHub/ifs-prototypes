// **************************************************************************************
// test GET
// **************************************************************************************
export function testGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/learner/v13/registration/password/index', viewData);
}

// test: POST
export function testPost(req, res) {
  const {testString} = req.body;

  let anotherTestString;

  anotherTestString = testString;

  if (anotherTestString) {
    return res.redirect('/');
  } else {
    return res.redirect('/error');
  }
}
