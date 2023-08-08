-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 08 日 06:43
-- 伺服器版本： 5.7.39
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `temple`
--

-- --------------------------------------------------------

--
-- 資料表結構 `Amulet`
--

CREATE TABLE `Amulet` (
  `Member_ID` varchar(255) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `Sid` int(255) NOT NULL,
  `Datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Amulet`
--

INSERT INTO `Amulet` (`Member_ID`, `Name`, `Sid`, `Datetime`) VALUES
('1', '紅線', 1, '2023-08-08 13:57:51'),
('1', '桃花枝', 2, '2023-08-08 14:01:44'),
('12', '籤詩1', 3, '2023-08-08 14:24:11'),
('12', '籤詩1', 4, '2023-08-08 14:24:35'),
('1', '籤詩1', 5, '2023-08-08 14:25:46'),
('12', '籤詩1', 6, '2023-08-08 14:32:19'),
('1', '籤詩13', 7, '2023-08-08 14:36:28');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `Amulet`
--
ALTER TABLE `Amulet`
  ADD PRIMARY KEY (`Sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `Amulet`
--
ALTER TABLE `Amulet`
  MODIFY `Sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
