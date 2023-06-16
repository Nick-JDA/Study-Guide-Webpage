const router = require('express').Router();
const { Topics, Comments, Modules } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const topicData = await Topics.findAll({
      where: { id: req.params.id },
      include: [{ model: Comments }],
    });
    const topic = topicData.map((topic) => topic.get({ plain: true }));

    const moduleData = await Modules.findAll({
      include: [{ model: Topics, include: [Comments] }],
    });
    const modules = moduleData.map((module) => module.get({ plain: true }));
    console.log(topic[0].comments[0].comment);

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

module.exports = router;
