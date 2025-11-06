const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded; // dữ liệu  token của người dùng sau khi xác thực thành công
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};