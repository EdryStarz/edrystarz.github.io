# Launch kit

Ready-to-edit copy. These drafts have not been posted. Share only in communities
that allow project announcements and where the tool solves a relevant problem.
Use one clear example and ask for specific feedback. Do not repeat the same post
across unrelated groups, invent reviews or claim popularity.

## Main portfolio post

Собрал свои проекты в одну витрину: расширения для YouTube, локальное приложение
для английского, трекер обучения и Windows-утилиты. У каждого проекта — отдельная
страница, статус и понятный путь к установке или исходникам.

https://edrystarz.github.io/

Какой инструмент вам пригодился бы? Интересны конкретные замечания по установке
и первому использованию.

## Stars About War

Сделал расширение, которое показывает метки из Stars About War прямо рядом с
каналами и видео на YouTube. Нажатие ведёт к источнику: можно прочитать обоснование,
а не полагаться только на цвет. Есть локальный кеш и обновление данных.
Это неофициальное расширение; классификация принадлежит сайту-источнику.

Страница и установка: https://edrystarz.github.io/stars-about-war/

Demo idea: 15–25 seconds showing a label, opening its source, and the update
control. Use a clean browser profile and avoid exposing subscriptions or history.

## Alabuga Detector

Alabuga Detector добавляет на YouTube метки каналов, включённых в базу
gubanovfiles.com, и даёт перейти к материалам источника. Метка относится к каналу,
а не обязательно к открытому видео. Расширение доступно для Chrome и Firefox.

Страница и установка: https://edrystarz.github.io/alabuga-detector/

Demo idea: show the same channel in a feed and on its page, then open source
information. Explain the distinction between a channel label and a video label.

## English Memory

Делаю Windows-приложение, которое превращает услышанный английский в личный
словарь: локальный Whisper, анализ локальной языковой моделью и повторение слов.
Есть захват микрофона и звука ПК. Опубликовал исходники рабочего прототипа:
сборка прошла, все 74 стандартные проверки тоже.
Нужны сборка из исходников и отдельная загрузка моделей.

https://edrystarz.github.io/english-memory/

Demo idea: use your own short spoken example, then show a vocabulary card and a
review. Do not show a personal database or use copyrighted film audio in a demo.

## English B2 Tracker

Трекер английского с планом на 12 недель: ежедневные задания, словарь, журнал
ошибок, таймер и прогресс в браузере. Данные хранятся локально в IndexedDB;
для переноса есть JSON backup. Это планировщик практики, а не сертификат уровня.
Исходники и инструкция запуска открыты.

https://edrystarz.github.io/english-b2-tracker/

Demo idea: show one daily task, mark it complete, open progress and export a
backup. Label demo data as examples.

## TextFlow

TextFlow — Windows-утилита для повторяющихся текстов: сохранил фразу, назначил
горячую клавишу или нашёл её через быстрый поиск. C#, WPF и Win32; исходники
открыты. Есть переносимое JSON-хранилище и импорт QuickTextPaste.

https://edrystarz.github.io/textflow/

Demo idea: paste a generic snippet into Notepad, then use the search palette.

## Shorts Studio

Разрабатываю локальный видеопайплайн: транскрипция, выбор фрагментов,
вертикальное кадрирование, субтитры и FFmpeg-экспорт. Python/FastAPI + React.
Проект ещё в разработке; исходники и ограничения доступны на GitHub.

https://edrystarz.github.io/shorts-studio/

Demo idea: record an actual successful export using your own video. Do not
present a pipeline diagram as proof of a finished render.

## Windows Counter

Небольшой счётчик для Windows: кнопки, стрелки, ручной ввод, режим поверх окон
и сохранение значения между запусками. Python/Tkinter, исходники открыты.

https://edrystarz.github.io/windows-counter/

Demo idea: change the value, close the app and reopen it to show persistence.

## Lightweight rollout

1. Start with one published extension; show what changes on screen in the first
   three seconds. Use its own page link, not the general portfolio link.
2. Share the working example and install link with an audience interested in
   YouTube tools, respecting that community's rules.
3. Collect actual install issues and improve setup instructions before expanding
   promotion. Store dashboards can provide installation data; there is no site
   analytics or visitor tracking configured here.
4. Introduce the learning apps with a short real workflow and explicitly say
   that these are source-based prototypes.

Social preview images are in `assets/`, sized 1200 × 630. They are promotional
title cards, not screenshots of the products. No distribution or engagement
results are claimed by this kit.
