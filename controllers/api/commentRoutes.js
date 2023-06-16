const router = require('express').Router();
const { Users, Topics, Modules, Comments } = require('../../models');
const withAuth = require('../../utils/auth');
//add a comment to a topic
router.post('/:id', withAuth, async (req, res) => {
  try {
    //generate comment
    const comment = req.body;
    const topic = req.params.id;
    const user = req.session.user_id;
    const commentData = await Comments.bulkCreate({
      comment,
      topic,
      user,
    });
    console.log(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const comment = await Comments.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//update a comment
router.put('/:id', withAuth, async (req, res) => {
  //
  try {
    const commentId = req.params.id;
    const comment = req.body;

    //update comment data
    await Comments.update(comment, {
      where: { id: commentId },
    });
    //need more here i think
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
