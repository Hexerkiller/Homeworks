1. npm init -y (инициализация проекта)
2. npm install sass -D, либо если установлен npm install -g sass, то не надо
3. Прописываем скрипт в свойство script в package.json
    "sass": "sass --watch input.scss style.css"
4. Создайте scss файлик и укажите его в скрипт, например, вы создали style.scss, значит в скрипте должно быть
    "sass": "sass --watch style.scss style.css"
5. Подключать к html через линк можно ТОЛЬКО css файл. Браузер не понимает что такое scss, он знает только css, в который и скомпилируется ваш scss
6. запуск команды npm run sass