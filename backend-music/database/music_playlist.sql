-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Фев 12 2020 г., 10:41
-- Версия сервера: 10.4.8-MariaDB
-- Версия PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `music_playlist`
--

-- --------------------------------------------------------

--
-- Структура таблицы `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20200207121227', '2020-02-07 12:12:53');

-- --------------------------------------------------------

--
-- Структура таблицы `singer`
--

CREATE TABLE `singer` (
  `id` int(11) NOT NULL,
  `name_singer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_song` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genres_song` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year_song` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `singer`
--

INSERT INTO `singer` (`id`, `name_singer`, `name_song`, `genres_song`, `year_song`) VALUES
(1, 'Shakira', 'Waka Waka (This Time for Africa)', 'Pop', 2010),
(2, 'Pitbull feat Jennifer Lopez', 'On the Floor', 'Dance', 2011),
(3, 'Selena Gomez', 'Rare', 'Pop', 2020),
(4, 'Lady Gaga', 'Bad Romance', 'Pop', 2009),
(5, 'Adam Lambert', 'Whataya Want From Me', 'Pop', 2009),
(6, 'Jasper Forks', 'River Flows In You', 'Easy music', 2001),
(7, 'Keri Hilson', 'I like', 'Rhythm-n-blues', 2009),
(8, 'Dan Balan', 'Chica Bomb', 'Pop', 2010),
(9, 'Stromae', 'Alors on Dance', 'Pop', 2009),
(10, 'Lady Gaga', 'Alejandro', 'Pop', 2009),
(11, 'Baby Alice', 'Pina colada boy', 'Dance music', 2009),
(12, 'Kato', 'Turn The Lights Off', 'House', 2007),
(13, 'Sophie Ellis-Bextor Feat. Junior Caldera', 'Can\'t Fight This Feeling', 'Rock', 1984),
(14, 'Kesha', 'Tik tok', 'Pop', 2009);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Индексы таблицы `singer`
--
ALTER TABLE `singer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `singer`
--
ALTER TABLE `singer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
