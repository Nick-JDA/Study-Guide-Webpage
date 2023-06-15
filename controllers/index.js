const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
//uncomment when apiRoutes is set up
router.use('/api', apiRoutes);

module.exports = router;
