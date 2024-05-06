const crypto = require('crypto');

class PasswordGenerator {
  constructor() {
    this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
    this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numbers = '0123456789';
    this.symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  }

  generate(length = 8, options = { hasNumbers: true, hasSymbols: true, hasLowercase: true, hasUppercase: true }) {
    let characters = '';
    if (options.hasLowercase) characters += this.lowercase;
    if (options.hasUppercase) characters += this.uppercase;
    if (options.hasNumbers) characters += this.numbers;
    if (options.hasSymbols) characters += this.symbols;

    return Array.from(crypto.randomFillSync(new Uint8Array(length)))
      .map((x) => characters[x % characters.length])
      .join('');
  }
}

module.exports = PasswordGenerator;