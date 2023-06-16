const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');
const topicRoutes = require('./topicRoutes');

//uncomment when apiRoutes is set up

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
module.exports = router;
