const router = require('express').Router();
const { Users, Topics, Modules, Comments } = require('../models');
const withAuth = require('../utils/auth');

//login route
router.get('/login', (req, res) => {
  console.log('beforeif');
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  console.log('working');
  res.render('login');
});

router.get('/', async (req, res) => {
  try {
    //get modules
    const moduleData = await Modules.findAll({
      include: [{ model: Topics, include: [{ model: Comments }] }],
    });
    //map moduleData to array
    const modules = moduleData.map((module) => module.get({ plain: true }));
    console.log(modules);
    //render modules to homepage
    //will be passing this more data if we want to render more than just modules on homepage
    res.render('homepage', {
      modules: modules,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
