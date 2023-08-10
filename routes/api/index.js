const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/', userRoutes);
router.use('/', thoughtRoutes);

module.exports = router;