# Secure Password Generator 

Эта библиотека предоставляет функции для генерации случайных данных.

## Установка

Чтобы установить библиотеку, выполните следующую команду:

npm install secure-password-generator-Drfinik

## Пример использования

const PasswordGenerator = require('./PasswordGenerator');

const generator = new PasswordGenerator();

const password = generator.generate(12, { hasSymbols: false });

console.log(password);