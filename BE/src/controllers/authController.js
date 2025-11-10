const bcrypt = require('bcrypt');
const pool = require('../db');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]); 
  const user = result.rows[0];

  if (!user) return res.status(400).json({ message: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Wrong password' });

  const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
  res.json({ message: 'Login success', token });
};