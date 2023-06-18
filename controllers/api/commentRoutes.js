const router = require('express').Router();
const { Users, Topics, Modules, Comments } = require('../../models');
const withAuth = require('../../utils/auth');
//add a comment to a topic
router.post('/:id', withAuth, async (req, res) => {
  try {
    //generate comment
    const commentObject = req.body;
    const comment = commentObject.comment;
    const topic = req.params.id;
    const user = req.session.user_id;
    const commentData = await Comments.create({
      comment: comment,
      topic_id: topic,
      user_id: user,
    });
    res.status(200).json({ message: 'comment added' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    //find the comment to delete
    const commentData = await Comments.findAll({
      where: {
        id: req.params.id,
      },
    });
    const comment = commentData.map((comment) => comment.get({ plain: true }));
    //if the comment was made by the user that's logged in, remove the comment
    if (req.session.user_id == comment[0].user_id) {
      const deleteComment = await Comments.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: 'comment deleted' });
    } else {
      res
        .status(400)
        .json({ message: "Cannot delete a comment that isn't yours!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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
