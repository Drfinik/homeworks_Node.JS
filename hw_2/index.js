function generatePassword(length, hasNumbers, hasSpecialChars) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+{}:"<>?[];,./\'';
  
  let characters = alphabet;
  if (hasNumbers) characters += numbers;
  if (hasSpecialChars) characters += specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

module.exports = {generatePassword};