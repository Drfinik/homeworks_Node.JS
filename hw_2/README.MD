# Secure Password Generator 

Эта библиотека предоставляет функции для генерации случайных данных.

## Установка

Чтобы установить библиотеку, выполните следующую команду:

npm install secure-password-generator-Drfinik

## Пример использования

const PasswordGenerator = require('secure-password-generator-drfinik');

const password = PasswordGenerator.generatePassword(12, true, true);

console.log(password);