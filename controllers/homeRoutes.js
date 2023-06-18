const router = require('express').Router();
const { Users, Topics, Modules, Comments } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/topics', async (req, res) => {
  console.log(req.query.id);
  try {
    const topicData = await Topics.findAll({
      where: { id: req.query.id },
      include: [{ model: Comments, include: [Users] }],
    });
    const topic = topicData.map((topic) => topic.get({ plain: true }));

    const moduleData = await Modules.findAll({
      include: [{ model: Topics, include: [Comments] }],
    });
    const modules = moduleData.map((module) => module.get({ plain: true }));
    console.log(topic[0].comments[0]);

    res.render('homepage', {
      modules,
      topic,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
