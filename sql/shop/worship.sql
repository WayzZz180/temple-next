-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 07 日 02:11
-- 伺服器版本： 5.7.39
-- PHP 版本： 8.2.0

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
-- 資料表結構 `worship`
--

CREATE TABLE `worship` (
  `pid` int(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(255) NOT NULL,
  `cid` int(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `worship`
--

INSERT INTO `worship` (`pid`, `product_name`, `product_price`, `cid`, `image`) VALUES
(1, '紅龜粿', 30, 36, 'worship/mazu (1).png'),
(2, '發糕', 20, 36, 'worship/mazu (2).png'),
(3, '水果', 666, 36, 'worship/mazu (3).png'),
(4, '紅湯圓', 99, 36, 'worship/mazu (4).png'),
(5, '素三牲', 120, 36, 'worship/mazu (5).png'),
(6, '見麵平安', 45, 36, 'worship/mazu (6).png'),
(7, '手採紅蜜烏龍', 60, 36, 'worship/mazu (7).png'),
(8, '各式菜碗', 120, 36, 'worship/mazu (8).png');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `worship`
--
ALTER TABLE `worship`
  ADD PRIMARY KEY (`pid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `worship`
--
ALTER TABLE `worship`
  MODIFY `pid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
