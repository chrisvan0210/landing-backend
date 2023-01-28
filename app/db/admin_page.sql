-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 27, 2023 lúc 09:11 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `admin_page`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `level`, `createdAt`, `updatedAt`) VALUES
(2, 'admin', 'admin556699', 1, '2023-01-14 13:48:21', '2023-01-14 13:48:21'),
(5, 'user', 'user101', 0, '2023-01-23 12:28:33', '2023-01-23 12:28:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `landingpages`
--

CREATE TABLE `landingpages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `keyword` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `analytics` text DEFAULT NULL,
  `affid` varchar(255) DEFAULT NULL,
  `facebookcode` text DEFAULT NULL,
  `noscript` text DEFAULT NULL,
  `mainurl` varchar(255) DEFAULT NULL,
  `redirect` varchar(255) DEFAULT NULL,
  `h1` varchar(255) DEFAULT NULL,
  `h2` varchar(255) DEFAULT NULL,
  `button1` varchar(255) DEFAULT NULL,
  `button2` varchar(255) DEFAULT NULL,
  `button3` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `landingpages`
--

INSERT INTO `landingpages` (`id`, `title`, `url`, `keyword`, `description`, `analytics`, `affid`, `facebookcode`, `noscript`, `mainurl`, `redirect`, `h1`, `h2`, `button1`, `button2`, `button3`, `createdAt`, `updatedAt`) VALUES
(26, 'adddomain.com', 'https://adddomain.com/', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-18 14:05:04', '2023-01-18 14:05:04'),
(31, 'sample5.com', 'http://sameple5.com/', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-18 14:23:51', '2023-01-18 14:23:51'),
(32, 'sample6.com', 'http://sameple6.com/', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-18 14:33:20', '2023-01-18 14:33:20'),
(33, 'sample6.com', 'http://sameple6.com/', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-18 14:34:42', '2023-01-18 14:34:42'),
(34, 'sameple8.com', 'http://sameple8.com/', 'as', 'dasdas', NULL, 'ewqeqw', 'das', 'asddasdsad', NULL, 'wqewqewq', NULL, NULL, NULL, NULL, NULL, '2023-01-18 14:39:55', '2023-01-23 19:26:24'),
(35, 'sample9.com2123', 'http://sameple9.com/', 'asdas', 'asdas', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-18 15:23:50', '2023-01-23 19:23:16'),
(44, 'buildtest.com', 'buildtest.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-23 12:51:25', '2023-01-23 12:51:25'),
(45, 'Google', 'https://google.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-23 19:20:43', '2023-01-23 19:20:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230113105221-create-admin.js'),
('20230113105554-create-landing-page.js');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `landingpages`
--
ALTER TABLE `landingpages`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `landingpages`
--
ALTER TABLE `landingpages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
