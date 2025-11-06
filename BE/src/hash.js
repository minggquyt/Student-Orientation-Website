const bcrypt = require('bcrypt');

const password = "admin123";
bcrypt.hash(password, 10).then((hashed) => {
  console.log(`password after hashed: ${hashed}`);
});

