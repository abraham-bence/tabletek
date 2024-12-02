-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Dec 02. 23:07
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `webbolt`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tablets`
--

CREATE TABLE `tablets` (
  `tablet_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `processor_clock` decimal(10,1) NOT NULL,
  `processor_cores` int(11) NOT NULL,
  `display_size` decimal(10,2) NOT NULL,
  `resolution_width` int(11) NOT NULL,
  `resolution_height` int(11) NOT NULL,
  `ram` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `tablets`
--

INSERT INTO `tablets` (`tablet_id`, `name`, `processor_clock`, `processor_cores`, `display_size`, `resolution_width`, `resolution_height`, `ram`, `description`, `price`) VALUES
(1, 'Apple iPad 10.9 (2022) 64GB', 2.9, 6, 10.90, 2360, 1640, 4, '10.9\" kijelző, Wi-Fi, 64 GB tárhely', 174990),
(2, 'Lenovo Tab M8 (4th Gen)', 2.0, 8, 8.00, 1280, 800, 3, 'Kompakt tablet Android 12 rendszerrel', 49990),
(3, 'Apple iPad Pro 13 (2024) 1TB', 3.2, 8, 13.00, 2732, 2048, 16, 'Nagy kijelzős, professzionális tablet', 919900),
(4, 'Lenovo Tab M11', 2.0, 8, 11.00, 1920, 1200, 4, 'Tartós és praktikus tablet tokban', 85990),
(5, 'Apple iPad mini 7 (2024) 128GB', 3.0, 6, 8.30, 2266, 1488, 4, 'Kicsi, de erős iPad, kék színben', 249999),
(6, 'Samsung Galaxy Tab S9 Ultra', 3.4, 8, 14.60, 2960, 1848, 12, 'Ultra prémium tablet AMOLED kijelzővel', 549990),
(11, 'zsofi', 1.0, 1, 11.00, 80, 166, 8, 'Nem okos de szép', 2147483647);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `tablets`
--
ALTER TABLE `tablets`
  ADD PRIMARY KEY (`tablet_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `tablets`
--
ALTER TABLE `tablets`
  MODIFY `tablet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
