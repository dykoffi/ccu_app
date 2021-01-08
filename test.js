const crypto = require('crypto');

function crypter(message) {
  crypto.scrypt("@e#{8z~(su58zèhfv@{@##~€", 'salt', 24, (err, key) => {
    if (err) throw err;
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;
      const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
      let encrypted = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
      console.log(encrypted);
    });
  });
}

function decrypter(encrypted) {
  const key = crypto.scryptSync("@e#{8z~(su58zèhfv@{@##~€", 'salt', 24);
  const iv = Buffer.alloc(16, 0);
  const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted
}

console.log(decrypter('c4a6339a32e47ed7e7ecca664f981f02'))