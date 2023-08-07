-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 07, 2023 at 06:14 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `temple`
--

-- --------------------------------------------------------

--
-- Table structure for table `worship`
--

CREATE TABLE `worship` (
  `pid` int(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(255) NOT NULL,
  `cid` int(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `worship`
--

INSERT INTO `worship` (`pid`, `product_name`, `product_price`, `cid`, `image`) VALUES
(1, '紅龜粿', 30, 36, 'worship/mazu (1).png'),
(2, '發糕', 20, 36, 'worship/mazu (2).png'),
(3, '柑橘', 390, 36, 'worship/mazu (3).png'),
(4, '紅湯圓', 99, 36, 'worship/mazu (4).png'),
(5, '素三牲', 120, 36, 'worship/mazu (5).png'),
(6, '見麵平安', 45, 36, 'worship/mazu (6).png'),
(7, '手採紅蜜烏龍', 60, 36, 'worship/mazu (7).png'),
(8, '各式菜碗', 120, 36, 'worship/mazu (8).png'),
(9, '湯圓', 60, 37, 'worship/love (1).png'),
(10, '桂圓', 50, 37, 'worship/love (2).png'),
(11, '紅棗', 120, 37, 'worship/love (3).png'),
(12, '姻緣糕', 120, 37, 'worship/love (4).png'),
(13, '花生', 60, 37, 'worship/love (5).png'),
(14, '金沙巧克力', 139, 37, 'worship/love (6).png'),
(15, '黑糖麻糬', 30, 37, 'worship/love (7).png'),
(16, '水果盤', 390, 37, 'worship/love (8).png'),
(17, '粽子', 350, 38, 'worship/study (1).png'),
(18, '蔥', 50, 38, 'worship/study (2).png'),
(19, '芹菜', 79, 38, 'worship/study (3).png'),
(20, '蒜', 30, 38, 'worship/study (4).png'),
(21, '菜頭', 80, 38, 'worship/study (5).png'),
(22, '竹筍', 180, 38, 'worship/study (6).png'),
(23, '狀元糕', 60, 38, 'worship/study (7).png'),
(24, '礦泉水', 36, 38, 'worship/study (8).png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `worship`
--
ALTER TABLE `worship`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `worship`
--
ALTER TABLE `worship`
  MODIFY `pid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
