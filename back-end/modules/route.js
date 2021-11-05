const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.create);

router.get('/home', controller.getAll);

module.exports = router;
