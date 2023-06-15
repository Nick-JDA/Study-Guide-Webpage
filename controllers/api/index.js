const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');


//uncomment when apiRoutes is set up
=======
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
