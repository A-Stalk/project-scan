установка всех зависимостей:
### yarn

для запуска:
### yarn dev

# проект «Сервис СКАН»
Программный продукт СКАН (Интерфакс) предназначен для комплексного управления репутацией, отслеживания сообщений в СМИ и соцсетях в режиме реального времени, управления репутационными рисками и анализа информации в медиа-пространстве в целом.

проект написан на React & Redux Toolkit. В соответствии с ТЗ финального проекта реализовано:
- Главная страница, страница авторизации. Для авторизованного пользователя доступны: страница поиска, страница выдачи результатов. Дополнительно сделаны заглушки на все остальные варианты адресов. Маршрутизация выполена с помощью React Router 6.
![image](https://github.com/A-Stalk/project-scan/assets/118521698/7c97a625-f48c-414f-81f9-780130b27cb1)

- валидация форм авторизации и формы поиска, проверка валидности ИНН, формата вводимых данных, периода дат и т.д. Кнопка поиска будет недоступна пока не будут заполнены все необходимые поля и корректно. В случае, если что-то некорректно введено - будет необходимая подсказка.
![image](https://github.com/A-Stalk/project-scan/assets/118521698/e5c44172-6197-4953-a07b-f56fae263087)

- в выдаче результатов поиска реализовано: гистограмма в виде карусели, ленивая загрузка публикаций по 10шт, после нажатия на кнопку загружаются следующие 10, по истечению списка кнопка исчезает. Дополнительно: В случае 0 результата поиска сделана заглушка сообщающая об этом и дающая возможность вернуться обратно.
![image](https://github.com/A-Stalk/project-scan/assets/118521698/6f835844-c277-45cf-ac1f-9367af8032b8)

- обращение к api реализовано с помощью axios и redux-toolkit, проставлены последовательные ожидания ответов от сервера, в интерфейсе вставлены лоадеры.

- всё доступно и в мобильной версии. Дополнительно реализовано всплывающе окно бургер-меню с закрытием при клике снаружи.
