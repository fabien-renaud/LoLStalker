var router = require('express').Router();

router.use('/champion', require('./champion'));
router.use('/summoner', require('./summoner'));

module.exports = router;
