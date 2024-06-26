# Описание кода:

## Импорт модулей:
express: для создания REST API.
fs: для работы с файловой системой.
path: для работы с путями к файлам.

## Создание приложения Express: 
const app = express();

## Определение порта: 
const port = 5000;

## Определение пути к файлу с данными пользователей:
const usersFile = path.join(__dirname, 'users.json');

## Загрузка пользователей из файла:
Используется try...catch для обработки ошибок при чтении файла.
Если файл существует, данные из него загружаются в массив users.
Если файл не существует, создается пустой массив users.

## Middleware для обработки JSON-данных:
app.use(express.json()); - позволяет парсить JSON-данные, передаваемые в запросах.

## Обработчики API:
/users (GET): Возвращает список всех пользователей.
/users/:id (GET): Возвращает пользователя по ID.
/users (POST): Создает нового пользователя.
/users/:id (PUT): Обновляет пользователя по ID.
/users/:id (DELETE): Удаляет пользователя по ID.

## Сохранение изменений в файл:
После каждой операции (создание, обновление, удаление), данные сохраняются в файл usersFile с использованием fs.writeFileSync().

## Запуск сервера:
app.listen(port, () => { ... });

