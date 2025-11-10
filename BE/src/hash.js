const bcrypt = require('bcrypt');

const password = process.env.password;
bcrypt.hash(password, 10).then((hashed) => {
  console.log(`password after hashed: ${hashed}`);
});

