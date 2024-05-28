const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Путь к файлу с данными пользователей
const usersFile = path.join(__dirname, 'users.json');

// Загрузка пользователей из файла
let users = [];
try {
  const data = fs.readFileSync(usersFile, 'utf8');
  users = JSON.parse(data);
} catch (err) {
  // Если файл не найден, создаем пустой массив
  users = [];
}

// Middleware для обработки JSON-данных
app.use(express.json());

// Получение всех пользователей
app.get('/users', (req, res) => {
  res.json(users);
});

// Получение пользователя по ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
});

// Создание нового пользователя
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Генерация уникального ID
  newUser.id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

  users.push(newUser);
  fs.writeFileSync(usersFile, JSON.stringify(users));

  res.status(201).json(newUser);
});

// Обновление пользователя по ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = req.body;
    fs.writeFileSync(usersFile, JSON.stringify(users));

    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
});

// Удаление пользователя по ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    fs.writeFileSync(usersFile, JSON.stringify(users));

    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});