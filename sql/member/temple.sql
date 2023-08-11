-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 11, 2023 at 02:07 PM
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
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `coupon_id` int(11) NOT NULL,
  `coupon_type` varchar(255) NOT NULL,
  `coupon_name` varchar(50) NOT NULL,
  `coupon_value` int(11) NOT NULL,
  `conditions` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`coupon_id`, `coupon_type`, `coupon_name`, `coupon_value`, `conditions`) VALUES
(1, 'TRJ10', '10元折價券', 10, 99),
(2, 'TRJ20', '20元折價券', 20, 199),
(3, 'TRJ30', '30元折價券', 30, 299),
(4, 'TRJ40', '40元折價券', 40, 399),
(5, 'TRJ50', '50元折價券', 50, 499),
(6, 'TRJ60', '60元折價券', 60, 599),
(7, 'TRJ70', '70元折價券', 70, 699),
(8, 'TRJ80', '80元折價券', 80, 799),
(9, 'TRJ90', '90元折價券', 90, 899),
(10, 'TRJ100', '100元折價券', 100, 999),
(11, 'TRJ1000', '1000元折價券', 1000, 1001),
(12, 'TRJ200', '線上測驗全對', 100, 101),
(13, 'TRJ200', '線上測驗參加獎', 200, 201);

-- --------------------------------------------------------

--
-- Table structure for table `coupons_status`
--

CREATE TABLE `coupons_status` (
  `coupon_status_id` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `usage_status` enum('未使用','已使用','已過期') NOT NULL,
  `start_date` date NOT NULL,
  `expiration_date` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coupons_status`
--

INSERT INTO `coupons_status` (`coupon_status_id`, `coupon_id`, `member_id`, `usage_status`, `start_date`, `expiration_date`, `created_at`) VALUES
(6, 8, 1, '未使用', '2023-07-13', '2023-08-12', '2023-08-07 17:15:17'),
(7, 6, 1, '已過期', '2023-07-11', '2023-08-10', '2023-08-07 17:15:17'),
(8, 4, 1, '已使用', '2023-07-08', '2023-08-07', '2023-08-07 17:15:17'),
(9, 3, 1, '已過期', '2023-07-04', '2023-08-03', '2023-08-07 17:15:17'),
(10, 5, 1, '已過期', '2023-06-15', '2023-07-15', '2023-08-07 17:15:17'),
(15, 2, 1, '未使用', '2023-08-08', '2023-09-07', '2023-08-08 13:54:45'),
(72, 5, 1, '未使用', '2023-08-09', '2023-09-08', '2023-08-09 15:19:03'),
(74, 7, 1, '未使用', '2023-08-10', '2023-09-09', '2023-08-10 17:14:51');

-- --------------------------------------------------------

--
-- Table structure for table `daily_signins`
--

CREATE TABLE `daily_signins` (
  `signin_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `signin_date` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `daily_signins`
--

INSERT INTO `daily_signins` (`signin_id`, `member_id`, `signin_date`, `created_at`) VALUES
(1, 1, '2023-08-07 10:42:24', '2023-08-07 10:42:24'),
(103, 1, '2023-08-08 13:35:59', '2023-08-08 13:35:59'),
(161, 1, '2023-08-09 15:19:03', '2023-08-09 15:19:03'),
(180, 1, '2023-08-10 17:14:51', '2023-08-10 17:14:51');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `member_id` int(11) NOT NULL,
  `member_account` varchar(255) NOT NULL,
  `member_password` varchar(255) DEFAULT NULL,
  `member_name` varchar(50) NOT NULL,
  `member_address` varchar(255) NOT NULL,
  `member_phone` varchar(20) DEFAULT NULL,
  `member_birthday` date NOT NULL,
  `member_forum_name` varchar(255) DEFAULT NULL,
  `member_profile` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `member_account`, `member_password`, `member_name`, `member_address`, `member_phone`, `member_birthday`, `member_forum_name`, `member_profile`) VALUES
(1, 'swiftie1202@gmail.com', '$2a$10$BfFRZxSTwgIrBKtyW25gxepy9jtPqt48KUrdmxunj7ArYL.bQZ2Ce', '黃琪涵', '台北市中正區信義路4段15巷8弄3號3樓', '0912151215', '1999-11-01', 'HannahOuO', '58a38a25-caad-48cd-b04a-59e27843bd4c.webp'),
(2, 'mjboyz6@gmail.com', '$2b$10$w./CS5R3g7Vfrc/E3sf31uupWKm11WhrhbK5DNl.dpYVrubSf2Hey', '金牧賢', '新北市土城區土城北街4段125巷7弄11號11樓', '0912151214', '1992-01-29', NULL, NULL),
(3, 'seanthephysicist@gmail.com', '$2b$10$XgxTEBV9dmue3iXHP2Or7eauMr8TSoxrOLcuVvVj6ECbHtMPPXdV2', '南于翔', '新北市土城區三峽大道2段78巷4弄7號7樓', '0936197274', '1982-09-01', NULL, NULL),
(4, 'hao6han@gmail.com', '$2b$10$ZFL8y81rGWCrmUWWU.pqle/kia7wPDmV95EDhpkdYMvO7hb0X.H72', '朴顥瀚', '台北市萬華區延平北路3段30巷7弄19號19樓', '0906375680', '1984-05-23', NULL, NULL),
(5, 'skywalker204@gmail.com', '$2b$10$17/SvJ14ox2b1lhETvz.gOoQ9C7rkrOqHTMDLYksfV/Oqc5bIBh/W', '尹博宇', '台北市中正區和平東路2段127巷3弄16號16樓', '0909718518', '1990-07-25', NULL, NULL),
(6, 'messianic864945@gmail.com', '$2b$10$RzRjF06LsGRUqFJeMjuuFuerDPt2ay06DFL76MAtaejqll7D/Tvku', '木村柏諺', '新北市板橋區淡水西路5段90巷1弄19號19樓', '0940602428', '2002-10-29', NULL, NULL),
(7, 'leo652741@gmail.com', '$2b$10$5Qi1fRYeIiFLm2j65DceNO8bDzRXkkKSeHhCJMuc3XgwBd7APPmJq', '齋藤力中', '新北市平溪區樹林東路1段102巷4弄17號17樓', '0954731016', '1954-06-21', NULL, NULL),
(8, 'johnmayerxxx@gmail.com', '$2b$10$5C4qTIU5j.kdJqEP0d67Q.kBKtTez0pgmXI/8LnJwZteInvLwHqWC', '江浩哲', '新北市萬里區瑞芳路3段64巷2弄19號19樓', '0979104739', '1997-04-22', NULL, NULL),
(9, 'tomridd1e@gmail.com', '$2b$10$R5Ge9E/J1muEhBX7SfYeNuF/vb/7ZqeDSqKvNUFJTeKHt90n9ZXD6', '玄子豪', '新北市土城區淡水西路4段158巷9弄15號15樓', '0923266219', '1981-06-16', NULL, NULL),
(10, 'barbie561129@gmail.com', '$2b$10$T998uwfsH.FPOOLH/lyrQ.h/51F4ON7lNDKfH4IBQIsY817YMHgBG', '余廷元', '台北市松山區忠孝東路3段77巷4弄15號15樓', '0950788428', '1994-01-29', NULL, NULL),
(11, 'scarlett719008@gmail.com', '$2b$10$z07John.bsSQY873lDgFyu2mu15iezaS6gqBUMZ4uH5enSqIwD5Jm', '吳育葶', '台北市松山區松江南路4段162巷9弄8號8樓', '0922338597', '1996-09-25', NULL, NULL),
(12, 'reese286209@gmail.com', '$2b$10$oy0uuFlU3bBC/7mDOAT6gehLXNBWQ1.Ih7PLW59qoSYAPNSE5WC1q', '司馬奎廷', '台北市大同區重慶南路5段88巷7弄13號13樓', '0920185828', '1983-10-08', NULL, NULL),
(13, 'rose347845@gmail.com', '$2b$10$/Zxi8L8/kyGTnSZuMzTIH.N0qdA.3gSbh/4LvMNB37zUpoJrrjdKK', '齊育葶', '台北市內湖區中正西路2段182巷2弄1號1樓', '0979403376', '1970-05-05', NULL, NULL),
(14, 'lily653549@gmail.com', '$2b$10$ICcY0uyROAkx72.sHgHaIel3iVAbHl9BuMwmdQplhM5oEgS1UGk/C', '范宜零', '台北市文山區和平東路5段25巷7弄15號15樓', '0948036261', '1985-11-21', NULL, NULL),
(15, 'bts291411@gmail.com', '$2b$10$cLX7ds2hxMxez1Rq5MQE8uFiYb9XhuydUgXrAAg.3W4udp.LCoOM6', '姜翔允', '新北市新莊區林口南街4段14巷10弄3號3樓', '0933732891', '1976-01-16', NULL, NULL),
(16, 'jill242775@gmail.com', '$2b$10$J5i037JBtMJ/RSRXPHX3NeShMX0zpFjndsYq2u4aYiNHIu/ULhMX6', '柳季庭', '新北市烏來區蘆洲路1段30巷2弄19號19樓', '0925695933', '2005-11-22', NULL, NULL),
(17, 'toyzzz454015@gmail.com', '$2b$10$cK6XTpfVtRmpQ8rGLRTT.uISiWJqE2cy1ddUs6t4F5eFhBKr/MVvS', '洪季庭', '新北市新莊區八里路3段8巷7弄11號11樓', '0918695906', '2010-04-01', NULL, NULL),
(18, 'lilian626758@gmail.com', '$2b$10$o3Sw.ReI5vnEQZ.u9ctzWuhhhIprMuCd90Xq3j8mOfMBXajCcJatS', '唐岱峯', '新北市平溪區新莊路3段9巷10弄4號4樓', '0923696518', '1980-05-15', NULL, NULL),
(19, 'lisa84292@gmail.com', '$2b$10$eCCkuLsSUO259NSrBn4GFeGonFPp6Z6mpc5A1ZItiEnwvNd25xlfO', '柳牧賢', '新北市金山區三重南路5段140巷8弄11號11樓', '0913075031', '1957-07-14', NULL, NULL),
(20, 'taylorswift731913@gmail.com', '$2b$10$W3voxqxXhP9milat2ziMeO/w5Cta7J67qZk8aK8nBOW1nhwyDL/oq', '司馬宜靜', '新北市林口區土城北街1段184巷5弄11號11樓', '0989158763', '1958-09-09', NULL, NULL),
(21, 'harrystyles479832@gmail.com', '$2b$10$XXYGSdSxz/7fIU64TtYssuM.Cqmn0xrHtRUNd8VCpWAjcqbqNXB2S', '陸東旭', '台北市中山區民生東路3段90巷7弄10號10樓', '0944093030', '1986-04-27', NULL, NULL),
(22, 'dwayne953060@gmail.com', '$2b$10$Mwm9SKw/OOAPotHsl/KoSeppkhKbrWwdwmegfFInvjYKiSuyhZiWS', '陸岱峯', '新北市林口區八里路1段129巷4弄7號7樓', '0990866697', '1996-10-05', NULL, NULL),
(23, 'bts574323@gmail.com', '$2b$10$P6Z4JneAeDJFFj.Qcv4oNOm9IXO8/zKjuTfzPhygTJWqKvD.kGCWe', '范子威', '新北市中和區淡水西路3段140巷9弄17號17樓', '0997127767', '1981-10-06', NULL, NULL),
(24, 'lilian772006@gmail.com', '$2b$10$LTE4mf1tcRdApnm31tpxr.3iXkF2dGbhsM.DGyqxVDZ3mfeC0Rhrq', '洪奎廷', '新北市三峽區蘆洲路5段190巷4弄3號3樓', '0953160564', '1985-07-14', NULL, NULL),
(25, 'pokemon294120@gmail.com', '$2b$10$kCiwLxTaqpLcXgGaj/pasOSxRdK0YAGCAjNaNuH1scscvNoJC5IAu', '雷奎廷', '新北市烏來區金山東路4段106巷10弄14號14樓', '0980493342', '1976-06-14', NULL, NULL),
(26, 'angelina367833@gmail.com', '$2b$10$9xyDOoFPWhr3p4OyLWeZIulhxPrESgBKpbuuoW2AZ2olhSmvrGbDu', '彭子威', '台北市大安區和平西路3段184巷2弄19號19樓', '0976552131', '1988-12-21', NULL, NULL),
(27, 'leo56530@gmail.com', '$2b$10$zuW.XkKq5RO1GAaBqIXLW.JdB2AztmxgABZTfh0wNzF1AQCVROHza', '哈書儀', '新北市蘆洲區三重南路5段21巷3弄2號2樓', '0917999335', '1959-09-21', NULL, NULL),
(28, 'rose517209@gmail.com', '$2b$10$Y6C0WWu3i9Gx.ccI7Jz3Oua4Vq5AmiBXm/GGEan9So31yorK4qORS', '唐浩哲', '新北市深坑區蘆洲路4段101巷10弄2號2樓', '0953123463', '1957-10-27', NULL, NULL),
(29, 'tzuyu184515@gmail.com', '$2b$10$3zCRYDIPsFTwj2GqUtMcIul7gvT0cymx8nc4hN3a./FCtVX9xCtJi', '雷東旭', '新北市三重區鶯歌北路2段124巷3弄2號2樓', '0923066438', '1973-02-14', NULL, NULL),
(30, 'ken537747@gmail.com', '$2b$10$oK/SxIn2T8FgoEAWRgLG4.h8rP9rJ5Cd51TUibUtOI2bgROWXyVk2', '姜奎廷', '台北市士林區建國北路5段24巷6弄10號10樓', '0908054639', '2012-04-23', NULL, NULL),
(31, 'kate737104@gmail.com', '$2b$10$efnhg0l3eJB4YKAhdkXi7.vyqeeiRG95/HuHakB6zAE9vhcrDmB4a', '唐翔允', '台北市北投區延平北路5段93巷10弄13號13樓', '0902784342', '1976-04-09', NULL, NULL),
(32, 'lisa739539@gmail.com', '$2b$10$52gB3GZ7/U9UJootZD9mt.QHfi89OzRtfla5SipNdFaTex1RLjz8u', '余書儀', '台北市大同區延平北路5段45巷5弄6號6樓', '0922890071', '1970-07-30', NULL, NULL),
(33, 'reese35709@gmail.com', '$2b$10$7fBhaer1KqvRkRCA7nBjjee1ezLBI.sHo630GA1JCjVW1qJEoRxEm', '雷書儀', '新北市新店區三芝大道2段116巷6弄17號17樓', '0950293635', '1970-12-08', NULL, NULL),
(34, 'reese16106@gmail.com', '$2b$10$B/kmWgxyLhiEA0AMQZdvzeLwQ/zfJswioAFCFcM4kn8SETukbRihu', '雷柏諺', '新北市雙溪區三峽大道3段62巷6弄14號14樓', '0950704410', '2012-10-19', NULL, NULL),
(35, 'keanu318722@gmail.com', '$2b$10$Fl93AppDsd4FSVlzv0MSfua5X31ZmhWfG2G/kj4BNK9ifDGJGO0tq', '郝禹諾', '新北市貢寮區三峽大道2段137巷8弄10號10樓', '0964551328', '1966-04-01', NULL, NULL),
(36, 'bts389596@gmail.com', '$2b$10$SMA4MK7ZILjRx3M02WkYnOHEh87lXBLO6b64ysKS.qi/pkgainI76', '郝博宇', '新北市萬里區三峽大道2段148巷10弄11號11樓', '0907560919', '1957-11-05', NULL, NULL),
(37, 'willywanka761980@gmail.com', '$2b$10$Z8CDr5A21eAn55jSPuiWS.76orkE5OhIYeaSeplm7s.OKsWyEZfBq', '魏季庭', '新北市平溪區瑞芳路2段125巷5弄5號5樓', '0950079403', '1958-06-12', NULL, NULL),
(38, 'potter205436@gmail.com', '$2b$10$wfnt5pkCgZsGacEtwNvtmuW3naAt5zjGIw2LsgIN5Wr0SmQqJYF.C', '魏沛怡', '台北市士林區忠孝東路3段56巷3弄1號1樓', '0959954796', '1954-03-11', NULL, NULL),
(39, 'taylorswift56695@gmail.com', '$2b$10$LnwkbOlhP5aTUWYld9M9x.npbSxmXooalM9bSdRMAswTnFpm1Wfki', '哈書儀', '新北市雙溪區板橋街5段192巷7弄4號4樓', '0983931574', '1992-11-09', NULL, NULL),
(40, 'idris210276@gmail.com', '$2b$10$Q31EfsgPFms.ZK8cTcWu3.zsxi2fCYI87vcV.x0WFpQkE6Ne2dQ1e', '尹偉倫', '新北市三峽區三重南路5段42巷1弄5號5樓', '0964841803', '1994-03-09', NULL, NULL),
(41, 'shinder489085@gmail.com', '$2b$10$xktSZiZkRDtLGTBeFDdbVuMTOKqWmXDmIH3gWhAvik9BidT.qG5we', '陸子豪', '新北市三重區泰山街3段188巷7弄13號13樓', '0957019398', '2012-06-18', NULL, NULL),
(42, 'cate321050@gmail.com', '$2b$10$29njT9sLqc.brnYaTRXDEOQzi6QE2sYazCYBHBAHimKoG8sZRPR4e', '姜于翔', '台北市信義區松江南路1段105巷4弄8號8樓', '0907490458', '1954-11-20', NULL, NULL),
(43, 'tommy48446@gmail.com', '$2b$10$.dqGaq1FgB1SFpffLawD8u9wOxoozfJde3fg3He8fnw7ntaE4A1Wq', '洪宜靜', '台北市內湖區仁愛路4段21巷9弄11號11樓', '0977168352', '2011-02-21', NULL, NULL),
(44, 'pokemon660983@gmail.com', '$2b$10$6ZbpUa4y7zg/b9YuA9QgfeJH83qFmLy/urnNwIQQUP/x4jQLmtULC', '余東旭', '台北市信義區信義路4段168巷8弄6號6樓', '0902788461', '1994-12-22', NULL, NULL),
(45, 'jennifer959089@gmail.com', '$2b$10$b5HzP4gx24wfti3Mc4CYUOGswaJ071pRQVEQdG1MakC/6jf.6DPIK', '翟子威', '台北市萬華區大安路2段10巷8弄5號5樓', '0915929627', '1966-02-10', NULL, NULL),
(46, 'margot87802@gmail.com', '$2b$10$t3G0ytyRvtap8K4ZR4DDIunhfarPrNhxyxo8l5SxEQpi2Xb1zLBbC', '崔子威', '新北市中和區八里路3段129巷3弄14號14樓', '0945023710', '1990-01-14', NULL, NULL),
(47, 'cate295037@gmail.com', '$2b$10$6I6V5tkxdvRzlKh8OgJM5eiQrWJNx.CKH76FLhnrUFTPuBqbp/Wq2', '范禹諾', '台北市北投區中正西路1段88巷5弄5號5樓', '0909886021', '1983-04-10', NULL, NULL),
(48, 'luke197882@gmail.com', '$2b$10$Hc56ar3rev5VEQuBNt9RBO8vJ.DWjyQbQheFHARA6OM8eP/RryZtq', '歐陽偉倫', '新北市瑞芳區鶯歌北路3段69巷3弄8號8樓', '0984316123', '1992-03-15', NULL, NULL),
(49, 'jennifer187942@gmail.com', '$2b$10$apL7xQqacbIgjQ3EpyK/QeciXv1eS3pgvszOEhPugVFpsslb5NYOi', '歐陽浩哲', '新北市金山區金山東路2段106巷1弄7號7樓', '0902386231', '1963-07-20', NULL, NULL),
(50, 'hannah49307@gmail.com', '$2b$10$svaydrTUs.xZVASjGx569.cvX9zgr9qcBn/kTuuC40kf4yDxy2iku', '余顥瀚', '台北市大同區大安路2段35巷4弄10號10樓', '0916978022', '1962-02-14', NULL, NULL),
(51, 'lily499247@gmail.com', '$2b$10$t4chvV./bs/vTdSm9CYdM.Ck2sg3drAfYk8rYmUnrkdbBLS3N3FHi', '龍東旭', '新北市深坑區新莊路5段84巷3弄17號17樓', '0970079820', '1998-08-16', NULL, NULL),
(52, 'shinder536263@gmail.com', '$2b$10$wI6aIqOZwYW4keyyGH42Ce6/0OtANMw0o7sLe2nWOV.kXuy.dTfx.', '朴子豪', '台北市萬華區松江南路4段33巷7弄20號20樓', '0940219689', '1975-01-24', NULL, NULL),
(53, 'genius19007@gmail.com', '$2b$10$eZ2y/8Zj8rKj/CddE8DMJeYcq62ApbPAvlXGDR/fCiHEmBmJY/tpO', '魏沛怡', '台北市士林區民權西路3段81巷1弄14號14樓', '0911775221', '1958-09-07', NULL, NULL),
(54, 'khalid736587@gmail.com', '$2b$10$gAhd807NhhQ.ViePoB3qfeYlsv2MnHKyGAT/tuqiN39JK3nyiDaA2', '古子豪', '新北市金山區淡水西路2段29巷2弄16號16樓', '0955784940', '1972-04-04', NULL, NULL),
(55, 'michael933714@gmail.com', '$2b$10$QiPSvp/YcG.i6t4LSZ92meyQ3ZF/yIn134Gxjkfr6rWLUFFPeAKHy', '蘇宜零', '新北市新莊區新莊路5段66巷10弄6號6樓', '0933712709', '1965-04-02', NULL, NULL),
(56, 'jennifer887300@gmail.com', '$2b$10$dZsAUNdfGWddYT9zpMkBa.LrI7zQa.1GHD5sze07j3IvYnw7Teola', '金寧鄉', '台北市大安區復興北路4段67巷6弄16號16樓', '0908613096', '1961-03-18', NULL, NULL),
(57, 'masterooguay752830@gmail.com', '$2b$10$R9UlTqtvQNLRiLyYu8bz2.rjtPy9mMlJ3z3xlxVkeN8ktwu2qRAEO', '雷柏諺', '新北市雙溪區永和東路4段105巷9弄1號1樓', '0953926964', '1977-08-23', NULL, NULL),
(58, 'kate819177@gmail.com', '$2b$10$b7SCyntquCWF795CdYNfJe3vZB/UxyrjbbYN/HTqK9eKVIZ.WDkHG', '許楷弘', '新北市萬里區土城北街2段40巷8弄6號6樓', '0900561905', '1962-07-24', NULL, NULL),
(59, 'scarlett59824@gmail.com', '$2b$10$Ewwx/3pDISnVBv06VyUcqOKIce7sXu41h3Ig.lREjQYQGm/TZGY/u', '陶于翔', '台北市中正區大安路2段41巷9弄2號2樓', '0986435643', '1972-10-22', NULL, NULL),
(60, 'oppenheimer172977@gmail.com', '$2b$10$1EZsB8/9eABgs/ueehMShOdA0xde93CstnFiWXVfA6qZM5dm0tjG2', '柳東旭', '新北市金山區三芝大道3段47巷1弄8號8樓', '0952640479', '1979-06-01', NULL, NULL),
(61, 'peterparker407129@gmail.com', '$2b$10$WCtPeQ1lN4KfngrBSCsCveQYSaUdWeI4sD/szFWTkOUMXi1TX/94e', '柳子豪', '新北市雙溪區林口南街5段194巷8弄9號9樓', '0962121014', '1956-02-10', NULL, NULL),
(62, 'michael141770@gmail.com', '$2b$10$dyMmuL1zHF94LLlvUYknoutsxoqDntl4ZffPvTzj4cLtTbsSrj1ti', '齊岱峯', '新北市三重區貢寮東街3段25巷8弄18號18樓', '0902273437', '1960-08-10', NULL, NULL),
(63, 'bts48915@gmail.com', '$2b$10$uiEHQIuHa39jvT4ipxiCs.yhpoljhMD9O7h0Royz9lsxZUd0UD3P6', '哈瑞穎', '新北市坪林區三芝大道3段129巷5弄14號14樓', '0938593458', '1974-07-21', NULL, NULL),
(64, 'reese466602@gmail.com', '$2b$10$VmdUJ0gNNTIa9CTylD3rXuPtECxYx1hvQuWe3LATOHEZVXvB99sP6', '姜子豪', '台北市大同區延平北路3段120巷9弄12號12樓', '0948399251', '1986-07-02', NULL, NULL),
(65, 'ken873294@gmail.com', '$2b$10$u3qVliJLptgeLQMe7XnDw.8pairSKKzYYQNdZjlFcOF8shcXer8Dm', '於宜靜', '台北市士林區敦化南路1段60巷5弄7號7樓', '0952035051', '1966-03-25', NULL, NULL),
(66, 'keanu947873@gmail.com', '$2b$10$lO2op8Jwz4Ao5N56ek5SF.M0dHSpWlgAHYF55V4QgO9WFEqFnmcvy', '於楷弘', '台北市萬華區和平東路1段26巷3弄11號11樓', '0921341174', '1970-07-24', NULL, NULL),
(67, 'khalid807484@gmail.com', '$2b$10$7q03iuCMZk703iDmEdEeMOw9/DE6kErYMSmUTBDT4aA2iq0dEW/Yu', '吳彥廷', '台北市信義區大安路5段45巷10弄18號18樓', '0980279692', '1992-08-11', NULL, NULL),
(68, 'ken819056@gmail.com', '$2b$10$5loPwlBfqua.i7nDj76SJe5kVfeSjlp7KxgWhoBjcIN72DV3zMoDy', '袁書儀', '台北市大安區和平西路3段122巷7弄13號13樓', '0900558185', '2008-12-10', NULL, NULL),
(69, 'pluto669724@gmail.com', '$2b$10$PkwTAKsiyJk05XbeoH6kV.hFwMJdtJjvR9BVdtGPrpZpkEf18ZkqW', '上官于翔', '台北市北投區南京東路1段40巷5弄12號12樓', '0932423756', '1970-05-09', NULL, NULL),
(70, 'will570482@gmail.com', '$2b$10$/6XL.cVbdH/J.N40z3IGd.D3jCKfdubc5vlvvAhnUPknUZE6B1bKG', '玄浩哲', '台北市大安區南京東路3段169巷10弄2號2樓', '0913819962', '1962-12-07', NULL, NULL),
(71, 'scarlett216848@gmail.com', '$2b$10$UQz0smxJhPH/UCUzb2VXeOmnaqCvrS..kfbmg1jtJwnoGPjM2r2Gq', '寧牧賢', '新北市石碇區瑞芳路3段72巷1弄4號4樓', '0960087232', '1974-07-11', NULL, NULL),
(72, 'jennifer995962@gmail.com', '$2b$10$FAtXLxZyYUmbpw8vF5wNweroblSr3ttGCVxBhmLZ9A82nnL6SfVqK', '吳彥廷', '新北市平溪區土城北街1段91巷8弄5號5樓', '0961561763', '1964-09-07', NULL, NULL),
(73, 'jennifer418507@gmail.com', '$2b$10$6XvsF.cLmFAZFD0yG3OEgOcEQFqbQcQ5FigxRGLPRMi5B9nVvmd5a', '姜宜零', '新北市三峽區永和東路2段125巷3弄20號20樓', '0942053124', '2011-04-02', NULL, NULL),
(74, 'khalid130481@gmail.com', '$2b$10$3qwG7DAB6duqez8yzJw0HeyTslO9tRDdbzyWLQEZajSgU9WW0cG/q', '於東旭', '台北市北投區南京東路1段177巷1弄19號19樓', '0930056676', '1970-11-27', NULL, NULL),
(75, 'oppenheimer610340@gmail.com', '$2b$10$VXs2GN1EBwJ9WlbTs8Op9ud0K7joqKq0iJ8J9H98rNycm.yMbyYn2', '超翔允', '台北市大安區大同街5段88巷4弄14號14樓', '0999675165', '2008-04-30', NULL, NULL),
(76, 'pluto659641@gmail.com', '$2b$10$l17p2MGaDYXPcsebVWY7z..x7cLdGr1rf1XLXU1AdNElV9b9zv9h6', '洪博宇', '台北市大安區和平西路4段80巷2弄3號3樓', '0997969940', '2008-11-10', NULL, NULL),
(77, 'oppenheimer693825@gmail.com', '$2b$10$E0YK8FUUbLgbDMn9mb9wnu9//Toe93E1ozaV8n8IPqBXdYTerDsL.', '翟楷弘', '台北市信義區民權西路4段155巷3弄7號7樓', '0919190784', '1974-10-25', NULL, NULL),
(78, 'idris65985@gmail.com', '$2b$10$iuCvPDSN0iKfOCJScvVCJepE3fiP5Lm4jGAhXN/i/Ub4s9J5RMV5e', '玄翔允', '新北市萬里區三峽大道2段104巷2弄7號7樓', '0999751901', '1995-08-28', NULL, NULL),
(79, 'sean248438@gmail.com', '$2b$10$MiVk17uqmBY7nxoWQyL.cuoUge4akfBfm698XnfP22lmH6SIQARna', '金沛怡', '台北市大安區忠孝東路3段27巷8弄9號9樓', '0997257075', '1973-05-28', NULL, NULL),
(80, 'peterparker36777@gmail.com', '$2b$10$KTeVOacK.iFTYBHQhmVTYO5G3ATcEQIVBIyR9WDSwPVgF.vSpdbkG', '雷奎廷', '新北市三重區八里路2段81巷7弄9號9樓', '0925308421', '2006-07-31', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`coupon_id`);

--
-- Indexes for table `coupons_status`
--
ALTER TABLE `coupons_status`
  ADD PRIMARY KEY (`coupon_status_id`);

--
-- Indexes for table `daily_signins`
--
ALTER TABLE `daily_signins`
  ADD PRIMARY KEY (`signin_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`member_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `coupons_status`
--
ALTER TABLE `coupons_status`
  MODIFY `coupon_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `daily_signins`
--
ALTER TABLE `daily_signins`
  MODIFY `signin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
