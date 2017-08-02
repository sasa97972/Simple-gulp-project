# Simple GULP project

## Что сделано в проекте:

Структура файлов

Есть две папки:
* **app** - папка где мы работаем, сбрасываем библиотеки. В папке app структура стандартная, все дополнительные библиотеки должны находится в папке `libs`, все шрифты которые будут подключены к проекту, обязательно должны находится в папке `fonts`.
* **dist** - папка, куда будет загружен наш собранный проект, папка создается автоматически, перед каждый новым билдом - сама чистится, ничего делать с ней не нужно.

Как работает

1. В проекте подключен препроцессинг sass/scss, по этому разберем пример на основее файлов sass ( с css все стандартно ).
2. Все sass файлы должны находится в папке `sass`, структура в которой они там будут находится, внутри этой папке не важна, все они будут скомпилированы (очень хорошо подходит для людей, которые придерживаются БЭМ методологии ).
3. При сохранении sass файлов (их изминении), происходит автоматическая компиляция всех sass файлов в один css файл, который помещается в папку `css`, по этому в проекте нужно в html подключать именно этот файл. Нужно заметить, что при автоматической компиляции из sass в css также автоматически добавляются все необходимые вендорные префиксы.
4. Все css файлы, которые находятся в папке `libs` (дополнительные библиотеки) будут автоматически собраны в единый файл, сжаты, минифицированы и выгружены в папку `css` под названием `libs.min.css`, по этому подключаем в наш проект этот файл, всместо того чтобы подключать каждую библиотеку отдельно. (Порядок конкатенации css файлов можно задавать в ручную, об этом позже)
5. Со скриптами из папки libs происходит тоже самое, конечный файл будет выгружен в папку `js` под названием `libs.min.js`, jquery конкатенируется первый, по этому все библиотеки будут работать коректно.
6. В итоге у нас всегда будут по 2 файла в папке `css` и в папке `js`.

Билдинг проекта

1. При билдинге проекта, первым делом чистится папка `dist`, если она есть.
2. Собираются все css файлы, из папки `app/css`, конкатенируются, минифицируются и выгружаются в папку `dist/css` под названием `styles.min.css`.
3. Собираются все js файлы, из папки `app/css`, конкатенируются, ужимаются и выгружаются в папку `dist/js` под названием `scripts.min.js`.
4. Все картинки из папки `app/img` также ужимаются, оптимизируются и выгружаются в папку `dist/img`.
5. Все шрифты и html файлы также мигрируют в папку `dist`.
6. Теперь осталось только подключить в index.html наши 2 файла (общий css и общий js) и проект готов.

Особенности и необходимые команды

1. Для того чтобы начать работу, необходимо из корня проекта (например папка Gulp origin и Gulp example - это корни проектов) запустить консоль и ввести команду `gulp watch`, запустится browserSync (локальный сервер Gulp), и теперь при изминении sass файлов будет происходить автоматическая компиляция, также будут видны изминения в браузере без перезагрузки страници (все автоматически). Для выхода из режима `watch` нужно в консоли два раза нажать `Ctrl+C`.
2. Для билдинга проекта нужно ввести в консоли `gulp build`

## Установка GULP:

#Необходимые программы

1. Необходимо чтобы был установлен [Node.js](https://nodejs.org/en/).
**Обратите внимание, что при установке Node.js необходимо отметить галочками установку npm и добавление программы в Path**

2. Далее устанавливаем gulp: заходим в консоль и вводим команду `npm i gulp -g`.

3. Теперь необходимо установить все пакеты, заходим в корень проекта и прописываем команду в консоли `npm i`.

4. После этого можно работать с проектом.

## Завершение

В завершение хотелось бы отметить что этот проект, всего лишь пример, в файле `gulpfile.js` можно редактировать его на свой вкус и цвет, мануал по GULP можно найти [здесь](https://gulpjs.com/).
