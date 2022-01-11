const router = require('express').Router();

// @route   GET api/auth
// @desc    Get logged in user
// @acess   Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route   POST api/auth
// @desc    Auth user and get token
// @acess   Public
router.post('/', (req, res) => {
  res.send('Log user');
});

module.exports = router;
