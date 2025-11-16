const bcrypt = require('bcrypt');
const pool = require('../db');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    console.log("router handler run !");
    console.log("req Headers: ", req.headers);
    console.log("req body raw: ", req.body);

    const { username, password } = req.body;

    // Query user
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Wrong password' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id }, 'secret_key', {
      expiresIn: '1h',
    });

    return res.json({ message: 'Login success', token });

  } catch (err) {
    console.error("🔥 Server error:", err);

    // Luôn trả JSON để client không bị Unexpected token '<'
    return res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};
