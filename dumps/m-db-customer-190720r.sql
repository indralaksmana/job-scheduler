-- --------------------------------------------------------
-- Host:                         13.229.137.228
-- Server version:               5.7.30-0ubuntu0.18.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for mache
CREATE DATABASE IF NOT EXISTS `mache` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mache`;

-- Dumping structure for table mache.m_area
CREATE TABLE IF NOT EXISTS `m_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `datatype` varchar(64) NOT NULL DEFAULT 'SO',
  `id_global` int(11) NOT NULL DEFAULT '1',
  `code_global` varchar(64) NOT NULL DEFAULT 'NONE',
  `id_regional` int(11) NOT NULL DEFAULT '1',
  `code_regional` varchar(64) NOT NULL DEFAULT 'NONE',
  `note` varchar(256) DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '1',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `modified_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table mache.m_channel
CREATE TABLE IF NOT EXISTS `m_channel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `datatype` varchar(64) NOT NULL DEFAULT 'SO',
  `note` varchar(256) DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '1',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `modified_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table mache.m_city
CREATE TABLE IF NOT EXISTS `m_city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `datatype` varchar(64) NOT NULL DEFAULT 'SO',
  `id_global` int(11) NOT NULL DEFAULT '1',
  `code_global` varchar(64) NOT NULL DEFAULT 'NONE',
  `id_regional` int(11) NOT NULL DEFAULT '1',
  `code_regional` varchar(64) NOT NULL DEFAULT 'NONE',
  `id_area` int(11) NOT NULL DEFAULT '1',
  `code_area` varchar(64) NOT NULL DEFAULT 'NONE',
  `id_province` int(11) NOT NULL DEFAULT '1',
  `code_province` varchar(64) NOT NULL DEFAULT 'NONE',
  `note` varchar(256) DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '1',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `modified_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=519 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table mache.m_global
CREATE TABLE IF NOT EXISTS `m_global` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `datatype` varchar(64) NOT NULL DEFAULT 'SO',
  `note` varchar(256) DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '1',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `modified_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table mache.m_province
CREATE TABLE IF NOT EXISTS `m_province` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `datatype` varchar(64) NOT NULL DEFAULT 'SO',
  `id_global` int(11) NOT NULL DEFAULT '1',
  `code_global` varchar(64) NOT NULL DEFAULT 'NONE',
  `id_regional` int(11) NOT NULL DEFAULT '1',
  `code_regional` varchar(64) NOT NULL DEFAULT 'NONE',
  `id_area` int(11) NOT NULL DEFAULT '1',
  `code_area` varchar(64) NOT NULL DEFAULT 'NONE',
  `note` varchar(256) DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '1',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `modified_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table mache.m_regional
CREATE TABLE IF NOT EXISTS `m_regional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `datatype` varchar(64) NOT NULL DEFAULT 'SO',
  `id_global` int(11) NOT NULL DEFAULT '1',
  `code_global` varchar(64) NOT NULL DEFAULT 'NONE',
  `note` varchar(256) DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '1',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `modified_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
