const crypto = require('crypto');
const {
  secretKey,
  numIterations,
  keyLength,
  algoUsed
} = require('./config/secret-key');

const salt = crypto.randomBytes(32).toString('base64');

// const hash = crypto
//   .pbkdf2Sync(password, secretKey, numIterations, keyLength, algoUsed)
//   .toString('base64');

console.log(salt);
