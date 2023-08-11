-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 11, 2023 at 05:47 AM
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
-- Table structure for table `love_light`
--

CREATE TABLE `love_light` (
  `Member_ID` int(11) DEFAULT NULL,
  `Tower_ID` varchar(50) DEFAULT NULL,
  `All_Light` varchar(50) NOT NULL,
  `LocationX` varchar(50) NOT NULL,
  `LocationY` varchar(50) NOT NULL,
  `Datetime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `love_light`
--

INSERT INTO `love_light` (`Member_ID`, `Tower_ID`, `All_Light`, `LocationX`, `LocationY`, `Datetime`) VALUES
(12, NULL, 'aaa', '10', 'H', '2023-08-04 17:17:29');

-- --------------------------------------------------------

--
-- Table structure for table `love_light_tower`
--

CREATE TABLE `love_light_tower` (
  `LightTower` int(50) NOT NULL,
  `Tower_ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `love_light_tower`
--

INSERT INTO `love_light_tower` (`LightTower`, `Tower_ID`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D'),
(5, 'E'),
(6, 'F');

-- --------------------------------------------------------

--
-- Table structure for table `love_redline`
--

CREATE TABLE `love_redline` (
  `Member_ID` varchar(50) NOT NULL,
  `SID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Birthday` date NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Datetime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `love_redline`
--

INSERT INTO `love_redline` (`Member_ID`, `SID`, `Name`, `Birthday`, `Address`, `Datetime`) VALUES
('aaa', 1, '3333', '2023-08-09', '3333', '2023-08-04');

-- --------------------------------------------------------

--
-- Table structure for table `online_character`
--

CREATE TABLE `online_character` (
  `Member_ID` int(11) NOT NULL,
  `CharacterLocation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `online_question`
--

CREATE TABLE `online_question` (
  `Question_ID` int(50) NOT NULL,
  `Question` varchar(255) NOT NULL,
  `option1` varchar(255) NOT NULL,
  `option2` varchar(255) NOT NULL,
  `option3` varchar(255) NOT NULL,
  `Answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `online_question`
--

INSERT INTO `online_question` (`Question_ID`, `Question`, `option1`, `option2`, `option3`, `Answer`) VALUES
(1, '三月瘋媽祖，常在電視上看到一群人，排成一長條人龍，跪在地上，等待媽祖神轎經 過時，從其底下鑽過，稱為「鑽神轎」。請問「鑽神轎」這個動作，從文化層面具有何 種意義？', '(A)以跪拜禮表達對媽祖的崇敬', '(B)儀式性動作，具有消災解厄保平安的意義', '(C)呈現媽祖信徒人數眾多', 'B'),
(2, '「門神」向為臺灣各式廟宇或城門之重要守護神祇，不同年代或宗教信仰對「門神」有不同之稱呼，下 列何者錯誤？', '(A)神茶與鬱壘', '(B)茄藍與韋馱', '(C)增福財帛星君與玄壇元帥趙公明', 'C'),
(3, '臺灣傳統建築裝飾題材上，常用的避邪圖案為何？', '(A)蝙蝠', '(B)石敢當', '(C)柿子', 'B'),
(4, '燒金，也就是焚燒金、銀紙錢（冥紙），是臺灣常見的宗教習俗，燃燒金紙的習俗是為了什麼？', '(A)驅除厄運', '(B)酬謝恭送神靈', '(C)儀式慶祝', 'B'),
(5, '「粉紅超跑」指的是什麼？', '(A)粉紅法拉利', '(B)在義大利舉辦的賽車遊行', '(C)白沙屯媽祖蓋有粉紅色遮雨布的鑾轎', 'C'),
(6, '在台灣宮廟信仰中，文昌帝君是一位重要的神明。請問在宮廟中，文昌帝君扮演著什麼角色？', '(A) 財富之神，帶來財富和好運', '(B) 學業之神，掌管人間文書和學業', '(C) 醫療之神，守護人們的健康和醫藥事務', 'B'),
(7, '月老，相傳是人間「媒神」職掌民間締結婚姻之事，專門負責牽線搭橋，主持姻緣和婚姻的神祇，月老通常被形容為一位什麼樣的形象？', '(A) 穿著紅色套裝，會送給好孩子神秘禮物的胖胖老人', '(B)身穿水手服，手持彎月形神杖，代表愛與正義的美少女', '(C)白鬍長鬚，臉泛紅光的慈祥老者，拄著拐杖、手持著姻緣簿', 'C'),
(8, '鬼門開時，使得孤魂野鬼得以暫時返回陽間。為了安撫這些遊魂野鬼，人們會進行各種供養儀式，為祂們解除冤屈和苦楚，以下哪個活動是為了供養亡靈和孤魂野鬼？', '(A)在桌子依序擺放供品，點香祭拜', '(B)放歌跳舞', '(C)舉辦大型祭典放煙火', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `online_quiz`
--

CREATE TABLE `online_quiz` (
  `Member_ID` int(11) NOT NULL,
  `Sid` varchar(50) NOT NULL,
  `Score` varchar(50) NOT NULL,
  `DateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `personal`
--

CREATE TABLE `personal` (
  `Member_ID` varchar(50) NOT NULL,
  `Prayer_ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Birthday` date NOT NULL,
  `Address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `personal`
--

INSERT INTO `personal` (`Member_ID`, `Prayer_ID`, `Name`, `Birthday`, `Address`) VALUES
('aaa', 8, '2222', '2023-08-08', '2222'),
('aaa', 9, '444', '2023-08-16', '4444'),
('aaa', 10, 'yu', '2023-08-11', 'yyyy');

-- --------------------------------------------------------

--
-- Table structure for table `poetry`
--

CREATE TABLE `poetry` (
  `Poetry_ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `poetry`
--

INSERT INTO `poetry` (`Poetry_ID`) VALUES
('1'),
('10'),
('11'),
('12'),
('13'),
('14'),
('15'),
('16'),
('17'),
('18'),
('19'),
('2'),
('20'),
('21'),
('22'),
('23'),
('24'),
('25'),
('26'),
('27'),
('28'),
('29'),
('3'),
('30'),
('31'),
('32'),
('33'),
('34'),
('35'),
('36'),
('37'),
('38'),
('39'),
('4'),
('40'),
('41'),
('42'),
('43'),
('44'),
('45'),
('46'),
('47'),
('48'),
('49'),
('5'),
('50'),
('51'),
('52'),
('53'),
('54'),
('55'),
('56'),
('57'),
('58'),
('59'),
('6'),
('60'),
('7'),
('8'),
('9');

-- --------------------------------------------------------

--
-- Table structure for table `pray`
--

CREATE TABLE `pray` (
  `God_ID` varchar(50) NOT NULL,
  `Type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pray`
--

INSERT INTO `pray` (`God_ID`, `Type`) VALUES
('1', 'Mazu'),
('2', 'Love'),
('3', 'Study');

-- --------------------------------------------------------

--
-- Table structure for table `study_light`
--

CREATE TABLE `study_light` (
  `Member_ID` int(11) DEFAULT NULL,
  `All_Light` int(50) NOT NULL,
  `LightLocation` varchar(50) NOT NULL,
  `Datetime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `study_light`
--

INSERT INTO `study_light` (`Member_ID`, `All_Light`, `LightLocation`, `Datetime`) VALUES
(NULL, 1, 'A1', NULL),
(NULL, 2, 'A2', NULL),
(NULL, 3, 'A3', NULL),
(NULL, 4, 'A4', NULL),
(NULL, 5, 'A5', NULL),
(NULL, 6, 'A6', NULL),
(NULL, 7, 'A7', NULL),
(NULL, 8, 'A8', NULL),
(NULL, 9, 'A9', NULL),
(NULL, 10, 'A10', NULL),
(NULL, 11, 'A11', NULL),
(NULL, 12, 'A12', NULL),
(NULL, 13, 'A13', NULL),
(NULL, 14, 'A14', NULL),
(NULL, 15, 'A15', NULL),
(NULL, 16, 'A16', NULL),
(NULL, 17, 'A17', NULL),
(NULL, 18, 'A18', NULL),
(NULL, 19, 'A19', NULL),
(NULL, 20, 'A20', NULL),
(NULL, 21, 'A21', NULL),
(NULL, 22, 'A22', NULL),
(NULL, 23, 'A23', NULL),
(NULL, 24, 'A24', NULL),
(NULL, 25, 'A25', NULL),
(NULL, 26, 'A26', NULL),
(NULL, 27, 'A27', NULL),
(NULL, 28, 'A28', NULL),
(NULL, 29, 'A29', NULL),
(NULL, 30, 'A30', NULL),
(NULL, 31, 'B1', NULL),
(NULL, 32, 'B2', NULL),
(NULL, 33, 'B3', NULL),
(NULL, 34, 'B4', NULL),
(NULL, 35, 'B5', NULL),
(NULL, 36, 'B6', NULL),
(NULL, 37, 'B7', NULL),
(NULL, 38, 'B8', NULL),
(NULL, 39, 'B9', NULL),
(NULL, 40, 'B10', NULL),
(NULL, 41, 'B11', NULL),
(NULL, 42, 'B12', NULL),
(NULL, 43, 'B13', NULL),
(NULL, 44, 'B14', NULL),
(NULL, 45, 'B15', NULL),
(NULL, 46, 'B16', NULL),
(NULL, 47, 'B17', NULL),
(NULL, 48, 'B18', NULL),
(NULL, 49, 'B19', NULL),
(NULL, 50, 'B20', NULL),
(NULL, 51, 'B21', NULL),
(NULL, 52, 'B22', NULL),
(NULL, 53, 'B23', NULL),
(NULL, 54, 'B24', NULL),
(NULL, 55, 'B25', NULL),
(NULL, 56, 'B26', NULL),
(NULL, 57, 'B27', NULL),
(NULL, 58, 'B28', NULL),
(NULL, 59, 'B29', NULL),
(NULL, 60, 'B30', NULL),
(NULL, 61, 'C1', NULL),
(NULL, 62, 'C2', NULL),
(NULL, 63, 'C3', NULL),
(NULL, 64, 'C4', NULL),
(NULL, 65, 'C6', NULL),
(NULL, 66, 'C6', NULL),
(NULL, 67, 'C7', NULL),
(NULL, 68, 'C8', NULL),
(NULL, 69, 'C9', NULL),
(NULL, 70, 'C10', NULL),
(NULL, 71, 'C11', NULL),
(NULL, 72, 'C12', NULL),
(NULL, 73, 'C13', NULL),
(NULL, 74, 'C14', NULL),
(NULL, 75, 'C15', NULL),
(NULL, 76, 'C16', NULL),
(NULL, 77, 'C17', NULL),
(NULL, 78, 'C18', NULL),
(NULL, 79, 'C19', NULL),
(NULL, 80, 'C20', NULL),
(NULL, 81, 'C21', NULL),
(NULL, 82, 'C22', NULL),
(NULL, 83, 'C23', NULL),
(NULL, 84, 'C24', NULL),
(NULL, 85, 'C25', NULL),
(NULL, 86, 'C26', NULL),
(NULL, 87, 'C27', NULL),
(NULL, 88, 'C28', NULL),
(NULL, 89, 'C29', NULL),
(NULL, 90, 'C30', NULL),
(NULL, 91, 'D1', NULL),
(NULL, 92, 'D2', NULL),
(NULL, 93, 'D3', NULL),
(NULL, 94, 'D4', NULL),
(NULL, 95, 'D5', NULL),
(NULL, 96, 'D6', NULL),
(NULL, 97, 'D7', NULL),
(NULL, 98, 'D8', NULL),
(NULL, 99, 'D9', NULL),
(NULL, 100, 'D10', NULL),
(NULL, 101, 'D11', NULL),
(NULL, 102, 'D12', NULL),
(NULL, 103, 'D13', NULL),
(NULL, 104, 'D14', NULL),
(NULL, 105, 'D15', NULL),
(NULL, 106, 'D16', NULL),
(NULL, 107, 'D17', NULL),
(NULL, 108, 'D18', NULL),
(NULL, 109, 'D19', NULL),
(NULL, 110, 'D20', NULL),
(NULL, 111, 'D21', NULL),
(NULL, 112, 'D22', NULL),
(NULL, 113, 'D23', NULL),
(NULL, 114, 'D24', NULL),
(NULL, 115, 'D25', NULL),
(NULL, 116, 'D26', NULL),
(NULL, 117, 'D27', NULL),
(NULL, 118, 'D28', NULL),
(NULL, 119, 'D29', NULL),
(NULL, 120, 'D30', NULL),
(NULL, 121, 'E1', NULL),
(NULL, 122, 'E2', NULL),
(NULL, 123, 'E3', NULL),
(NULL, 124, 'E4', NULL),
(NULL, 125, 'E5', NULL),
(NULL, 126, 'E6', NULL),
(NULL, 127, 'E7', NULL),
(NULL, 128, 'E8', NULL),
(NULL, 129, 'E9', NULL),
(NULL, 130, 'E10', NULL),
(NULL, 131, 'E11', NULL),
(NULL, 132, 'E12', NULL),
(NULL, 133, 'E13', NULL),
(NULL, 134, 'E14', NULL),
(NULL, 135, 'E15', NULL),
(NULL, 136, 'E16', NULL),
(NULL, 137, 'E17', NULL),
(NULL, 138, 'E18', NULL),
(NULL, 139, 'E19', NULL),
(NULL, 140, 'E20', NULL),
(NULL, 141, 'E21', NULL),
(NULL, 142, 'E22', NULL),
(NULL, 143, 'E23', NULL),
(NULL, 144, 'E24', NULL),
(NULL, 145, 'E25', NULL),
(NULL, 146, 'E26', NULL),
(NULL, 147, 'E27', NULL),
(NULL, 148, 'E28', NULL),
(NULL, 149, 'E29', NULL),
(NULL, 150, 'E30', NULL),
(NULL, 151, 'F1', NULL),
(NULL, 152, 'F2', NULL),
(NULL, 153, 'F3', NULL),
(NULL, 154, 'F4', NULL),
(NULL, 155, 'F5', NULL),
(NULL, 156, 'F6', NULL),
(NULL, 157, 'F7', NULL),
(NULL, 158, 'F8', NULL),
(NULL, 159, 'F9', NULL),
(NULL, 160, 'F10', NULL),
(NULL, 161, 'F11', NULL),
(NULL, 162, 'F12', NULL),
(NULL, 163, 'F13', NULL),
(NULL, 164, 'F14', NULL),
(NULL, 165, 'F15', NULL),
(NULL, 166, 'F16', NULL),
(NULL, 167, 'F17', NULL),
(NULL, 168, 'F18', NULL),
(NULL, 169, 'F19', NULL),
(NULL, 170, 'F20', NULL),
(NULL, 171, 'F21', NULL),
(NULL, 172, 'F22', NULL),
(NULL, 173, 'F23', NULL),
(NULL, 174, 'F24', NULL),
(NULL, 175, 'F25', NULL),
(NULL, 176, 'F26', NULL),
(NULL, 177, 'F27', NULL),
(NULL, 178, 'F28', NULL),
(NULL, 179, 'F29', NULL),
(NULL, 180, 'F30', NULL),
(NULL, 181, 'G1', NULL),
(NULL, 182, 'G2', NULL),
(NULL, 183, 'G3', NULL),
(NULL, 184, 'G4', NULL),
(NULL, 185, 'G5', NULL),
(NULL, 186, 'G6', NULL),
(NULL, 187, 'G7', NULL),
(NULL, 188, 'G8', NULL),
(NULL, 189, 'G9', NULL),
(NULL, 190, 'G10', NULL),
(NULL, 191, 'G11', NULL),
(NULL, 192, 'G12', NULL),
(NULL, 193, 'G13', NULL),
(NULL, 194, 'G14', NULL),
(NULL, 195, 'G15', NULL),
(NULL, 196, 'G16', NULL),
(NULL, 197, 'G17', NULL),
(NULL, 198, 'G18', NULL),
(NULL, 199, 'G19', NULL),
(NULL, 200, 'G20', NULL),
(NULL, 201, 'G21', NULL),
(NULL, 202, 'G22', NULL),
(NULL, 203, 'G23', NULL),
(NULL, 204, 'G24', NULL),
(NULL, 205, 'G25', NULL),
(NULL, 206, 'G26', NULL),
(NULL, 207, 'G27', NULL),
(NULL, 208, 'G28', NULL),
(NULL, 209, 'G29', NULL),
(NULL, 210, 'G30', NULL),
(NULL, 211, 'H1', NULL),
(NULL, 212, 'H2', NULL),
(NULL, 213, 'H3', NULL),
(NULL, 214, 'H4', NULL),
(NULL, 215, 'H5', NULL),
(NULL, 216, 'H6', NULL),
(NULL, 217, 'H7', NULL),
(NULL, 218, 'H8', NULL),
(NULL, 219, 'H9', NULL),
(NULL, 220, 'H10', NULL),
(NULL, 221, 'H11', NULL),
(NULL, 222, 'H12', NULL),
(NULL, 223, 'H13', NULL),
(NULL, 224, 'H14', NULL),
(NULL, 225, 'H15', NULL),
(NULL, 226, 'H16', NULL),
(NULL, 227, 'H17', NULL),
(NULL, 228, 'H18', NULL),
(NULL, 229, 'H19', NULL),
(NULL, 230, 'H20', NULL),
(NULL, 231, 'H21', NULL),
(NULL, 232, 'H22', NULL),
(NULL, 233, 'H23', NULL),
(NULL, 234, 'H24', NULL),
(NULL, 235, 'H25', NULL),
(NULL, 236, 'H26', NULL),
(NULL, 237, 'H27', NULL),
(NULL, 238, 'H28', NULL),
(NULL, 239, 'H29', NULL),
(NULL, 240, 'H30', NULL),
(NULL, 241, 'I1', NULL),
(NULL, 242, 'I2', NULL),
(NULL, 243, 'I3', NULL),
(NULL, 244, 'I4', NULL),
(NULL, 245, 'I5', NULL),
(NULL, 246, 'I6', NULL),
(NULL, 247, 'I7', NULL),
(NULL, 248, 'I8', NULL),
(NULL, 249, 'I9', NULL),
(NULL, 250, 'I10', NULL),
(NULL, 251, 'I11', NULL),
(NULL, 252, 'I12', NULL),
(NULL, 253, 'I13', NULL),
(NULL, 254, 'I14', NULL),
(NULL, 255, 'I15', NULL),
(NULL, 256, 'I16', NULL),
(NULL, 257, 'I17', NULL),
(NULL, 258, 'I18', NULL),
(NULL, 259, 'I19', NULL),
(NULL, 260, 'I20', NULL),
(NULL, 261, 'I21', NULL),
(NULL, 262, 'I22', NULL),
(NULL, 263, 'I23', NULL),
(NULL, 264, 'I24', NULL),
(NULL, 265, 'I25', NULL),
(NULL, 266, 'I26', NULL),
(NULL, 267, 'I27', NULL),
(NULL, 268, 'I28', NULL),
(NULL, 269, 'I29', NULL),
(NULL, 270, 'I30', NULL),
(NULL, 271, 'J1', NULL),
(NULL, 272, 'J2', NULL),
(NULL, 273, 'J3', NULL),
(NULL, 274, 'J4', NULL),
(NULL, 275, 'J5', NULL),
(NULL, 276, 'J6', NULL),
(NULL, 277, 'J7', NULL),
(NULL, 278, 'J8', NULL),
(NULL, 279, 'J9', NULL),
(NULL, 280, 'J10', NULL),
(NULL, 281, 'J11', NULL),
(NULL, 282, 'J12', NULL),
(NULL, 283, 'J13', NULL),
(NULL, 284, 'J14', NULL),
(NULL, 285, 'J15', NULL),
(NULL, 286, 'J16', NULL),
(NULL, 287, 'J17', NULL),
(NULL, 288, 'J18', NULL),
(NULL, 289, 'J19', NULL),
(NULL, 290, 'J20', NULL),
(NULL, 291, 'J21', NULL),
(NULL, 292, 'J22', NULL),
(NULL, 293, 'J23', NULL),
(NULL, 294, 'J24', NULL),
(NULL, 295, 'J25', NULL),
(NULL, 296, 'J26', NULL),
(NULL, 297, 'J27', NULL),
(NULL, 298, 'J28', NULL),
(NULL, 299, 'J29', NULL),
(NULL, 300, 'J30', NULL),
(NULL, 301, 'K1', NULL),
(NULL, 302, 'K2', NULL),
(NULL, 303, 'K3', NULL),
(NULL, 304, 'K4', NULL),
(NULL, 305, 'K5', NULL),
(NULL, 306, 'K6', NULL),
(NULL, 307, 'K7', NULL),
(NULL, 308, 'K8', NULL),
(NULL, 309, 'K9', NULL),
(NULL, 310, 'K10', NULL),
(NULL, 311, 'K11', NULL),
(NULL, 312, 'K12', NULL),
(NULL, 313, 'K13', NULL),
(NULL, 314, 'K14', NULL),
(NULL, 315, 'K15', NULL),
(NULL, 316, 'K16', NULL),
(NULL, 317, 'K17', NULL),
(NULL, 318, 'K18', NULL),
(NULL, 319, 'K19', NULL),
(NULL, 320, 'K20', NULL),
(NULL, 321, 'K21', NULL),
(NULL, 322, 'K22', NULL),
(NULL, 323, 'K23', NULL),
(NULL, 324, 'K24', NULL),
(NULL, 325, 'K25', NULL),
(NULL, 326, 'K26', NULL),
(NULL, 327, 'K27', NULL),
(NULL, 328, 'K28', NULL),
(NULL, 329, 'K29', NULL),
(NULL, 330, 'K30', NULL),
(NULL, 331, 'L1', NULL),
(NULL, 332, 'L2', NULL),
(NULL, 333, 'L3', NULL),
(NULL, 334, 'L4', NULL),
(NULL, 335, 'L5', NULL),
(NULL, 336, 'L6', NULL),
(NULL, 337, 'L7', NULL),
(NULL, 338, 'L8', NULL),
(NULL, 339, 'L9', NULL),
(NULL, 340, 'L10', NULL),
(NULL, 341, 'L11', NULL),
(NULL, 342, 'L12', NULL),
(NULL, 343, 'L13', NULL),
(NULL, 344, 'L14', NULL),
(NULL, 345, 'L15', NULL),
(NULL, 346, 'L16', NULL),
(NULL, 347, 'L17', NULL),
(NULL, 348, 'L18', NULL),
(NULL, 349, 'L19', NULL),
(NULL, 350, 'L20', NULL),
(NULL, 351, 'L21', NULL),
(NULL, 352, 'L22', NULL),
(NULL, 353, 'L23', NULL),
(NULL, 354, 'L24', NULL),
(NULL, 355, 'L25', NULL),
(NULL, 356, 'L26', NULL),
(NULL, 357, 'L27', NULL),
(NULL, 358, 'L28', NULL),
(NULL, 359, 'L29', NULL),
(NULL, 360, 'L30', NULL),
(NULL, 361, 'M1', NULL),
(NULL, 362, 'M2', NULL),
(NULL, 363, 'M3', NULL),
(NULL, 364, 'M4', NULL),
(NULL, 365, 'M5', NULL),
(NULL, 366, 'M6', NULL),
(NULL, 367, 'M7', NULL),
(NULL, 368, 'M8', NULL),
(NULL, 369, 'M9', NULL),
(NULL, 370, 'M10', NULL),
(NULL, 371, 'M11', NULL),
(NULL, 372, 'M12', NULL),
(NULL, 373, 'M13', NULL),
(NULL, 374, 'M14', NULL),
(NULL, 375, 'M15', NULL),
(NULL, 376, 'M16', NULL),
(NULL, 377, 'M17', NULL),
(NULL, 378, 'M18', NULL),
(NULL, 379, 'M19', NULL),
(NULL, 380, 'M20', NULL),
(NULL, 381, 'M21', NULL),
(NULL, 382, 'M22', NULL),
(NULL, 383, 'M23', NULL),
(NULL, 384, 'M24', NULL),
(NULL, 385, 'M25', NULL),
(NULL, 386, 'M26', NULL),
(NULL, 387, 'M27', NULL),
(NULL, 388, 'M28', NULL),
(NULL, 389, 'M29', NULL),
(NULL, 390, 'M30', NULL),
(NULL, 391, 'N1', NULL),
(NULL, 392, 'N2', NULL),
(NULL, 393, 'N3', NULL),
(NULL, 394, 'N4', NULL),
(NULL, 395, 'N5', NULL),
(NULL, 396, 'N6', NULL),
(NULL, 397, 'N7', NULL),
(NULL, 398, 'N8', NULL),
(NULL, 399, 'N9', NULL),
(NULL, 400, 'N10', NULL),
(NULL, 401, 'N11', NULL),
(NULL, 402, 'N12', NULL),
(NULL, 403, 'N13', NULL),
(NULL, 404, 'N14', NULL),
(NULL, 405, 'N15', NULL),
(NULL, 406, 'N16', NULL),
(NULL, 407, 'N17', NULL),
(NULL, 408, 'N18', NULL),
(NULL, 409, 'N19', NULL),
(NULL, 410, 'N20', NULL),
(NULL, 411, 'N21', NULL),
(NULL, 412, 'N22', NULL),
(NULL, 413, 'N23', NULL),
(NULL, 414, 'N24', NULL),
(NULL, 415, 'N25', NULL),
(NULL, 416, 'N26', NULL),
(NULL, 417, 'N27', NULL),
(NULL, 418, 'N28', NULL),
(NULL, 419, 'N29', NULL),
(NULL, 420, 'N30', NULL),
(NULL, 421, 'O1', NULL),
(NULL, 422, 'O2', NULL),
(NULL, 423, 'O3', NULL),
(NULL, 424, 'O4', NULL),
(NULL, 425, 'O5', NULL),
(NULL, 426, 'O6', NULL),
(NULL, 427, 'O7', NULL),
(NULL, 428, 'O8', NULL),
(NULL, 429, 'O9', NULL),
(NULL, 430, 'O10', NULL),
(NULL, 431, 'O11', NULL),
(NULL, 432, 'O12', NULL),
(NULL, 433, 'O13', NULL),
(NULL, 434, 'O14', NULL),
(NULL, 435, 'O15', NULL),
(NULL, 436, 'O16', NULL),
(NULL, 437, 'O17', NULL),
(NULL, 438, 'O18', NULL),
(NULL, 439, 'O19', NULL),
(NULL, 440, 'O20', NULL),
(NULL, 441, 'O21', NULL),
(NULL, 442, 'O22', NULL),
(NULL, 443, 'O23', NULL),
(NULL, 444, 'O24', NULL),
(NULL, 445, 'O25', NULL),
(NULL, 446, 'O26', NULL),
(NULL, 447, 'O27', NULL),
(NULL, 448, 'O28', NULL),
(NULL, 449, 'O29', NULL),
(NULL, 450, 'O30', NULL),
(NULL, 451, 'P1', NULL),
(NULL, 452, 'P2', NULL),
(NULL, 453, 'P3', NULL),
(NULL, 454, 'P4', NULL),
(NULL, 455, 'P5', NULL),
(NULL, 456, 'P6', NULL),
(NULL, 457, 'P7', NULL),
(NULL, 458, 'P8', NULL),
(NULL, 459, 'P9', NULL),
(NULL, 460, 'P10', NULL),
(NULL, 461, 'P11', NULL),
(NULL, 462, 'P12', NULL),
(NULL, 463, 'P13', NULL),
(NULL, 464, 'P14', NULL),
(NULL, 465, 'P15', NULL),
(NULL, 466, 'P16', NULL),
(NULL, 467, 'P17', NULL),
(NULL, 468, 'P18', NULL),
(NULL, 469, 'P19', NULL),
(NULL, 470, 'P20', NULL),
(NULL, 471, 'P21', NULL),
(NULL, 472, 'P22', NULL),
(NULL, 473, 'P23', NULL),
(NULL, 474, 'P24', NULL),
(NULL, 475, 'P25', NULL),
(NULL, 476, 'P26', NULL),
(NULL, 477, 'P27', NULL),
(NULL, 478, 'P28', NULL),
(NULL, 479, 'P29', NULL),
(NULL, 480, 'P30', NULL),
(NULL, 481, 'Q1', NULL),
(NULL, 482, 'Q2', NULL),
(NULL, 483, 'Q3', NULL),
(NULL, 484, 'Q4', NULL),
(NULL, 485, 'Q5', NULL),
(NULL, 486, 'Q6', NULL),
(NULL, 487, 'Q7', NULL),
(NULL, 488, 'Q8', NULL),
(NULL, 489, 'Q9', NULL),
(NULL, 490, 'Q10', NULL),
(NULL, 491, 'Q11', NULL),
(NULL, 492, 'Q12', NULL),
(NULL, 493, 'Q13', NULL),
(NULL, 494, 'Q14', NULL),
(NULL, 495, 'Q15', NULL),
(NULL, 496, 'Q16', NULL),
(NULL, 497, 'Q17', NULL),
(NULL, 498, 'Q18', NULL),
(NULL, 499, 'Q19', NULL),
(NULL, 500, 'Q20', NULL),
(NULL, 501, 'Q21', NULL),
(NULL, 502, 'Q22', NULL),
(NULL, 503, 'Q23', NULL),
(NULL, 504, 'Q24', NULL),
(NULL, 505, 'Q25', NULL),
(NULL, 506, 'Q26', NULL),
(NULL, 507, 'Q27', NULL),
(NULL, 508, 'Q28', NULL),
(NULL, 509, 'Q29', NULL),
(NULL, 510, 'Q30', NULL),
(NULL, 511, 'R1', NULL),
(NULL, 512, 'R2', NULL),
(NULL, 513, 'R3', NULL),
(NULL, 514, 'R4', NULL),
(NULL, 515, 'R5', NULL),
(NULL, 516, 'R6', NULL),
(NULL, 517, 'R7', NULL),
(NULL, 518, 'R8', NULL),
(NULL, 519, 'R9', NULL),
(NULL, 520, 'R10', NULL),
(NULL, 521, 'R11', NULL),
(NULL, 522, 'R12', NULL),
(NULL, 523, 'R13', NULL),
(NULL, 524, 'R14', NULL),
(NULL, 525, 'R15', NULL),
(NULL, 526, 'R16', NULL),
(NULL, 527, 'R17', NULL),
(NULL, 528, 'R18', NULL),
(NULL, 529, 'R19', NULL),
(NULL, 530, 'R20', NULL),
(NULL, 531, 'R21', NULL),
(NULL, 532, 'R22', NULL),
(NULL, 533, 'R23', NULL),
(NULL, 534, 'R24', NULL),
(NULL, 535, 'R25', NULL),
(NULL, 536, 'R26', NULL),
(NULL, 537, 'R27', NULL),
(NULL, 538, 'R28', NULL),
(NULL, 539, 'R29', NULL),
(NULL, 540, 'R30', NULL),
(NULL, 541, 'S1', NULL),
(NULL, 542, 'S2', NULL),
(NULL, 543, 'S3', NULL),
(NULL, 544, 'S4', NULL),
(NULL, 545, 'S5', NULL),
(NULL, 546, 'S6', NULL),
(NULL, 547, 'S7', NULL),
(NULL, 548, 'S8', NULL),
(NULL, 549, 'S9', NULL),
(NULL, 550, 'S10', NULL),
(NULL, 551, 'S11', NULL),
(NULL, 552, 'S12', NULL),
(NULL, 553, 'S13', NULL),
(NULL, 554, 'S14', NULL),
(NULL, 555, 'S15', NULL),
(NULL, 556, 'S16', NULL),
(NULL, 557, 'S17', NULL),
(NULL, 558, 'S18', NULL),
(NULL, 559, 'S19', NULL),
(NULL, 560, 'S20', NULL),
(NULL, 561, 'S21', NULL),
(NULL, 562, 'S22', NULL),
(NULL, 563, 'S23', NULL),
(NULL, 564, 'S24', NULL),
(NULL, 565, 'S25', NULL),
(NULL, 566, 'S26', NULL),
(NULL, 567, 'S27', NULL),
(NULL, 568, 'S28', NULL),
(NULL, 569, 'S29', NULL),
(NULL, 570, 'S30', NULL),
(NULL, 571, 'T1', NULL),
(NULL, 572, 'T2', NULL),
(NULL, 573, 'T3', NULL),
(NULL, 574, 'T4', NULL),
(NULL, 575, 'T5', NULL),
(NULL, 576, 'T6', NULL),
(NULL, 577, 'T7', NULL),
(NULL, 578, 'T8', NULL),
(NULL, 579, 'T9', NULL),
(NULL, 580, 'T10', NULL),
(NULL, 581, 'T11', NULL),
(NULL, 582, 'T12', NULL),
(NULL, 583, 'T13', NULL),
(NULL, 584, 'T14', NULL),
(NULL, 585, 'T15', NULL),
(NULL, 586, 'T16', NULL),
(NULL, 587, 'T17', NULL),
(NULL, 588, 'T18', NULL),
(NULL, 589, 'T19', NULL),
(NULL, 590, 'T20', NULL),
(NULL, 591, 'T21', NULL),
(NULL, 592, 'T22', NULL),
(NULL, 593, 'T23', NULL),
(NULL, 594, 'T24', NULL),
(NULL, 595, 'T25', NULL),
(NULL, 596, 'T26', NULL),
(NULL, 597, 'T27', NULL),
(NULL, 598, 'T28', NULL),
(NULL, 599, 'T29', NULL),
(NULL, 600, 'T30', NULL),
(NULL, 601, 'U1', NULL),
(NULL, 602, 'U2', NULL),
(NULL, 603, 'U3', NULL),
(NULL, 604, 'U4', NULL),
(NULL, 605, 'U5', NULL),
(NULL, 606, 'U6', NULL),
(NULL, 607, 'U7', NULL),
(NULL, 608, 'U8', NULL),
(NULL, 609, 'U9', NULL),
(NULL, 610, 'U10', NULL),
(NULL, 611, 'U11', NULL),
(NULL, 612, 'U12', NULL),
(NULL, 613, 'U13', NULL),
(NULL, 614, 'U14', NULL),
(NULL, 615, 'U15', NULL),
(NULL, 616, 'U16', NULL),
(NULL, 617, 'U17', NULL),
(NULL, 618, 'U18', NULL),
(NULL, 619, 'U19', NULL),
(NULL, 620, 'U20', NULL),
(NULL, 621, 'U21', NULL),
(NULL, 622, 'U22', NULL),
(NULL, 623, 'U23', NULL),
(NULL, 624, 'U24', NULL),
(NULL, 625, 'U25', NULL),
(NULL, 626, 'U26', NULL),
(NULL, 627, 'U27', NULL),
(NULL, 628, 'U28', NULL),
(NULL, 629, 'U29', NULL),
(NULL, 630, 'U30', NULL),
(NULL, 631, 'V1', NULL),
(NULL, 632, 'V2', NULL),
(NULL, 633, 'V3', NULL),
(NULL, 634, 'V4', NULL),
(NULL, 635, 'V5', NULL),
(NULL, 636, 'V6', NULL),
(NULL, 637, 'V7', NULL),
(NULL, 638, 'V8', NULL),
(NULL, 639, 'V9', NULL),
(NULL, 640, 'V10', NULL),
(NULL, 641, 'V11', NULL),
(NULL, 642, 'V12', NULL),
(NULL, 643, 'V13', NULL),
(NULL, 644, 'V14', NULL),
(NULL, 645, 'V15', NULL),
(NULL, 646, 'V16', NULL),
(NULL, 647, 'V17', NULL),
(NULL, 648, 'V18', NULL),
(NULL, 649, 'V19', NULL),
(NULL, 650, 'V20', NULL),
(NULL, 651, 'V21', NULL),
(NULL, 652, 'V22', NULL),
(NULL, 653, 'V23', NULL),
(NULL, 654, 'V24', NULL),
(NULL, 655, 'V25', NULL),
(NULL, 656, 'V26', NULL),
(NULL, 657, 'V27', NULL),
(NULL, 658, 'V28', NULL),
(NULL, 659, 'V29', NULL),
(NULL, 660, 'V30', NULL),
(NULL, 661, 'W1', NULL),
(NULL, 662, 'W2', NULL),
(NULL, 663, 'W3', NULL),
(NULL, 664, 'W4', NULL),
(NULL, 665, 'W5', NULL),
(NULL, 666, 'W6', NULL),
(NULL, 667, 'W7', NULL),
(NULL, 668, 'W8', NULL),
(NULL, 669, 'W9', NULL),
(NULL, 670, 'W10', NULL),
(NULL, 671, 'W11', NULL),
(NULL, 672, 'W12', NULL),
(NULL, 673, 'W13', NULL),
(NULL, 674, 'W14', NULL),
(NULL, 675, 'W15', NULL),
(NULL, 676, 'W16', NULL),
(NULL, 677, 'W17', NULL),
(NULL, 678, 'W18', NULL),
(NULL, 679, 'W19', NULL),
(NULL, 680, 'W20', NULL),
(NULL, 681, 'W21', NULL),
(NULL, 682, 'W22', NULL),
(NULL, 683, 'W23', NULL),
(NULL, 684, 'W24', NULL),
(NULL, 685, 'W25', NULL),
(NULL, 686, 'W26', NULL),
(NULL, 687, 'W27', NULL),
(NULL, 688, 'W28', NULL),
(NULL, 689, 'W29', NULL),
(NULL, 690, 'W30', NULL),
(NULL, 691, 'X1', NULL),
(NULL, 692, 'X2', NULL),
(NULL, 693, 'X3', NULL),
(NULL, 694, 'X4', NULL),
(NULL, 695, 'X5', NULL),
(NULL, 696, 'X6', NULL),
(NULL, 697, 'X7', NULL),
(NULL, 698, 'X8', NULL),
(NULL, 699, 'X9', NULL),
(NULL, 700, 'X10', NULL),
(NULL, 701, 'X11', NULL),
(NULL, 702, 'X12', NULL),
(NULL, 703, 'X13', NULL),
(NULL, 704, 'X14', NULL),
(NULL, 705, 'X15', NULL),
(NULL, 706, 'X16', NULL),
(NULL, 707, 'X17', NULL),
(NULL, 708, 'X18', NULL),
(NULL, 709, 'X19', NULL),
(NULL, 710, 'X20', NULL),
(NULL, 711, 'X21', NULL),
(NULL, 712, 'X22', NULL),
(NULL, 713, 'X23', NULL),
(NULL, 714, 'X24', NULL),
(NULL, 715, 'X25', NULL),
(NULL, 716, 'X26', NULL),
(NULL, 717, 'X27', NULL),
(NULL, 718, 'X28', NULL),
(NULL, 719, 'X29', NULL),
(NULL, 720, 'X30', NULL),
(NULL, 721, 'Y1', NULL),
(NULL, 722, 'Y2', NULL),
(NULL, 723, 'Y3', NULL),
(NULL, 724, 'Y4', NULL),
(NULL, 725, 'Y5', NULL),
(NULL, 726, 'Y6', NULL),
(NULL, 727, 'Y7', NULL),
(NULL, 728, 'Y8', NULL),
(NULL, 729, 'Y9', NULL),
(NULL, 730, 'Y10', NULL),
(NULL, 731, 'Y11', NULL),
(NULL, 732, 'Y12', NULL),
(NULL, 733, 'Y13', NULL),
(NULL, 734, 'Y14', NULL),
(NULL, 735, 'Y15', NULL),
(NULL, 736, 'Y16', NULL),
(NULL, 737, 'Y17', NULL),
(NULL, 738, 'Y18', NULL),
(NULL, 739, 'Y19', NULL),
(NULL, 740, 'Y20', NULL),
(NULL, 741, 'Y21', NULL),
(NULL, 742, 'Y22', NULL),
(NULL, 743, 'Y23', NULL),
(NULL, 744, 'Y24', NULL),
(NULL, 745, 'Y25', NULL),
(NULL, 746, 'Y26', NULL),
(NULL, 747, 'Y27', NULL),
(NULL, 748, 'Y28', NULL),
(NULL, 749, 'Y29', NULL),
(NULL, 750, 'Y30', NULL),
(NULL, 751, 'Z1', NULL),
(NULL, 752, 'Z2', NULL),
(NULL, 753, 'Z3', NULL),
(NULL, 754, 'Z4', NULL),
(NULL, 755, 'Z5', NULL),
(NULL, 756, 'Z6', NULL),
(NULL, 757, 'Z7', NULL),
(NULL, 758, 'Z8', NULL),
(NULL, 759, 'Z9', NULL),
(NULL, 760, 'Z10', NULL),
(NULL, 761, 'Z11', NULL),
(NULL, 762, 'Z12', NULL),
(NULL, 763, 'Z13', NULL),
(NULL, 764, 'Z14', NULL),
(NULL, 765, 'Z15', NULL),
(NULL, 766, 'Z16', NULL),
(NULL, 767, 'Z17', NULL),
(NULL, 768, 'Z18', NULL),
(NULL, 769, 'Z19', NULL),
(NULL, 770, 'Z20', NULL),
(NULL, 771, 'Z21', NULL),
(NULL, 772, 'Z22', NULL),
(NULL, 773, 'Z23', NULL),
(NULL, 774, 'Z24', NULL),
(NULL, 775, 'Z25', NULL),
(NULL, 776, 'Z26', NULL),
(NULL, 777, 'Z27', NULL),
(NULL, 778, 'Z28', NULL),
(NULL, 779, 'Z29', NULL),
(NULL, 780, 'Z30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `study_light_toewr`
--

CREATE TABLE `study_light_toewr` (
  `LightTower` int(50) NOT NULL,
  `Tower_ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `study_light_toewr`
--

INSERT INTO `study_light_toewr` (`LightTower`, `Tower_ID`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D'),
(5, 'E'),
(6, 'F');

-- --------------------------------------------------------

--
-- Table structure for table `study_ticket`
--

CREATE TABLE `study_ticket` (
  `Member_ID` int(11) NOT NULL,
  `Sid` int(50) NOT NULL,
  `Ticket_ID` varchar(50) NOT NULL,
  `Ticket_Img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `love_light`
--
ALTER TABLE `love_light`
  ADD PRIMARY KEY (`All_Light`);

--
-- Indexes for table `love_light_tower`
--
ALTER TABLE `love_light_tower`
  ADD PRIMARY KEY (`LightTower`);

--
-- Indexes for table `love_redline`
--
ALTER TABLE `love_redline`
  ADD PRIMARY KEY (`SID`);

--
-- Indexes for table `online_character`
--
ALTER TABLE `online_character`
  ADD PRIMARY KEY (`Member_ID`);

--
-- Indexes for table `online_question`
--
ALTER TABLE `online_question`
  ADD PRIMARY KEY (`Question_ID`);

--
-- Indexes for table `online_quiz`
--
ALTER TABLE `online_quiz`
  ADD PRIMARY KEY (`Sid`),
  ADD KEY `Member_ID` (`Member_ID`);

--
-- Indexes for table `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`Prayer_ID`);

--
-- Indexes for table `poetry`
--
ALTER TABLE `poetry`
  ADD PRIMARY KEY (`Poetry_ID`);

--
-- Indexes for table `pray`
--
ALTER TABLE `pray`
  ADD PRIMARY KEY (`God_ID`);

--
-- Indexes for table `study_light`
--
ALTER TABLE `study_light`
  ADD PRIMARY KEY (`All_Light`),
  ADD KEY `Member_ID` (`Member_ID`);

--
-- Indexes for table `study_light_toewr`
--
ALTER TABLE `study_light_toewr`
  ADD PRIMARY KEY (`LightTower`);

--
-- Indexes for table `study_ticket`
--
ALTER TABLE `study_ticket`
  ADD PRIMARY KEY (`Sid`),
  ADD KEY `Member_ID` (`Member_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `love_redline`
--
ALTER TABLE `love_redline`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal`
--
ALTER TABLE `personal`
  MODIFY `Prayer_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `study_light`
--
ALTER TABLE `study_light`
  MODIFY `All_Light` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=781;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `online_character`
--
ALTER TABLE `online_character`
  ADD CONSTRAINT `online_character_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`sid`);

--
-- Constraints for table `online_quiz`
--
ALTER TABLE `online_quiz`
  ADD CONSTRAINT `online_quiz_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`sid`);

--
-- Constraints for table `study_light`
--
ALTER TABLE `study_light`
  ADD CONSTRAINT `study_light_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`sid`);

--
-- Constraints for table `study_ticket`
--
ALTER TABLE `study_ticket`
  ADD CONSTRAINT `study_ticket_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`sid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
