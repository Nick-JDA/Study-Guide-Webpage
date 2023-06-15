const router = require('express').Router();
const userRoutes = require('./userRoutes');

//uncomment when apiRoutes is set up
router.use('/users', userRoutes);

module.exports = router;
