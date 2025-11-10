const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/login', login);
router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'Welcome user', user: req.user });
});

router.get('/',(red,res,next) => {
    res.send("You are in API !");
})

module.exports = router;