CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$kuvgOl.vb2M8pOMtwuU6I.wqzfywOsu7nXoq6kzFkSBb7kCYHu882', NULL, '2021-01-09 13:27:05', '2021-01-09 13:27:05');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `c_id` int(10) UNSIGNED NOT NULL,
  `c_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_icon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_active` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`c_id`, `c_name`, `c_slug`, `c_icon`, `c_active`, `created_at`, `updated_at`) VALUES
(1, 'Điện thoại', 'dien-thoai', NULL, 1, '2021-01-09 13:33:03', '2021-01-09 13:33:03'),
(2, 'Laptop', 'laptop', NULL, 1, '2021-01-09 13:33:21', '2021-01-09 13:33:21'),
(3, 'Tablet', 'tablet', NULL, 1, '2021-01-09 13:33:28', '2021-01-09 13:33:28'),
(4, 'Phụ kiện', 'phu-kien', NULL, 1, '2021-01-09 13:33:36', '2021-01-09 13:33:36'),
(5, 'Đồng hồ thông minh', 'dong-ho-thong-minh', NULL, 1, '2021-01-09 13:33:47', '2021-01-09 13:33:47');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `filename` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `product_id`, `filename`, `created_at`, `updated_at`) VALUES
(1, 1, 'img/iphone-12-pro-max-512gb-040920-030921.jpg', '2021-01-09 13:38:34', '2021-01-09 13:38:34'),
(2, 1, 'img/iphone-12-pro-max-512gb-045620-025601.jpg', '2021-01-09 13:38:34', '2021-01-09 13:38:34'),
(3, 1, 'img/iphone-12-pro-max-512gb-122620-042638.jpg', '2021-01-09 13:38:34', '2021-01-09 13:38:34'),
(4, 1, 'img/iphone-12-pro-max-512gb-122720-042755.jpg', '2021-01-09 13:38:34', '2021-01-09 13:38:34'),
(5, 2, 'img/xiaomi-redmi-9-tim-2-org.jpg', '2021-01-09 13:48:30', '2021-01-09 13:48:30'),
(6, 2, 'img/xiaomi-redmi-9-tim-3-org.jpg', '2021-01-09 13:48:30', '2021-01-09 13:48:30'),
(7, 2, 'img/xiaomi-redmi-92.jpg', '2021-01-09 13:48:30', '2021-01-09 13:48:30'),
(8, 2, 'img/xiaomi-redmi-94.jpg', '2021-01-09 13:48:30', '2021-01-09 13:48:30'),
(9, 3, 'img/samsung-galaxy-m51-274020-094023.jpg', '2021-01-09 13:52:52', '2021-01-09 13:52:52'),
(10, 3, 'img/samsung-galaxy-m51-trang-5-org.jpg', '2021-01-09 13:52:52', '2021-01-09 13:52:52'),
(11, 3, 'img/samsung-galaxy-m51-trang-6-org.jpg', '2021-01-09 13:52:52', '2021-01-09 13:52:52'),
(12, 3, 'img/samsung-galaxy-m51-trang-11-org.jpg', '2021-01-09 13:52:52', '2021-01-09 13:52:52'),
(13, 4, 'img/realme-c15-xanh-duong-4-org.jpg', '2021-01-09 13:58:04', '2021-01-09 13:58:04'),
(14, 4, 'img/realme-c15-xanh-duong-5-org.jpg', '2021-01-09 13:58:04', '2021-01-09 13:58:04'),
(15, 4, 'img/realme-c15-xanh-duong-8-org.jpg', '2021-01-09 13:58:04', '2021-01-09 13:58:04'),
(16, 4, 'img/realme-c15-xanh-duong-11-org.jpg', '2021-01-09 13:58:04', '2021-01-09 13:58:04'),
(17, 5, 'img/vivo-y51-2020-tim-bac-1-org.jpg', '2021-01-09 14:02:58', '2021-01-09 14:02:58'),
(18, 5, 'img/vivo-y51-2020-tim-bac-4-org.jpg', '2021-01-09 14:02:58', '2021-01-09 14:02:58'),
(19, 5, 'img/vivo-y51-2020-tim-bac-5-org.jpg', '2021-01-09 14:02:58', '2021-01-09 14:02:58'),
(20, 5, 'img/vivo-y51-2020-tim-bac-6-org.jpg', '2021-01-09 14:02:58', '2021-01-09 14:02:58'),
(21, 5, 'img/vivo-y51-2020-tim-bac-10-org.jpg', '2021-01-09 14:02:58', '2021-01-09 14:02:58'),
(22, 6, 'img/samsung-galaxy-z-fold-2-den-1-org.jpg', '2021-01-09 14:09:27', '2021-01-09 14:09:27'),
(23, 6, 'img/samsung-galaxy-z-fold-2-den-5-org.jpg', '2021-01-09 14:09:27', '2021-01-09 14:09:27'),
(24, 6, 'img/samsung-galaxy-z-fold-2-den-6-org.jpg', '2021-01-09 14:09:27', '2021-01-09 14:09:27'),
(25, 6, 'img/samsung-galaxy-z-fold-2-den-9-org.jpg', '2021-01-09 14:09:27', '2021-01-09 14:09:27'),
(26, 6, 'img/samsung-galaxy-z-fold-2-den-16-org.jpg', '2021-01-09 14:09:27', '2021-01-09 14:09:27'),
(27, 7, 'img/samsung-galaxy-note-20-ultra-5g-trang-1-org.jpg', '2021-01-09 14:11:57', '2021-01-09 14:11:57'),
(28, 7, 'img/samsung-galaxy-note-20-ultra-5g-trang-4-org.jpg', '2021-01-09 14:11:57', '2021-01-09 14:11:57'),
(29, 7, 'img/samsung-galaxy-note-20-ultra-5g-trang-6-org.jpg', '2021-01-09 14:11:57', '2021-01-09 14:11:57'),
(30, 7, 'img/samsung-galaxy-note-20-ultra-5g-trang-7-org.jpg', '2021-01-09 14:11:57', '2021-01-09 14:11:57'),
(31, 8, 'img/iphone-12-mini-128gb-do-1-org.jpg', '2021-01-09 14:17:28', '2021-01-09 14:17:28'),
(32, 8, 'img/iphone-12-mini-128gb-do-4-org.jpg', '2021-01-09 14:17:28', '2021-01-09 14:17:28'),
(33, 8, 'img/iphone-12-mini-128gb-do-5-org.jpg', '2021-01-09 14:17:28', '2021-01-09 14:17:28'),
(34, 8, 'img/iphone-12-mini-128gb-do-6-org.jpg', '2021-01-09 14:17:28', '2021-01-09 14:17:28'),
(35, 8, 'img/iphone-12-mini-128gb-do-11-org.jpg', '2021-01-09 14:17:28', '2021-01-09 14:17:28'),
(36, 9, 'img/iphone-11-256gb-den-1-org.jpg', '2021-01-09 14:27:03', '2021-01-09 14:27:03'),
(37, 9, 'img/iphone-11-256gb-den-4-org.jpg', '2021-01-09 14:27:03', '2021-01-09 14:27:03'),
(38, 9, 'img/iphone-11-256gb-den-5-org.jpg', '2021-01-09 14:27:03', '2021-01-09 14:27:03'),
(39, 9, 'img/iphone-11-256gb-den-7-org.jpg', '2021-01-09 14:27:03', '2021-01-09 14:27:03'),
(40, 9, 'img/iphone-11-256gb-tgdd1.jpg', '2021-01-09 14:27:03', '2021-01-09 14:27:03'),
(41, 9, 'img/iphone-11-256gb-tgdd41.jpg', '2021-01-09 14:27:03', '2021-01-09 14:27:03'),
(42, 10, 'img/samsung-galaxy-note-10-plus-bac-1-org.jpg', '2021-01-09 14:46:41', '2021-01-09 14:46:41'),
(43, 10, 'img/samsung-galaxy-note-10-plus-bac-4-org.jpg', '2021-01-09 14:46:41', '2021-01-09 14:46:41'),
(44, 10, 'img/samsung-galaxy-note-10-plus-bac-5-org.jpg', '2021-01-09 14:46:41', '2021-01-09 14:46:41'),
(45, 10, 'img/samsung-galaxy-note-10-plus-bac-6-org.jpg', '2021-01-09 14:46:41', '2021-01-09 14:46:41'),
(46, 10, 'img/samsung-galaxy-note-10-plus-bac-7-org.jpg', '2021-01-09 14:46:41', '2021-01-09 14:46:41'),
(47, 10, 'img/samsung-galaxy-note-10-plus-bac-11-org.jpg', '2021-01-09 14:46:41', '2021-01-09 14:46:41'),
(48, 11, 'img/vivo-x50-pro-xam-1-org.jpg', '2021-01-09 14:54:07', '2021-01-09 14:54:07'),
(49, 11, 'img/vivo-x50-pro-xam-4-org.jpg', '2021-01-09 14:54:07', '2021-01-09 14:54:07'),
(50, 11, 'img/vivo-x50-pro-xam-5-org.jpg', '2021-01-09 14:54:07', '2021-01-09 14:54:07'),
(51, 11, 'img/vivo-x50-pro-xam-6-org.jpg', '2021-01-09 14:54:07', '2021-01-09 14:54:07'),
(52, 11, 'img/vivo-x50-pro-xam-10-org.jpg', '2021-01-09 14:54:07', '2021-01-09 14:54:07'),
(53, 12, 'img/xiaomi-mi-10t-pro-1-org.jpg', '2021-01-09 14:59:06', '2021-01-09 14:59:06'),
(54, 12, 'img/xiaomi-mi-10t-pro-4-org.jpg', '2021-01-09 14:59:06', '2021-01-09 14:59:06'),
(55, 12, 'img/xiaomi-mi-10t-pro-5-org.jpg', '2021-01-09 14:59:06', '2021-01-09 14:59:06'),
(56, 12, 'img/xiaomi-mi-10t-pro-6-org.jpg', '2021-01-09 14:59:06', '2021-01-09 14:59:06'),
(57, 12, 'img/xiaomi-mi-10t-pro-11-org.jpg', '2021-01-09 14:59:06', '2021-01-09 14:59:06'),
(58, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0940270.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(59, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0941400.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(60, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0942190.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(61, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0943160.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(62, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0943550.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(63, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0944330.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(64, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0945390.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(65, 13, 'img/apple-macbook-pro-2020-myd92saa-041220-0948550.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(66, 13, 'img/apple-macbook-pro-2020-myd92saa-101220-1058550.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(67, 13, 'img/apple-macbook-pro-2020-myd92saa-101220-1102380.jpg', '2021-01-09 15:31:50', '2021-01-09 15:31:50'),
(68, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-083350-123.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(69, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-083425-515.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(70, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-083438-594.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(71, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-083452-637.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(72, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-083512-798.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(73, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-083530-277.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(74, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-083542-724.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(75, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-085910-967.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(76, 14, 'img/apple-macbook-air-2020-mgn93saa-071220-104452-411.jpg', '2021-01-10 05:16:02', '2021-01-10 05:16:02'),
(77, 15, 'img/asus-gaming-rog-strix-g512-i7-ial001t-1-1-org.jpg', '2021-01-10 05:20:34', '2021-01-10 05:20:34'),
(78, 15, 'img/asus-gaming-rog-strix-g512-i7-ial001t-2-1-org.jpg', '2021-01-10 05:20:34', '2021-01-10 05:20:34'),
(79, 15, 'img/asus-gaming-rog-strix-g512-i7-ial001t-4-org.jpg', '2021-01-10 05:20:34', '2021-01-10 05:20:34'),
(80, 15, 'img/asus-gaming-rog-strix-g512-i7-ial001t-13-org.jpg', '2021-01-10 05:20:34', '2021-01-10 05:20:34'),
(81, 16, 'img/dell-vostro-3590-i7-grmgk2-mau-den-1-org.jpg', '2021-01-10 05:31:45', '2021-01-10 05:31:45'),
(82, 16, 'img/dell-vostro-3590-i7-grmgk2-mau-den-2-org.jpg', '2021-01-10 05:31:45', '2021-01-10 05:31:45'),
(83, 16, 'img/dell-vostro-3590-i7-grmgk2-mau-den-4-org.jpg', '2021-01-10 05:31:45', '2021-01-10 05:31:45'),
(84, 16, 'img/dell-vostro-3590-i7-grmgk2-mau-den-7-org.jpg', '2021-01-10 05:31:45', '2021-01-10 05:31:45'),
(85, 16, 'img/dell-vostro-3590-i7-grmgk2-mau-den-8-org.jpg', '2021-01-10 05:31:45', '2021-01-10 05:31:45'),
(86, 16, 'img/dell-vostro-3590-i7-grmgk2-mau-den-10-org.jpg', '2021-01-10 05:31:45', '2021-01-10 05:31:45'),
(87, 17, 'img/dell-g5-15-5500-i7-70228123-1-org.jpg', '2021-01-10 05:36:29', '2021-01-10 05:36:29'),
(88, 17, 'img/dell-g5-15-5500-i7-70228123-2-org.jpg', '2021-01-10 05:36:29', '2021-01-10 05:36:29'),
(89, 17, 'img/dell-g5-15-5500-i7-70228123-4-org.jpg', '2021-01-10 05:36:29', '2021-01-10 05:36:29'),
(90, 17, 'img/dell-g5-15-5500-i7-70228123-8-org.jpg', '2021-01-10 05:36:29', '2021-01-10 05:36:29'),
(91, 17, 'img/dell-g5-15-5500-i7-70228123-14-org.jpg', '2021-01-10 05:36:29', '2021-01-10 05:36:29'),
(92, 17, 'img/dell-g5-15-5500-i7-70228123-15-org.jpg', '2021-01-10 05:36:29', '2021-01-10 05:36:29'),
(93, 18, 'img/lenovo-gaming-15imh05-i7-81y40068vn-1-org.jpg', '2021-01-10 05:39:43', '2021-01-10 05:39:43'),
(94, 18, 'img/lenovo-gaming-15imh05-i7-81y40068vn-2-org.jpg', '2021-01-10 05:39:43', '2021-01-10 05:39:43'),
(95, 18, 'img/lenovo-gaming-15imh05-i7-81y40068vn-3-org.jpg', '2021-01-10 05:39:43', '2021-01-10 05:39:43'),
(96, 18, 'img/lenovo-gaming-15imh05-i7-81y40068vn-9-org.jpg', '2021-01-10 05:39:43', '2021-01-10 05:39:43'),
(97, 18, 'img/lenovo-gaming-15imh05-i7-81y40068vn-14-org.jpg', '2021-01-10 05:39:43', '2021-01-10 05:39:43'),
(98, 19, 'img/acer-nitro-an515-55-70ax-i7-nhq7nsv001-1-1-org.jpg', '2021-01-10 06:57:25', '2021-01-10 06:57:25'),
(99, 19, 'img/acer-nitro-an515-55-70ax-i7-nhq7nsv001-2-1-org.jpg', '2021-01-10 06:57:26', '2021-01-10 06:57:26'),
(100, 19, 'img/acer-nitro-an515-55-70ax-i7-nhq7nsv001-3-1-org.jpg', '2021-01-10 06:57:26', '2021-01-10 06:57:26'),
(101, 19, 'img/acer-nitro-an515-55-70ax-i7-nhq7nsv001-4-1-org.jpg', '2021-01-10 06:57:26', '2021-01-10 06:57:26'),
(102, 19, 'img/acer-nitro-an515-55-70ax-i7-nhq7nsv001-8-org.jpg', '2021-01-10 06:57:26', '2021-01-10 06:57:26'),
(103, 19, 'img/acer-nitro-an515-55-70ax-i7-nhq7nsv001-9-1-org.jpg', '2021-01-10 06:57:26', '2021-01-10 06:57:26'),
(104, 19, 'img/acer-nitro-an515-55-70ax-i7-nhq7nsv001-10-org.jpg', '2021-01-10 06:57:26', '2021-01-10 06:57:26'),
(105, 20, 'img/hp-348-g7-i5-9ph06pa-1-org.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(106, 20, 'img/hp-348-g7-i5-9ph06pa-2-org.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(107, 20, 'img/hp-348-g7-i5-9ph06pa-4-org.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(108, 20, 'img/hp-348-g7-i5-9ph06pa-7-org.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(109, 20, 'img/hp-348-g7-i5-9ph06pa-12-org.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(110, 20, 'img/hp-348-g7-i5-9ph06pa-14-org.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(111, 20, 'img/hp-348-g7-i5-9ph06pa-15-org.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(112, 21, 'img/lg-gram-15-i5-15z90n-var55a5-1-org.jpg', '2021-01-10 07:05:38', '2021-01-10 07:05:38'),
(113, 21, 'img/lg-gram-15-i5-15z90n-var55a5-2-org.jpg', '2021-01-10 07:05:38', '2021-01-10 07:05:38'),
(114, 21, 'img/lg-gram-15-i5-15z90n-var55a5-3-org.jpg', '2021-01-10 07:05:38', '2021-01-10 07:05:38'),
(115, 21, 'img/lg-gram-15-i5-15z90n-var55a5-9-org.jpg', '2021-01-10 07:05:38', '2021-01-10 07:05:38'),
(116, 21, 'img/lg-gram-15-i5-15z90n-var55a5-12-org.jpg', '2021-01-10 07:05:38', '2021-01-10 07:05:38'),
(117, 21, 'img/lg-gram-15-i5-15z90n-var55a5-13-org.jpg', '2021-01-10 07:05:38', '2021-01-10 07:05:38'),
(118, 22, 'img/msi-gaming-leopard-10sdr-gl65-i7-242vn-1-org.jpg', '2021-01-10 07:08:44', '2021-01-10 07:08:44'),
(119, 22, 'img/msi-gaming-leopard-10sdr-gl65-i7-242vn-2-org.jpg', '2021-01-10 07:08:44', '2021-01-10 07:08:44'),
(120, 22, 'img/msi-gaming-leopard-10sdr-gl65-i7-242vn-3-org.jpg', '2021-01-10 07:08:44', '2021-01-10 07:08:44'),
(121, 22, 'img/msi-gaming-leopard-10sdr-gl65-i7-242vn-4-org.jpg', '2021-01-10 07:08:44', '2021-01-10 07:08:44'),
(122, 22, 'img/msi-gaming-leopard-10sdr-gl65-i7-242vn-10-org.jpg', '2021-01-10 07:08:44', '2021-01-10 07:08:44'),
(123, 22, 'img/msi-gaming-leopard-10sdr-gl65-i7-242vn-14-org.jpg', '2021-01-10 07:08:44', '2021-01-10 07:08:44'),
(124, 23, 'img/huawei-matebook-d-15-r5-bohwaq9r-1-org.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(125, 23, 'img/huawei-matebook-d-15-r5-bohwaq9r-2-org.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(126, 23, 'img/huawei-matebook-d-15-r5-bohwaq9r-3-org.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(127, 23, 'img/huawei-matebook-d-15-r5-bohwaq9r-8-org.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(128, 23, 'img/huawei-matebook-d-15-r5-bohwaq9r-11-org.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(129, 23, 'img/huawei-matebook-d-15-r5-bohwaq9r-14-org.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(130, 23, 'img/huawei-matebook-d-15-r5-bohwaq9r-15-org.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(131, 24, 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-1-org.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(132, 24, 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-2-org.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(133, 24, 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-3-org.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(134, 24, 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-4-org.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(135, 24, 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-11-org.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(136, 24, 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-14-org.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(137, 24, 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-15-org.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(138, 25, 'img/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-1-1-org.jpg', '2021-01-10 07:20:54', '2021-01-10 07:20:54'),
(139, 25, 'img/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-4-1-org.jpg', '2021-01-10 07:20:54', '2021-01-10 07:20:54'),
(140, 25, 'img/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-5-1-org.jpg', '2021-01-10 07:20:54', '2021-01-10 07:20:54'),
(141, 25, 'img/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-6-1-org.jpg', '2021-01-10 07:20:54', '2021-01-10 07:20:54'),
(142, 25, 'img/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-14-org.jpg', '2021-01-10 07:20:54', '2021-01-10 07:20:54'),
(143, 26, 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-072420-032425-270.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(144, 26, 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-140520-0439590.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(145, 26, 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-140520-0440021.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(146, 26, 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-140520-0440093.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(147, 26, 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-140520-0440175.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(148, 26, 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-140520-04404312.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(149, 26, 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-140520-04405816.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(150, 26, 'img/ipad-pro-2020-slider-780x433.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(151, 27, 'img/ipad-air-4-wifi-cellular-256gb-2020-092020-052057.jpg', '2021-01-10 07:47:44', '2021-01-10 07:47:44'),
(152, 27, 'img/ipad-air-4-wifi-cellular-256gb-2020-092120-052118.jpg', '2021-01-10 07:47:44', '2021-01-10 07:47:44'),
(153, 27, 'img/ipad-air-4-wifi-cellular-256gb-2020-094620-054613.jpg', '2021-01-10 07:47:44', '2021-01-10 07:47:44'),
(154, 27, 'img/ipad-air-4-wifi-cellular-256gb-2020-094920-054936.jpg', '2021-01-10 07:47:44', '2021-01-10 07:47:44'),
(155, 27, 'img/ipad-air-4-wifi-cellular-256gb-2020-121020-0205596.jpg', '2021-01-10 07:47:44', '2021-01-10 07:47:44'),
(156, 28, 'img/samsung-galaxy-tab-a7-2020-1-org.jpg', '2021-01-10 07:52:52', '2021-01-10 07:52:52'),
(157, 28, 'img/samsung-galaxy-tab-a7-2020-2-org.jpg', '2021-01-10 07:52:52', '2021-01-10 07:52:52'),
(158, 28, 'img/samsung-galaxy-tab-a7-2020-5-org.jpg', '2021-01-10 07:52:52', '2021-01-10 07:52:52'),
(159, 28, 'img/samsung-galaxy-tab-a7-2020-6-org.jpg', '2021-01-10 07:52:52', '2021-01-10 07:52:52'),
(160, 28, 'img/samsung-galaxy-tab-a7-2020-9-org.jpg', '2021-01-10 07:52:52', '2021-01-10 07:52:52'),
(161, 28, 'img/samsung-galaxy-tab-a7-2020-12-org.jpg', '2021-01-10 07:52:52', '2021-01-10 07:52:52'),
(162, 29, 'img/samsung-galaxy-tab-s6-xanh-duong-1-org.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(163, 29, 'img/samsung-galaxy-tab-s6-xanh-duong-4-org.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(164, 29, 'img/samsung-galaxy-tab-s6-xanh-duong-5-org.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(165, 29, 'img/samsung-galaxy-tab-s6-xanh-duong-6-org.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(166, 29, 'img/samsung-galaxy-tab-s6-xanh-duong-7-org.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(167, 29, 'img/samsung-galaxy-tab-s6-xanh-duong-12-org.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(168, 29, 'img/samsung-galaxy-tab-s6-xanh-duong-13-org.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(169, 30, 'img/huawei-matepad-t8-1-org.jpg', '2021-01-10 07:57:55', '2021-01-10 07:57:55'),
(170, 30, 'img/huawei-matepad-t8-4-1-org.jpg', '2021-01-10 07:57:55', '2021-01-10 07:57:55'),
(171, 30, 'img/huawei-matepad-t8-5-org.jpg', '2021-01-10 07:57:55', '2021-01-10 07:57:55'),
(172, 30, 'img/huawei-matepad-t8-6-org.jpg', '2021-01-10 07:57:55', '2021-01-10 07:57:55'),
(173, 30, 'img/huawei-matepad-t8-11-org.jpg', '2021-01-10 07:57:55', '2021-01-10 07:57:55'),
(174, 30, 'img/huawei-matepad-t8-12-org.jpg', '2021-01-10 07:57:55', '2021-01-10 07:57:55'),
(175, 31, 'img/huawei-mediapad-m5-lite-xam-1-org.jpg', '2021-01-10 08:00:26', '2021-01-10 08:00:26'),
(176, 31, 'img/huawei-mediapad-m5-lite-xam-2-org.jpg', '2021-01-10 08:00:26', '2021-01-10 08:00:26'),
(177, 31, 'img/huawei-mediapad-m5-lite-xam-5-org.jpg', '2021-01-10 08:00:26', '2021-01-10 08:00:26'),
(178, 31, 'img/huawei-mediapad-m5-lite-xam-6-org.jpg', '2021-01-10 08:00:27', '2021-01-10 08:00:27'),
(179, 31, 'img/huawei-mediapad-m5-lite-xam-11-org.jpg', '2021-01-10 08:00:27', '2021-01-10 08:00:27'),
(180, 31, 'img/huawei-mediapad-m5-lite-xam-12-org.jpg', '2021-01-10 08:00:27', '2021-01-10 08:00:27'),
(181, 32, 'img/lenovo-tab-m10-1-org.jpg', '2021-01-10 08:02:58', '2021-01-10 08:02:58'),
(182, 32, 'img/lenovo-tab-m10-5-org.jpg', '2021-01-10 08:02:58', '2021-01-10 08:02:58'),
(183, 32, 'img/lenovo-tab-m10-7-org.jpg', '2021-01-10 08:02:58', '2021-01-10 08:02:58'),
(184, 32, 'img/lenovo-tab-m10-14-org.jpg', '2021-01-10 08:02:58', '2021-01-10 08:02:58'),
(185, 32, 'img/lenovo-tab-m10-black-1020x680-org.jpg', '2021-01-10 08:02:58', '2021-01-10 08:02:58'),
(186, 33, 'img/masstel-tab-10-ultra-bac-1-org.jpg', '2021-01-10 08:05:50', '2021-01-10 08:05:50'),
(187, 33, 'img/masstel-tab-10-ultra-bac-2-org.jpg', '2021-01-10 08:05:50', '2021-01-10 08:05:50'),
(188, 33, 'img/masstel-tab-10-ultra-bac-5-org.jpg', '2021-01-10 08:05:50', '2021-01-10 08:05:50'),
(189, 33, 'img/masstel-tab-10-ultra-bac-6-org.jpg', '2021-01-10 08:05:50', '2021-01-10 08:05:50'),
(190, 33, 'img/masstel-tab-10-ultra-bac-7-org.jpg', '2021-01-10 08:05:50', '2021-01-10 08:05:50'),
(191, 33, 'img/masstel-tab-10-ultra-bac-13-org.jpg', '2021-01-10 08:05:50', '2021-01-10 08:05:50'),
(192, 34, 'img/tai-nghe-bluetooth-airpods-pro-apple-mwp22-2-org.jpg', '2021-01-10 08:08:53', '2021-01-10 08:08:53'),
(193, 34, 'img/tai-nghe-bluetooth-airpods-pro-apple-mwp22-3-org.jpg', '2021-01-10 08:08:53', '2021-01-10 08:08:53'),
(194, 34, 'img/tai-nghe-bluetooth-airpods-pro-apple-mwp22-4-org.jpg', '2021-01-10 08:08:53', '2021-01-10 08:08:53'),
(195, 34, 'img/tai-nghe-bluetooth-airpods-pro-apple-mwp22-5-org.jpg', '2021-01-10 08:08:53', '2021-01-10 08:08:53'),
(196, 35, 'img/chuot-bluetooth-apple-mla02-trang-org-2.jpg', '2021-01-10 08:11:08', '2021-01-10 08:11:08'),
(197, 35, 'img/chuot-bluetooth-apple-mla02-trang-org-3.jpg', '2021-01-10 08:11:08', '2021-01-10 08:11:08'),
(198, 35, 'img/chuot-bluetooth-apple-mla02-trang-org-4.jpg', '2021-01-10 08:11:08', '2021-01-10 08:11:08'),
(199, 35, 'img/chuot-bluetooth-apple-mla02-trang-org-5.jpg', '2021-01-10 08:11:08', '2021-01-10 08:11:08'),
(200, 36, 'img/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-den-1-org.jpg', '2021-01-10 08:15:08', '2021-01-10 08:15:08'),
(201, 36, 'img/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-den-2-org.jpg', '2021-01-10 08:15:08', '2021-01-10 08:15:08'),
(202, 36, 'img/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-den-3-org.jpg', '2021-01-10 08:15:08', '2021-01-10 08:15:08'),
(203, 36, 'img/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-den-4-org.jpg', '2021-01-10 08:15:08', '2021-01-10 08:15:08'),
(204, 36, 'img/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-den-5-org.jpg', '2021-01-10 08:15:08', '2021-01-10 08:15:08'),
(205, 37, 'img/balo-laptop-15-inch-cong-usb-arctic-hunter-b-00320-2-org.jpg', '2021-01-10 08:18:02', '2021-01-10 08:18:02'),
(206, 37, 'img/balo-laptop-15-inch-cong-usb-arctic-hunter-b-00320-3-org.jpg', '2021-01-10 08:18:02', '2021-01-10 08:18:02'),
(207, 37, 'img/balo-laptop-15-inch-cong-usb-arctic-hunter-b-00320-4-org.jpg', '2021-01-10 08:18:02', '2021-01-10 08:18:02'),
(208, 37, 'img/balo-laptop-15-inch-cong-usb-arctic-hunter-b-00320-8-org.jpg', '2021-01-10 08:18:02', '2021-01-10 08:18:02'),
(209, 37, 'img/balo-laptop-15-inch-cong-usb-arctic-hunter-b-00320-10-org.jpg', '2021-01-10 08:18:02', '2021-01-10 08:18:02'),
(210, 38, 'img/chuot-gaming-corsair-m55-rgb-pro-den-2-org.jpg', '2021-01-10 08:21:43', '2021-01-10 08:21:43'),
(211, 38, 'img/chuot-gaming-corsair-m55-rgb-pro-den-3-org.jpg', '2021-01-10 08:21:43', '2021-01-10 08:21:43'),
(212, 38, 'img/chuot-gaming-corsair-m55-rgb-pro-den-4-org.jpg', '2021-01-10 08:21:43', '2021-01-10 08:21:43'),
(213, 38, 'img/chuot-gaming-corsair-m55-rgb-pro-den-8-org.jpg', '2021-01-10 08:21:43', '2021-01-10 08:21:43'),
(214, 38, 'img/chuot-gaming-corsair-m55-rgb-pro-den-10-org.jpg', '2021-01-10 08:21:43', '2021-01-10 08:21:43'),
(215, 39, 'img/the-nho-microsd-200gb-class10uhs1-2-1-org.jpg', '2021-01-10 08:26:30', '2021-01-10 08:26:30'),
(216, 39, 'img/the-nho-microsd-200gb-class10uhs1-3-1-org.jpg', '2021-01-10 08:26:30', '2021-01-10 08:26:30'),
(217, 39, 'img/the-nho-microsd-200gb-class10uhs1-4-1-org.jpg', '2021-01-10 08:26:30', '2021-01-10 08:26:30'),
(218, 40, 'img/tui-airpods-pro-nhua-cung-trong-jm-pd01-vang-3-org.jpg', '2021-01-10 08:30:29', '2021-01-10 08:30:29'),
(219, 40, 'img/tui-airpods-pro-nhua-cung-trong-jm-pd01-vang-4-org.jpg', '2021-01-10 08:30:29', '2021-01-10 08:30:29'),
(220, 40, 'img/tui-airpods-pro-nhua-cung-trong-jm-pd01-vang-5-org.jpg', '2021-01-10 08:30:29', '2021-01-10 08:30:29'),
(221, 40, 'img/tui-airpods-pro-nhua-cung-trong-jm-pd01-vang-6-org.jpg', '2021-01-10 08:30:29', '2021-01-10 08:30:29'),
(222, 41, 'img/samsung-galaxy-fit2-den-2-1-org.jpg', '2021-01-10 08:33:41', '2021-01-10 08:33:41'),
(223, 41, 'img/samsung-galaxy-fit2-den-3-1-org.jpg', '2021-01-10 08:33:41', '2021-01-10 08:33:41'),
(224, 41, 'img/samsung-galaxy-fit2-den-4-1-org.jpg', '2021-01-10 08:33:41', '2021-01-10 08:33:41'),
(225, 42, 'img/samsung-galaxy-watch-active-2-44-mm-day-da-den-1-1-org.jpg', '2021-01-10 08:36:04', '2021-01-10 08:36:04'),
(226, 42, 'img/samsung-galaxy-watch-active-2-44-mm-day-da-den-3-org.jpg', '2021-01-10 08:36:04', '2021-01-10 08:36:04'),
(227, 42, 'img/samsung-galaxy-watch-active-2-44-mm-day-da-den-4-1-org.jpg', '2021-01-10 08:36:05', '2021-01-10 08:36:05'),
(228, 42, 'img/samsung-galaxy-watch-active-2-44-mm-day-da-den-5-1-org.jpg', '2021-01-10 08:36:05', '2021-01-10 08:36:05'),
(229, 42, 'img/samsung-galaxy-watch-active-2-44-mm-day-da-den-8-org.jpg', '2021-01-10 08:36:05', '2021-01-10 08:36:05'),
(230, 43, 'img/huami-amazfit-gts-vang-1-2-org.jpg', '2021-01-10 08:37:54', '2021-01-10 08:37:54'),
(231, 43, 'img/huami-amazfit-gts-vang-2-2-org.jpg', '2021-01-10 08:37:54', '2021-01-10 08:37:54'),
(232, 43, 'img/huami-amazfit-gts-vang-3-2-org.jpg', '2021-01-10 08:37:54', '2021-01-10 08:37:54'),
(233, 43, 'img/huami-amazfit-gts-vang-4-2-org.jpg', '2021-01-10 08:37:54', '2021-01-10 08:37:54'),
(234, 43, 'img/huami-amazfit-gts-vang-8-2-org.jpg', '2021-01-10 08:37:54', '2021-01-10 08:37:54'),
(235, 44, 'img/suunto-7-day-silicon-den-3-org.jpg', '2021-01-10 08:40:28', '2021-01-10 08:40:28'),
(236, 44, 'img/suunto-7-day-silicon-den-4-org.jpg', '2021-01-10 08:40:28', '2021-01-10 08:40:28'),
(237, 44, 'img/suunto-7-day-silicon-den-5-org.jpg', '2021-01-10 08:40:28', '2021-01-10 08:40:28'),
(238, 44, 'img/suunto-7-day-silicon-den-6-org.jpg', '2021-01-10 08:40:28', '2021-01-10 08:40:28'),
(239, 44, 'img/suunto-7-day-silicon-den-8-org.jpg', '2021-01-10 08:40:28', '2021-01-10 08:40:28'),
(240, 45, 'img/apple-watch-s5-3.jpg', '2021-01-10 08:43:39', '2021-01-10 08:43:39'),
(241, 45, 'img/apple-watch-s5-44mm-vien-nhom-day-cao-su-4-org.jpg', '2021-01-10 08:43:39', '2021-01-10 08:43:39'),
(242, 45, 'img/apple-watch-s5-44mm-vien-nhom-day-cao-su-7.jpg', '2021-01-10 08:43:39', '2021-01-10 08:43:39'),
(243, 45, 'img/apple-watch-s5-44mm-vien-nhom-day-cao-su9.jpg', '2021-01-10 08:43:39', '2021-01-10 08:43:39'),
(244, 46, 'img/watch-gt2-pro-46mm-day-silicone-cont-2-org.jpg', '2021-01-10 08:49:30', '2021-01-10 08:49:30'),
(245, 46, 'img/watch-gt2-pro-46mm-day-silicone-cont-3-org.jpg', '2021-01-10 08:49:30', '2021-01-10 08:49:30'),
(246, 46, 'img/watch-gt2-pro-46mm-day-silicone-cont-4-org.jpg', '2021-01-10 08:49:30', '2021-01-10 08:49:30'),
(247, 46, 'img/watch-gt2-pro-46mm-day-silicone-cont-5-org.jpg', '2021-01-10 08:49:30', '2021-01-10 08:49:30'),
(248, 47, 'img/oppo-watch-41mm-day-silicone-hong-2-org.jpg', '2021-01-10 08:51:42', '2021-01-10 08:51:42'),
(249, 47, 'img/oppo-watch-41mm-day-silicone-hong-3-org.jpg', '2021-01-10 08:51:42', '2021-01-10 08:51:42'),
(250, 47, 'img/oppo-watch-41mm-day-silicone-hong-4-org.jpg', '2021-01-10 08:51:42', '2021-01-10 08:51:42'),
(251, 47, 'img/oppo-watch-41mm-day-silicone-hong-5-org.jpg', '2021-01-10 08:51:42', '2021-01-10 08:51:42'),
(252, 47, 'img/oppo-watch-41mm-day-silicone-hong-6-org.jpg', '2021-01-10 08:51:42', '2021-01-10 08:51:42'),
(253, 47, 'img/oppo-watch-41mm-day-silicone-hong-8-org.jpg', '2021-01-10 08:51:42', '2021-01-10 08:51:42'),
(254, 47, 'img/oppo-watch-41mm-day-silicone-hong-11-org.jpg', '2021-01-10 08:51:42', '2021-01-10 08:51:42'),
(255, 48, 'img/samsung-galaxy-watch-3-45mm-titanium-3-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(256, 48, 'img/samsung-galaxy-watch-3-45mm-titanium-4-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(257, 48, 'img/samsung-galaxy-watch-3-45mm-titanium-5-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(258, 48, 'img/samsung-galaxy-watch-3-45mm-titanium-6-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(259, 48, 'img/samsung-galaxy-watch-3-45mm-titanium-7-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(260, 48, 'img/samsung-galaxy-watch-3-45mm-titanium-10-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(261, 48, 'img/samsung-galaxy-watch-3-45mm-titanium-11-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(262, 49, 'img/xiaomi-amazfit-t-rex-2-1-org.jpg', '2021-01-10 08:57:32', '2021-01-10 08:57:32'),
(263, 49, 'img/xiaomi-amazfit-t-rex-3-1-org.jpg', '2021-01-10 08:57:32', '2021-01-10 08:57:32'),
(264, 49, 'img/xiaomi-amazfit-t-rex-4-1-org.jpg', '2021-01-10 08:57:32', '2021-01-10 08:57:32'),
(265, 49, 'img/xiaomi-amazfit-t-rex-5-1-org.jpg', '2021-01-10 08:57:32', '2021-01-10 08:57:32'),
(266, 49, 'img/xiaomi-amazfit-t-rex-9-1-org.jpg', '2021-01-10 08:57:32', '2021-01-10 08:57:32'),
(267, 49, 'img/xiaomi-amazfit-t-rex-11-org.jpg', '2021-01-10 08:57:32', '2021-01-10 08:57:32'),
(268, 50, 'img/apple-watch-s6-lte-44mm-vien-thep-day-cao-su-251920-121916.jpg', '2021-01-10 09:00:02', '2021-01-10 09:00:02'),
(269, 50, 'img/apple-watch-s6-lte-44mm-vien-thep-day-cao-su-251920-121933.jpg', '2021-01-10 09:00:02', '2021-01-10 09:00:02'),
(270, 50, 'img/apple-watch-s6-lte-44mm-vien-thep-day-cao-su-252020-122011.jpg', '2021-01-10 09:00:02', '2021-01-10 09:00:02'),
(271, 50, 'img/apple-watch-s6-lte-44mm-vien-thep-day-cao-su-den-cont-2-org.jpg', '2021-01-10 09:00:02', '2021-01-10 09:00:02'),
(272, 50, 'img/apple-watch-s6-lte-44mm-vien-thep-day-cao-su-den-cont-3-org.jpg', '2021-01-10 09:00:02', '2021-01-10 09:00:02');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(21, '2014_10_12_000000_create_users_table', 1),
(22, '2014_10_12_100000_create_password_resets_table', 1),
(23, '2021_01_02_165333_create_admins_table', 1),
(24, '2021_01_03_083904_create_categories_table', 1),
(25, '2021_01_03_200948_create_products_table', 1),
(26, '2021_01_03_232810_create_images_table', 1),
(27, '2021_01_04_195719_create_orders_table', 1),
(28, '2021_01_07_041241_create_order_details_table', 1),
(29, '2021_01_07_041733_create_product_reviews_table', 1),
(30, '2021_01_07_041824_create_wishlists_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `sub_total` decimal(20,0) NOT NULL,
  `quantity` int(11) NOT NULL,
  `payment_menthod` enum('cod','zalopay','momo','airpay') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cod',
  `payment_status` enum('paid','unpaid') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unpaid',
  `status` enum('pending','process','shipping','delivered','cancel') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `fullname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_number`, `user_id`, `sub_total`, `quantity`, `payment_menthod`, `payment_status`, `status`, `fullname`, `email`, `phone`, `address`, `created_at`, `updated_at`) VALUES
(4, '41747871573', 2, '81980000', 2, 'cod', 'unpaid', 'cancel', 'Ca Chi', 'gefowo3311@izzum.com', '01230936793', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:12:24', '2021-01-10 12:37:10'),
(5, '23154122075', 2, '29090000', 2, 'cod', 'unpaid', 'pending', 'Minh Nhat', 'gefowo3311@izzum.com', '01230936793', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:15:39', '2021-01-10 12:15:39'),
(6, '74178534029', 2, '30990000', 1, 'cod', 'unpaid', 'delivered', 'Minh', 'gefowo3311@izzum.com', '01230936793', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:16:19', '2021-01-10 12:37:20'),
(7, '62430129002', 2, '6990000', 1, 'cod', 'unpaid', 'process', 'Minh', 'gefowo3311@izzum.com', '01230936793', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:17:15', '2021-01-10 12:37:16'),
(8, '29367712191', 2, '4792000', 1, 'cod', 'unpaid', 'pending', 'Minh Nhat', 'gefowo3311@izzum.com', '01230936793', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:19:15', '2021-01-10 12:19:15'),
(9, '57853954538', 2, '26990000', 1, 'cod', 'unpaid', 'delivered', 'Minh Nhat', 'gefowo3311@izzum.com', '01230936793', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:19:43', '2021-01-10 12:37:05'),
(10, '23513967385', 3, '21990000', 1, 'cod', 'unpaid', 'shipping', 'Nguyên', 'diyof52823@majorsww.com', '0383188752', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:29:55', '2021-01-10 12:37:00'),
(11, '66101909765', 3, '163960000', 4, 'cod', 'unpaid', 'process', 'Nguyên', 'diyof52823@majorsww.com', '0383188752', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', '2021-01-10 12:31:13', '2021-01-10 12:36:55');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `price` decimal(20,0) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` decimal(20,0) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `product_id`, `order_id`, `user_id`, `price`, `quantity`, `total`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '41990000', 1, '41990000', '2021-01-09 15:06:44', '2021-01-09 15:06:44'),
(2, 13, 2, 1, '39990000', 1, '39990000', '2021-01-09 15:33:05', '2021-01-09 15:33:05'),
(3, 50, 3, 1, '21990000', 1, '21990000', '2021-01-10 09:13:10', '2021-01-10 09:13:10'),
(4, 1, 4, 2, '41990000', 1, '41990000', '2021-01-10 12:12:24', '2021-01-10 12:12:24'),
(5, 13, 4, 2, '39990000', 1, '39990000', '2021-01-10 12:12:24', '2021-01-10 12:12:24'),
(6, 40, 5, 2, '100000', 1, '100000', '2021-01-10 12:15:39', '2021-01-10 12:15:39'),
(7, 14, 5, 2, '28990000', 1, '28990000', '2021-01-10 12:15:39', '2021-01-10 12:15:39'),
(8, 25, 6, 2, '30990000', 1, '30990000', '2021-01-10 12:16:19', '2021-01-10 12:16:19'),
(9, 42, 7, 2, '6990000', 1, '6990000', '2021-01-10 12:17:15', '2021-01-10 12:17:15'),
(10, 47, 8, 2, '4792000', 1, '4792000', '2021-01-10 12:19:15', '2021-01-10 12:19:15'),
(11, 7, 9, 2, '26990000', 1, '26990000', '2021-01-10 12:19:43', '2021-01-10 12:19:43'),
(12, 50, 10, 3, '21990000', 1, '21990000', '2021-01-10 12:29:55', '2021-01-10 12:29:55'),
(13, 1, 11, 3, '41990000', 2, '83980000', '2021-01-10 12:31:13', '2021-01-10 12:31:13'),
(14, 13, 11, 3, '39990000', 2, '79980000', '2021-01-10 12:31:13', '2021-01-10 12:31:13');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pro_id` int(10) UNSIGNED NOT NULL,
  `pro_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pro_slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pro_sku` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pro_quantity` int(11) NOT NULL DEFAULT 0,
  `pro_category_id` int(11) NOT NULL DEFAULT 0,
  `pro_price` int(11) NOT NULL DEFAULT 0,
  `pro_sale` tinyint(4) NOT NULL DEFAULT 0,
  `pro_active` tinyint(4) NOT NULL DEFAULT 1,
  `pro_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pro_thumbnail` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pro_id`, `pro_name`, `pro_slug`, `pro_sku`, `pro_quantity`, `pro_category_id`, `pro_price`, `pro_sale`, `pro_active`, `pro_description`, `pro_thumbnail`, `created_at`, `updated_at`) VALUES
(1, 'Điện thoại iPhone 12 Pro Max 512GB', 'dien-thoai-iphone-12-pro-max-512gb', 'iiiiiiiii', 9, 1, 41990000, 0, 1, 'iPhone 12 Pro Max 512GB - đẳng cấp từ tên gọi đến từng chi tiết. Ngay từ khi chỉ là tin đồn thì chiếc smartphone này đã làm đứng ngồi không yên bao “fan cứng” nhà Apple, với những nâng cấp vô cùng nổi bật hứa hẹn sẽ mang đến những trải nghiệm tốt nhất về mọi mặt mà chưa một chiếc iPhone tiền nhiệm nào có được.', 'img/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg', '2021-01-09 13:38:34', '2021-01-10 12:37:10'),
(2, 'Điện thoại Xiaomi Redmi 9 (4GB/64GB)', 'dien-thoai-xiaomi-redmi-9-4gb64gb', 'Iiiiiiiiiiiiii', 19, 1, 3490000, 0, 1, 'Nhanh như một cơn gió, sức hot của Redmi Note 9 Pro chưa có dấu hiệu hạ nhiệt thì Xiaomi Redmi 9 vừa bất ngờ ra mắt sớm. Thiết bị mang một thiết kế mới, thời trang và nhỏ gọn, phần cứng được nâng cấp cùng thời lượng pin ấn tượng, đặc biệt đi kèm một mức giá bán không thể nào hấp dẫn hơn.', 'img/xiaomi-redmi-9-tim-new-600x600-600x600.jpg', '2021-01-09 13:48:30', '2021-01-09 13:48:30'),
(3, 'Điện thoại Samsung Galaxy M51', 'dien-thoai-samsung-galaxy-m51', 'iiiiiiiiiiiiii', 51, 1, 8990000, 0, 1, 'Samsung lại tiếp tục cho ra mắt chiếc smartphone mới thuộc thế hệ Galaxy M với tên gọi là Samsung Galaxy M51. Thiết kế mới này tuy nằm trong phân khúc tầm trung nhưng được Samsung nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.', 'img/samsung-galaxy-m51-trang-new-600x600-600x600.jpg', '2021-01-09 13:52:52', '2021-01-09 13:52:52'),
(4, 'Điện thoại Realme C15', 'dien-thoai-realme-c15', 'Iiiiiiiiiiiiii', 15, 1, 3990000, 0, 1, 'Realme vừa cho ra mắt sản phẩm mới nhất là Realme C15 với mức giá vô cùng phải chăng. Chiếc điện thoại thông minh này đi kèm 4 camera sau và dung lượng pin lên đến 6000 mAh sẵn sàng đồng hành cùng bạn trong mọi lúc.', 'img/realme-c15.jpg', '2021-01-09 13:58:04', '2021-01-09 13:58:04'),
(5, 'Điện thoại Vivo Y51 (2020)', 'dien-thoai-vivo-y51-2020', 'Iiiiiiiiiiiiii', 20, 1, 5990000, 0, 1, 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).', 'img/vivo-y51-bac-600x600-600x600.jpg', '2021-01-09 14:02:58', '2021-01-09 14:02:58'),
(6, 'Điện thoại Samsung Galaxy Z Fold2 5G', 'dien-thoai-samsung-galaxy-z-fold2-5g', 'Iiiiiiiiiiiiii', 50, 1, 50000000, 0, 1, 'Samsung Galaxy Z Fold 2 là tên gọi chính thức của điện thoại màn hình gập cao cấp nhất của Samsung. Với nhiều nâng cấp tiên phong về thiết kế, hiệu năng và camera, hứa hẹn đây sẽ là một siêu phẩm thành công tiếp theo đến từ “ông trùm” sản xuất điện thoại lớn nhất thế giới.', 'img/samsung-galaxy-z-fold-2-den-600x600.jpg', '2021-01-09 14:09:27', '2021-01-09 14:09:27'),
(7, 'Điện thoại Samsung Galaxy Note 20 Ultra 5G Trắng', 'dien-thoai-samsung-galaxy-note-20-ultra-5g-trang', 'Iiiiiiiiiiiiii', 25, 1, 26990000, 0, 1, 'Samsung Galaxy Note 20 Ultra 5G Trắng mẫu flagship hàng đầu của Samsung hoàn hảo về mọi mặt, từ thiết kế sang trọng đẳng cấp cho đến hiệu năng cực khủng ẩn chứa bên trong. Đặc biệt hơn cả là chiếc bút S Pen đầy “quyền năng” của dòng Note giờ đây cũng đã được nâng lên một tầm cao mới.', 'img/samsunggalaxynote20ultratrangnew-600x600-600x600.jpg', '2021-01-09 14:11:57', '2021-01-10 12:19:43'),
(8, 'Điện thoại iPhone 12 mini 128GB', 'dien-thoai-iphone-12-mini-128gb', 'Iiiiiiiiiiiiii', 23, 1, 23990000, 0, 1, 'Apple tiếp tục khẳng định vị thế của mình trên thị trường smartphone khi mới đây cho ra mắt mẫu iPhone 12 với nhiều điểm được tối ưu hơn, nâng cấp mạnh hơn. Trong đó, iPhone 12 mini 128 GB được ví như là phiên bản thu nhỏ hơn là bản rút gọn với cấu hình không khác gì mấy anh lớn có mức giá hấp dẫn hơn.', 'img/iphone-12-mini-128gb-(2).jpg', '2021-01-09 14:17:28', '2021-01-09 14:17:28'),
(9, 'Điện thoại iPhone 11 256GB', 'dien-thoai-iphone-11-256gb', 'Iiiiiiiiiiiiii', 21, 1, 21990000, 0, 1, 'iPhone 11 256GB là chiếc máy có mức giá \"dễ chịu\" trong bộ 3 iPhone vừa được Apple giới thiệu và nếu bạn muốn được trải nghiệm những nâng cấp về camera mới hay hiệu năng hàng đầu mà lại không muốn bỏ ra quá nhiều tiền thì đây thực sự là lựa chọn hàng đầu dành cho bạn.', 'img/iphone-11-256gb-black-600x600.jpg', '2021-01-09 14:27:03', '2021-01-09 14:27:03'),
(10, 'Điện thoại Samsung Galaxy Note 10+', 'dien-thoai-samsung-galaxy-note-10', 'Iiiiiiiiiiiiii', 16, 1, 16490000, 0, 1, 'Trông ngoại hình khá giống nhau, tuy nhiên Samsung Galaxy Note 10+ sở hữu khá nhiều điểm khác biệt so với Galaxy Note 10 và đây được xem là một trong những chiếc máy đáng mua nhất trong năm 2019, đặc biệt dành cho những người thích một chiếc máy màn hình lớn, camera chất lượng hàng đầu.', 'img/samsung-galaxy-note-10-plus-silver-new-600x600.jpg', '2021-01-09 14:46:41', '2021-01-09 14:46:41'),
(11, 'Điện thoại Vivo X50 Pro', 'dien-thoai-vivo-x50-pro', 'Iiiiiiiiiiiiii', 17, 1, 17990000, 0, 1, 'Trong cuộc đua của các hãng điện thoại đang dần trở nên ngày càng khốc liệt, Vivo vừa mang tới một \"làn gió mới\" mang tên Vivo X50 Pro nổi bật với hệ thống camera chống rung độc đáo như trên một chiếc gimbal thực sự, lần đầu tiên được trang bị trên smartphone hiện đại.', 'img/vivo-x50-pro-14-600x600.jpg', '2021-01-09 14:54:07', '2021-01-09 14:54:07'),
(12, 'Điện thoại Xiaomi Mi 10T Pro 5G', 'dien-thoai-xiaomi-mi-10t-pro-5g', 'Iiiiiiiiiiiiii', 14, 1, 12490000, 0, 1, 'Mi 10T Pro 5G mẫu smartphone cao cấp của Xiaomi trong năm 2020 cuối cùng cũng được trình làng với loạt những thông số gây “choáng ngợp”: màn hình tần số quét 144 Hz, vi xử lý Snapdragon 865 và cụm camera khủng 108 MP kèm theo đó là một mức giá dễ chịu cho người dùng.', 'img/xiaomi-mi-10t-pro-den-600x600.jpg', '2021-01-09 14:59:06', '2021-01-09 14:59:06'),
(13, 'Laptop Apple MacBook Pro M1 2020 8GB/512GB', 'laptop-apple-macbook-pro-m1-2020-8gb512gb', 'Iiiiiiiiiiiiii', 1, 2, 39990000, 0, 1, 'Apple Macbook Pro M1 2020 (MYD92SA/A) với hiệu năng cực kỳ mạnh mẽ tích hợp chip Apple M1 lần đầu xuất hiện trên MAC đã xuất hiện trên thị trường laptop, con laptop này hứa hẹn sẽ mang đến cho bạn một sản phẩm “Pro” chưa từng thấy.', 'img/apple-macbook-pro-2020-myd92saa-600x600.jpg', '2021-01-09 15:31:50', '2021-01-10 12:37:10'),
(14, 'Laptop Apple MacBook Air M1 2020 8GB/256GB', 'laptop-apple-macbook-air-m1-2020-8gb256gb', 'Iiiiiiiiiiiiii', 7, 2, 28990000, 0, 1, 'Laptop Apple MacBook Air M1 2020 (MGN93SA/A) có thiết kế nhỏ gọn thuận tiện mang theo bên mình, chip M1 cho cấu hình mạnh mẽ tốc độ xử lý nhanh sẽ là trợ thủ đắc lực cho bạn trong công việc.', 'img/apple-macbook-air-2020-mgn93saa-1-600x600.jpg', '2021-01-10 05:16:02', '2021-01-10 12:15:39'),
(15, 'Laptop Asus Gaming Rog Strix G512 i7', 'laptop-asus-gaming-rog-strix-g512-i7', 'Iiiiiiiiiiiiii', 28, 2, 28490000, 0, 1, 'Laptop Asus Gaming Rog Strix G512 i7 (IAL001T) là chiếc laptop gaming có cấu hình mạnh mẽ và thiết kế hầm hố đậm chất gaming. Máy được trang bị chip Intel Core i7 thế hệ mới nhất cùng với màn hình cao cấp chuẩn gaming giúp bạn thỏa sức chiến những tựa game cực đỉnh.', 'img/asus-gaming-rog-strix-g512-i7-ial001t-272120-022128-225687-600x600.jpg', '2021-01-10 05:20:34', '2021-01-10 05:20:34'),
(16, 'Laptop Dell Vostro 3590 i7', 'laptop-dell-vostro-3590-i7', 'Iiiiiiiiiiiiii', 35, 2, 20490000, 0, 1, 'Laptop Dell Vostro 3590 i7 (GRMGK2) là phiên bản laptop đồ họa kĩ thuật có thiết kế hiện đại, cấu hình khỏe với vi xử lí gen 10 và card đồ họa rời. Đây chính là chiếc laptop đáng cân nhắc đối với dân đồ họa hay sinh viên khối ngành kĩ thuật.', 'img/dell-vostro-3590-i7-grmgk2-220718-220718-600x600.jpg', '2021-01-10 05:31:45', '2021-01-10 05:31:45'),
(17, 'Laptop Dell G5 15 5500 i7', 'laptop-dell-g5-15-5500-i7', 'Iiiiiiiiiiiiii', 34, 2, 34490000, 0, 1, 'Laptop Dell G5 15 5500 i7 (70228123) với cấu hình mạnh mẽ, thiết kế đẹp mắt, chiếc laptop Dell này sẽ đem lại trải nghiệm chơi game cực đã, làm việc mượt mà.', 'img/dell-g5-15-5500-i7-70228123-094621-024632-600x600.jpg', '2021-01-10 05:36:29', '2021-01-10 05:36:29'),
(18, 'Laptop Lenovo Gaming 15IMH05 i7', 'laptop-lenovo-gaming-15imh05-i7', 'Iiiiiiiiiiiiii', 15, 2, 23490000, 0, 1, 'Sở hữu cấu hình khủng bao gồm chip Intel Core i7 gen 10, RAM 8 GB cùng card đồ họa rời mạnh mẽ, Lenovo Gaming 15IMH05 i7 (81Y40068VN) hoàn toàn xứng danh là một trong những chiếc laptop chơi game mạnh hiện nay.', 'img/lenovo-gaming-15imh05-i7-81y40068vn-225389-600x600.jpg', '2021-01-10 05:39:43', '2021-01-10 05:39:43'),
(19, 'Laptop Acer Nitro AN515 55 70AX i7', 'laptop-acer-nitro-an515-55-70ax-i7', 'Iiiiiiiiiiiiii', 28, 2, 28790000, 0, 1, 'Với vi xử lí tân tiến, card đồ họa rời khủng cùng khả năng tản nhiệt tối ưu, laptop Acer Nitro AN515 55 70AX i7 (NH.Q7NSV.001) là một “vũ khí” lợi hại sẵn sàng cùng bạn chiến đấu mọi trận chiến căng thẳng.', 'img/acer-nitro-an515-55-70ax-i7-10750h-8gb-512gb-4gb-g-091920-101950-600x600.jpg', '2021-01-10 06:57:25', '2021-01-10 06:57:25'),
(20, 'Laptop HP 348 G7 i5', 'laptop-hp-348-g7-i5', 'Iiiiiiiiiiiiii', 34, 2, 16290000, 0, 1, 'Laptop HP 348 G7 i5 (9PH06PA) là mẫu laptop giá mềm, thiết kế đẹp của HP, tập trung vào cấu hình và các tiện ích sử dụng. Máy phù hợp cho các bạn sinh viên hay nhân viên văn phòng dùng để xử lý công việc, học tập và giải trí hàng ngày.', 'img/hp-348-g7-i5-9ph06pa-kg2-1-218439-600x600.jpg', '2021-01-10 07:01:28', '2021-01-10 07:01:28'),
(21, 'Laptop LG Gram 15 i5', 'laptop-lg-gram-15-i5', 'Iiiiiiiiiiiiii', 35, 2, 33990000, 0, 1, 'Nếu công việc của bạn đòi hỏi phải di chuyển nhiều, bạn muốn sở hữu một chiếc laptop mỏng nhẹ nhưng vẫn đảm bảo cấu hình đủ mạnh để đáp ứng nhu cầu học tập và làm việc, LG Gram 15 i5 (15Z90N-V.AR55A5) chính là một sự lựa chọn tuyệt vời dành cho bạn.', 'img/lg-gram-15-i5-15z90n-var55a5-153920-033925-600x600.jpg', '2021-01-10 07:05:38', '2021-01-10 07:05:38'),
(22, 'Laptop MSI Gaming Leopard 10SDK GL65 i7', 'laptop-msi-gaming-leopard-10sdk-gl65-i7', 'Iiiiiiiiiiiiii', 13, 2, 32990000, 0, 1, 'Laptop MSI Gaming Leopard 10SDRK GL65 i7 (242VN) là chiếc laptop gaming với thiết kế chuẩn hiện đại, hiệu năng mạnh mẽ với CPU thế hệ mới mang lại sức mạnh chiến game đỉnh cao cho các game thủ lựa chọn lí tưởng trong tầm giá.', 'img/msi-gaming-leopard-10sdr-gl65-i7-242vn-225857-600x600.jpg', '2021-01-10 07:08:44', '2021-01-10 07:08:44'),
(23, 'Laptop Huawei MateBook D 15 R5', 'laptop-huawei-matebook-d-15-r5', 'Iiiiiiiiiiiiii', 16, 2, 16290000, 0, 1, 'Trải nghiệm làm việc, giải trí mượt mà với laptop Huawei MateBook D 15 R5 (Boh-WAQ9R), cấu hình vượt trội, thiết kế mỏng nhẹ và màn hình tràn viền tuyệt hảo là những gì mà chiếc laptop doanh nhân cao cấp này đem đến.', 'img/huawei-matebook-d-15-r5-bohwaq9r-250520-020512-600x600.jpg', '2021-01-10 07:12:13', '2021-01-10 07:12:13'),
(24, 'Laptop Asus VivoBook A412F i5', 'laptop-asus-vivobook-a412f-i5', 'Iiiiiiiiiiiiii', 16, 2, 16190000, 0, 1, 'Với thiết kế nhỏ gọn lý tưởng, Asus VivoBook A412F (EK739T) là mẫu laptop cho công việc và học tập có mức giá hợp lý, phù hợp với những bạn học sinh sinh viên đang tìm kiếm một thiết bị vừa để thiết kế đồ hoạ cơ bản lại còn giải trí chơi game nhẹ nhàng.', 'img/asus-vivobook-a412f-i510210u-8gb-32gb-512gb-win10-kg-218865-600x600.jpg', '2021-01-10 07:16:07', '2021-01-10 07:16:07'),
(25, 'Máy tính bảng iPad Pro 12.9 inch Wifi Cellular 128GB (2020)', 'may-tinh-bang-ipad-pro-129-inch-wifi-cellular-128gb-2020', 'Iiiiiiiiiiiiii', 11, 3, 30990000, 0, 1, 'Sau bao ngày chờ đợi, chiếc máy tính bảng iPad Pro 12.9 inch Wifi Cellular 128GB (2020) đã được trình làng. Với thiết kế không mấy khác biệt so với người anh em iPad Pro 2018 nhưng được Apple nâng cấp hệ thống camera, cùng con chip A12Z giúp iPad Pro 12.9 (2020) mang đến hiệu năng ấn tượng cho người dùng những trải nghiệm tuyệt vời.', 'img/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-bac-600x600-1-200x200.jpg', '2021-01-10 07:20:54', '2021-01-10 12:16:19'),
(26, 'Máy tính bảng iPad Pro 11 inch Wifi Cellular 128GB (2020)', 'may-tinh-bang-ipad-pro-11-inch-wifi-cellular-128gb-2020', 'Iiiiiiiiiiiiii', 17, 3, 25490000, 0, 1, 'Đã 2 năm kể từ khi mẫu iPad Pro 2018 ra mắt, mới đây, mẫu iPad Pro mới nhất - iPad Pro 11 inch (2020) vừa được Apple trình làng với nhiều sự cải tiến đáng giá lẫn về tính năng và sức mạnh xử lý, hứa hẹn đây sẽ là mẫu máy tính bảng được săn đón nhiều nhất trong năm 2020.', 'img/ipad-pro-11-inch-wifi-cellular-128gb-2020-bac-600x600-1-600x600.jpg', '2021-01-10 07:25:38', '2021-01-10 07:25:38'),
(27, 'Máy tính bảng iPad Air 4 Wifi Cellular 256GB (2020)', 'may-tinh-bang-ipad-air-4-wifi-cellular-256gb-2020', 'Iiiiiiiiiiiiii', 19, 3, 24990000, 0, 1, 'Chấn động giới công nghệ toàn cầu, khi một tablet lần đầu được tích hợp bên cạnh một trong những chipset hàng đầu 2020, iPad Air 4 Wifi Cellular 256GB 2020 sở hữu con chip A14 Bionic với hiệu năng vô cùng mạnh mẽ, kết nối 4G tiện dụng cùng bộ nhớ cực khủng lên đến 256 GB.', 'img/ipad-4-cellular-hong-new-600x600-600x600.jpg', '2021-01-10 07:47:44', '2021-01-10 14:38:27'),
(28, 'Máy tính bảng Samsung Galaxy Tab A7 (2020)', 'may-tinh-bang-samsung-galaxy-tab-a7-2020', 'Iiiiiiiiiiiiii', 7, 3, 7190000, 0, 1, 'Samsung Galaxy Tab A7 (2020) là một chiếc máy tính bảng có thiết kế đẹp, cấu hình khá, nhiều tính năng tiện ích, một công cụ đắc lực hỗ trợ bạn trong công việc cũng như trong học tập hay giải trí.', 'img/samsung-galaxy-tab-a7-2020-xam-200x200.jpg', '2021-01-10 07:52:52', '2021-01-10 07:52:52'),
(29, 'Máy tính bảng Samsung Galaxy Tab S6', 'may-tinh-bang-samsung-galaxy-tab-s6', 'Iiiiiiiiiiiiii', 16, 3, 16490000, 0, 1, 'Samsung Galaxy Tab S6 là chiếc máy tính bảng 2 trong 1, được thiết kế để giúp cho những người cần một sản phẩm đủ gọn gàng nhưng mạnh mẽ.', 'img/samsung-galaxy-tab-s6-600x600-1-600x600.jpg', '2021-01-10 07:55:14', '2021-01-10 07:55:14'),
(30, 'Máy tính bảng Huawei MatePad T8', 'may-tinh-bang-huawei-matepad-t8', 'Iiiiiiiiiiiiii', 8, 3, 2990000, 0, 1, 'Huawei MatePad T8 là một trong những mẫu máy tính bảng giá rẻ của Huawei có thiết kế nguyên khối cùng một cấu hình cơ bản, đủ dùng cho các tác vụ hằng ngày của mọi người dùng.', 'img/huawei-matepad-t8-xanh-600x600.jpg', '2021-01-10 07:57:55', '2021-01-10 07:57:55'),
(31, 'Máy tính bảng Huawei MediaPad M5 Lite', 'may-tinh-bang-huawei-mediapad-m5-lite', 'Iiiiiiiiiiiiii', 7, 3, 7990000, 0, 1, 'Nếu bạn đang tìm kiếm một chiếc máy tính bảng chạy hệ điều hành Android phục vụ cho công việc hay giải trí cao cấp thì Huawei Mediapad M5 Lite là sự lựa chọn đáng quan tâm bởi màn hình lớn, CPU ngon và hỗ trợ 4G.', 'img/huawei-mediapad-m5-lite-gray-600x600-1-600x600.jpg', '2021-01-10 08:00:26', '2021-01-10 08:00:26'),
(32, 'Máy tính bảng Lenovo Tab M10', 'may-tinh-bang-lenovo-tab-m10', 'iiiiiiiii', 10, 3, 3790000, 0, 1, 'Lenovo Tab M10 chính là chiếc máy tính bảng với màn hình sắc nét kích thước lớn cùng thời lượng pin trâu đáp ứng tốt nhu cầu sử dụng cơ bản như xem phim, lướt web hằng ngày.', 'img/lenovo-tab-m10-black-600x600.jpg', '2021-01-10 08:02:58', '2021-01-10 08:02:58'),
(33, 'Máy tính bảng Masstel Tab 10 Ultra', 'may-tinh-bang-masstel-tab-10-ultra', 'Iiiiiiiiiiiiii', 5, 3, 3190000, 0, 1, 'Masstel Tab 10 Ultra được cho là phiên bản được cải tiến từ các phiên bản tiền nhiệm trước đó là Tab 10 Pro, có mức giá tầm trung nhưng vẫn đảm bảo chất lượng. Hãy cùng tìm hiểu đứa “con cưng” mới nhất của Masstel tính tới tháng 10/2020.', 'img/masstel-tab-10-ultra-bac-600x600-200x200.jpg', '2021-01-10 08:05:50', '2021-01-10 08:05:50'),
(34, 'Tai nghe AirPods Pro sạc không dây Apple MWP22', 'tai-nghe-airpods-pro-sac-khong-day-apple-mwp22', 'Iiiiiiiiiiiiii', 59, 4, 5990000, 0, 1, 'AirPods Pro với thiết kế gọn gàng, đẹp và tinh tế, tai nghe được thiết kế theo dạng In-ear thay vì Earbuds như AirPods 2, cho phép chống ồn tốt hơn, khó rớt khi đeo và êm tai hơn.', 'img/tai-nghe-bluetooth-airpods-pro-apple-mwp22-1-org.jpg', '2021-01-10 08:08:53', '2021-01-10 08:08:53'),
(35, 'Chuột Bluetooth Apple Magic Mouse 2 MLA02 Trắng', 'chuot-bluetooth-apple-magic-mouse-2-mla02-trang', 'Iiiiiiiiiiiiii', 24, 4, 2490000, 0, 1, 'Chuột Bluetooth Magic Mouse 2 MLA02 với thiết kế sang trọng, cao cấp mang thương hiệu Apple', 'img/chuot-bluetooth-apple-mla02-trang-org-1.jpg', '2021-01-10 08:11:08', '2021-01-10 08:11:08'),
(36, 'Tai nghe chụp tai Bluetooth Sony WH-1000XM4', 'tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4', 'Iiiiiiiiiiiiii', 100, 4, 8490000, 0, 1, 'Tai nghe chụp tai Bluetooth Sony WH-1000XM4/BME Đen có thiết kế đơn giản, kích thước nhỏ gọn, màu sắc hài hòa đáp ứng nhu cầu giải trí bằng âm nhạc ở mọi địa điểm. Tai nghe có cấu trúc gấp thông minh bạn có thể dễ dàng gấp bỏ vào balo mang theo muôn nơi.', 'img/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-ava-600x600.jpg', '2021-01-10 08:15:08', '2021-01-10 08:15:08'),
(37, 'Balo Laptop 15.6 inch kèm cổng USB Arctic Hunter B-00320', 'balo-laptop-156-inch-kem-cong-usb-arctic-hunter-b-00320', 'Iiiiiiiiiiiiii', 9, 4, 985000, 0, 1, 'Balo Laptop Arctic Hunter B-00320 thiết kế hiện đại, cứng cáp, có sức chứa lớn phù hợp khi đi công tác hay du lịch', 'img/balo-laptop-15-inch-cong-usb-arctic-hunter-b-00320-ava-600x600.jpg', '2021-01-10 08:18:02', '2021-01-10 08:18:02'),
(38, 'Chuột Gaming Corsair M55 RGB Pro Đen', 'chuot-gaming-corsair-m55-rgb-pro-den', 'Iiiiiiiiiiiiii', 89, 4, 890000, 0, 1, 'Trọng lượng nhẹ chỉ 86 g, kiểu dáng thiết kế theo hình thái học tay cầm, cạnh bên cao su tăng độ bám chắc\r\nChuột máy tính mang đến sự thoải mái tốt nhất trên tay cầm, vừa vặn, chắc chắn, người dùng kiểm soát tốt mọi thao tác trên chuột, vỏ chuột làm từ nhựa nhám chống trơn trượt. Đây là sản phẩm chuột hợp với người thuận cả hai tay.', 'img/chuot-gaming-corsair-m55-rgb-pro-den-ava-600x600.jpg', '2021-01-10 08:21:43', '2021-01-10 08:21:43'),
(39, 'Thẻ nhớ MicroSD 200 GB SanDisk Class 10', 'the-nho-microsd-200-gb-sandisk-class-10', 'Iiiiiiiiiiiiii', 20, 4, 2100000, 0, 1, 'Class 10 cho tốc độ ghi dữ liệu nhanh\r\nĐây là chỉ số có trên các thẻ nhớ đắt tiền bởi sự ưu việt của nó, giúp bạn vừa chụp vừa quay phim (với thiết bị có hỗ trợ tính năng), lưu trữ trực tiếp ảnh có dung lượng lớn với tốc độ nhanh,...', 'img/the-nho-microsd-200gb-class10uhs1-fix-600x600.jpg', '2021-01-10 08:26:30', '2021-01-10 08:26:30'),
(40, 'Túi đựng AirPods Pro Nhựa cứng trong JM PD01', 'tui-dung-airpods-pro-nhua-cung-trong-jm-pd01', 'Iiiiiiiiiiiiii', 10, 4, 100000, 0, 1, 'Thiết kế đơn giản, đáng yêu và đẹp mắt, 2 màu sắc tùy chọn trắng họa tiết xanh hoặc trắng họa tiết hồng\r\nTúi đựng AirPods này sẽ dễ được sự chú ý của các bạn gái trẻ, kích thước nhỏ gọn rất tiện mang theo. Sản phẩm sử dụng cho AirPods Pro hoặc những thiết bị kích thước tương đương', 'img/tui-airpods-pro-nhua-cung-trong-jm-pd01-vang-2-org.jpg', '2021-01-10 08:30:29', '2021-01-10 12:15:39'),
(41, 'Vòng tay thông minh Samsung Galaxy Fit2 đen', 'vong-tay-thong-minh-samsung-galaxy-fit2-den', 'Iiiiiiiiiiiiii', 75, 5, 750000, 0, 1, 'Vòng tay thông minh Samsung là phụ kiện nhỏ gọn, hỗ trợ nhiều tính năng hiện đại đi kèm với giá thành rẻ hơn nhiều so với một chiếc SmartWatch. Trong đó, Samsung Galaxy Fit 2 là dòng sản phẩm mới ra gần đây, được cập nhật thêm các tính năng hữu ích và cải tiến thời lượng pin tới 15 ngày.', 'img/samsung-galaxy-fit2-den-1-1-org.jpg', '2021-01-10 08:33:41', '2021-01-10 08:33:41'),
(42, 'Samsung Galaxy Watch Active 2 44mm', 'samsung-galaxy-watch-active-2-44mm', 'Iiiiiiiiiiiiii', 68, 5, 6990000, 0, 1, 'Đồng hồ thông minh Samsung Galaxy Watch Active 2 44mm là phiên bản có sự cải tiến về công nghệ để mang đến những trải nghiệm tốt nhất cho người dùng với nhiều tính năng chăm sóc sức khỏe, nhận cuộc gọi trực tiếp cũng như nhiều tính năng tiện ích khác.', 'img/samsung-galaxy-watch-active-2-44-mm-day-da-den-2-1-org.jpg', '2021-01-10 08:36:04', '2021-01-10 12:17:15'),
(43, 'Đồng hồ thông minh Huami Amazfit GTS vàng', 'dong-ho-thong-minh-huami-amazfit-gts-vang', 'Iiiiiiiiiiiiii', 22, 5, 2093000, 0, 1, 'Đồng hồ thông minh Huami Amazfit GTS phiên bản màu vàng với thiết kế nhiều điểm giống với Apple Watch, màn hình 1.65 inch cùng độ phân giải là 348 x 442 pixels giúp hiển thị thông tin, hình ảnh rõ ràng và sắc nét. Đi kèm theo là dây đeo silicone 20mm mang lại cảm giác vô cùng mềm mại và dễ chịu khi đeo', 'img/huami-amazfit-gts-vang-ava-600x600.jpg', '2021-01-10 08:37:54', '2021-01-10 08:37:54'),
(44, 'Đồng hồ thông minh Suunto 7 Dây silicone', 'dong-ho-thong-minh-suunto-7-day-silicone', 'Iiiiiiiiiiiiii', 7, 5, 11600000, 0, 1, 'Đồng hồ thông minh Suunto 7 Dây silicone phiên bản màu đen với mặt kính cường lực hình tròn, màn hình AMOLED 1.97 inch với độ phân giải 454 x 454 pixels cùng độ sáng lên tới 1000 nits, mức độ sáng này sẽ thay đổi dựa trên điều kiện ánh sáng của môi trường xung quanh, nhờ vậy có thể hiển thị tốt dưới ánh sáng mặt trời. Dây đeo làm từ silicone tạo cảm giác mềm mại và dễ chịu khi đeo.', 'img/suunto-7-day-silicon-den-2-org.jpg', '2021-01-10 08:40:28', '2021-01-10 08:40:28'),
(45, 'Apple Watch S5 44mm viền nhôm dây cao su đen', 'apple-watch-s5-44mm-vien-nhom-day-cao-su-den', 'Iiiiiiiiiiiiii', 12, 5, 12990000, 0, 1, 'Apple Watch S5 44 mm là phiên bản nâng cấp nhẹ so với phiên bản Apple Watch S4 tiền nhiệm. Lần đầu tiên Apple Watch sẽ được trang bị màn hình OLED luôn bật, tính năng la bàn và khả năng cảnh báo khẩn cấp trên nhiều quốc gia hơn.', 'img/apple-watch-s5-44mm-vien-nhom-day-cao-su-5-org.jpg', '2021-01-10 08:43:39', '2021-01-10 08:44:33'),
(46, 'Huawei Watch GT2 Pro 46mm dây silicone', 'huawei-watch-gt2-pro-46mm-day-silicone', 'Iiiiiiiiiiiiii', 8, 5, 8990000, 0, 1, 'Huawei Watch GT2 Pro 46mm dây silicone với thiết kế vỏ bằng titan, mặt đồng hồ làm bằng kính sapphire và mặt lưng bằng gốm tạo nên vẻ đẹp cao cấp, sang trọng. Sở hữu màn hình AMOLED 1.39 inch có độ phân giải 454 x 454 pixels, cho hình ảnh được hiển thị sắc nét, chi tiết hơn. Thiết kế dây đeo silicone mềm mai, không bị khó chịu khi dùng trong thời gian dài.', 'img/watch-gt2-pro-46mm-day-silicone-cont-1-org.jpg', '2021-01-10 08:49:30', '2021-01-10 08:49:30'),
(47, 'Oppo Watch 41mm dây silicone hồng', 'oppo-watch-41mm-day-silicone-hong', 'Iiiiiiiiiiiiii', 13, 5, 4792000, 0, 1, 'Đồng hồ thông minh Oppo Watch màu hồng phiên bản 41mm trang bị màn hình AMOLED 1.6 inch cùng độ phân giải là 320 x 360 pixels, mật độ điểm ảnh 326ppi cho chất lượng hiển thị cực kì sắc nét. Dây đeo làm từ silicon với thiết kế mang lại cảm giác vô cùng mềm mại, không bị đau khi đeo lâu', 'img/oppo-watch-41mm-day-silicone-hong-1-org.jpg', '2021-01-10 08:51:42', '2021-01-10 12:19:15'),
(48, 'Samsung Galaxy Watch 3 45mm titanium', 'samsung-galaxy-watch-3-45mm-titanium', 'Iiiiiiiiiiiiii', 14, 5, 14990000, 0, 1, 'Thiết kế sang trọng, chất liệu Titanium cao cấp\r\nĐồng hồ Samsung Galaxy Watch 3 45mm titanium được trang bị dây đeo thép không gỉ sang trọng, kết hợp cùng lớp màu Mystic Black độc quyền với nét đẹp huyền bí, tinh tế giúp cho mẫu Samsung Galaxy Watch 3 này trở nên cao cấp và đặc biệt hơn hẳn những phiên bản khác.', 'img/samsung-galaxy-watch-3-45mm-titanium-2-org.jpg', '2021-01-10 08:54:01', '2021-01-10 08:54:01'),
(49, 'Đồng hồ thông minh Huami Amazfit T-Rex', 'dong-ho-thong-minh-huami-amazfit-t-rex', 'Iiiiiiiiiiiiii', 22, 5, 2309000, 0, 1, 'Đồng hồ thông minh Huami Amazfit T-Rex sở hữu màn hình 1.3 Inch cùng kích thước khá là hầm hố nhưng chỉ nặng 36g. Mặt kính cường lực cùng với khả năng chống chịu tốt ở mọi môi trường khắc nghiệt. Dây đeo silicone đem lại cho người dùng cảm giác êm ái, thoải mái khi đeo trong thời gian dài.', 'img/xiaomi-amazfit-t-rex-1-3-org.jpg', '2021-01-10 08:57:32', '2021-01-11 09:27:00'),
(50, 'Apple Watch S6 LTE 44mm viền thép dây cao su', 'apple-watch-s6-lte-44mm-vien-thep-day-cao-su', 'Iiiiiiiiiiiiii', 0, 5, 21990000, 0, 1, 'Apple Watch S6 LTE mang đến những nâng cấp ấn tượng so với phiên bản Apple Watch S5. Nổi bật nhất là tính năng eSim cho phép bạn sử dụng các chức năng như gọi điện, nhắn tin,... mà không cần điện thoại\r\nThiết kế sang trọng, hiện đại\r\nApple Watch S6 LTE 44mm viền thép dây cao su vẫn giữ trọn vẹn nét tinh tế và sắc sảo trong thiết kế từ trước đến nay, sở hữu mặt đồng hồ sapphire cao cấp với kích thước 1.78 inch, viền nhôm được vát gọt công phu và dây đeo cao su co dãn, êm tay.', 'img/apple-watch-s6-lte-44mm-vien-thep-day-cao-su-den-cont-1-org.jpg', '2021-01-10 09:00:02', '2021-01-10 12:29:55');

-- --------------------------------------------------------

--
-- Table structure for table `product_reviews`
--

CREATE TABLE `product_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `rate` tinyint(4) NOT NULL DEFAULT 0,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_reviews`
--

INSERT INTO `product_reviews` (`id`, `user_id`, `product_id`, `rate`, `comment`, `status`, `created_at`, `updated_at`) VALUES
(3, 3, 1, 0, 'Tuyệt vời', 'active', '2021-01-10 12:28:43', '2021-01-10 12:28:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fb_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `phone`, `status`, `avatar`, `address`, `fb_id`, `google_id`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Minh Nhat', 'gefowo3311@izzum.com', NULL, '01230936793', 'active', 'img/profile.jpg', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', NULL, NULL, '$2y$10$5ECsZIBk.ZmmUksy9lih4.tcfsx94P7/kT3Zf.eEt3IjKZtI2V8Tm', NULL, '2021-01-10 12:06:11', '2021-01-10 12:12:43'),
(3, 'Nguyên', 'diyof52823@majorsww.com', NULL, '0383188752', 'active', 'img/34123114_235937487140188_8411538856163147776_n.jpg', '227 Nguyễn Văn Cừ, Quận 5, TP. HCM', NULL, NULL, '$2y$10$1otYbIbFoc8QF5mzGaUY..U2dCCN0OszNO/jZ9TCjSbKbkKOvhiRa', NULL, '2021-01-10 12:24:31', '2021-01-10 12:26:51');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`id`, `product_id`, `user_id`, `created_at`, `updated_at`) VALUES
(16, 1, 2, '2021-01-10 12:07:46', '2021-01-10 12:07:46'),
(17, 2, 2, '2021-01-10 12:07:58', '2021-01-10 12:07:58'),
(18, 3, 2, '2021-01-10 12:09:55', '2021-01-10 12:09:55'),
(19, 11, 2, '2021-01-10 12:10:07', '2021-01-10 12:10:07'),
(20, 17, 2, '2021-01-10 12:10:20', '2021-01-10 12:10:20'),
(21, 49, 2, '2021-01-10 12:10:25', '2021-01-10 12:10:25'),
(22, 45, 2, '2021-01-10 12:10:29', '2021-01-10 12:10:29'),
(23, 16, 2, '2021-01-10 12:10:36', '2021-01-10 12:10:36'),
(24, 42, 2, '2021-01-10 12:10:42', '2021-01-10 12:10:42'),
(25, 25, 2, '2021-01-10 12:10:57', '2021-01-10 12:10:57'),
(26, 26, 2, '2021-01-10 12:11:05', '2021-01-10 12:11:05'),
(27, 44, 2, '2021-01-10 12:11:13', '2021-01-10 12:11:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`c_id`),
  ADD UNIQUE KEY `categories_c_name_unique` (`c_name`),
  ADD KEY `categories_c_slug_index` (`c_slug`),
  ADD KEY `categories_c_active_index` (`c_active`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_product_id_foreign` (`product_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pro_id`),
  ADD UNIQUE KEY `products_pro_name_unique` (`pro_name`),
  ADD KEY `products_pro_slug_index` (`pro_slug`),
  ADD KEY `products_pro_category_id_index` (`pro_category_id`),
  ADD KEY `products_pro_active_index` (`pro_active`);

--
-- Indexes for table `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `c_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pro_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`pro_id`);
COMMIT;