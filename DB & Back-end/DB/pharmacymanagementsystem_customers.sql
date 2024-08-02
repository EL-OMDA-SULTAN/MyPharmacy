-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pharmacymanagementsystem
-- ------------------------------------------------------
-- Server version	5.7.43-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `Customer_ID` char(36) NOT NULL,
  `Customer_Name` varchar(100) NOT NULL,
  `Customer_Email` varchar(100) NOT NULL,
  `Customer_Password` varchar(100) NOT NULL,
  `Is_deleted` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Customer_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('1','John Doe','john.doe@example.com','$2y$10$43/bgr7kqSPItzzVxpT3beytTmZndQFkzEylEQ7NIzbnNcpZQ7OTG',0,NULL,NULL),('2','John Doe','john.doe22@example.com','$2y$10$9J4pOkR6V9Q2wdQJzub/hu1F0UTzmYc/8heUSlTWXxsCAvPTh9m8u',0,'2024-07-29 14:13:55','2024-07-29 14:13:55'),('c071b1fa-2b4f-46b5-8211-48b96833fd03','John Sssmith','john.smitssh@example.com','$2y$10$ZVSjIzB6Tb//omAmKWArlulkXGEPDu8du9Gd8naGOFJx6jF9ffUXm',0,'2024-07-29 17:20:33','2024-07-29 17:20:33'),('efe7e594-c4a8-4a93-8fcc-7ec9139f9d53','Elmotaz Bellah Osama','Zezoosama827@gmail.com','$2y$10$sQyrP8mhJBus8PIrKytWNuFoLARQ9HRliJViGieOHDuDKsMfE5PZ2',0,'2024-07-29 18:38:28','2024-07-29 18:38:28');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-02 14:24:18
