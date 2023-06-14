const router = require("express").Router();
const { Users, Topics, Modules, Comments } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    //get modules
    const moduleData = await Modules.findAll();
    //map moduleData to array
    const modules = moduleData.map((module) => module.get({ plain: true }));
    //render modules to homepage
    //will be passing this more data if we want to render more than just modules on homepage
    res.render("homepage", {
      modules,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
