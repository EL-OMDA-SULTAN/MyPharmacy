-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: pharmacymanagementsystem
-- ------------------------------------------------------
-- Server version	5.7.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `User_ID` int(11) NOT NULL AUTO_INCREMENT,
  `User_Password` varchar(255) NOT NULL,
  `User_Email` varchar(100) NOT NULL,
  `User_Type` varchar(255) DEFAULT NULL,
  `Pharmacy_ID` char(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'password123','admin@pharmacy.com','SuperAdmin',NULL,NULL,NULL),(4,'$2y$10$meKXgBCdRe8u3sEBjPPhZuydaC4YpmBTughWS8HZQzOU9i2oAqsKe','admin@test.com','pharmacy_admin',NULL,'2024-07-29 16:49:23','2024-07-29 16:49:23'),(5,'$2y$10$.I7mTJL8YgG3wJ7S13yZTOolcZYBcQJMf3Q3521Y6/01C/u632Gky','testpharmacy@example.com','pharmacy_admin','31728bd6-c748-4061-b076-cf84bff5415d','2024-07-29 16:56:04','2024-07-29 16:56:04'),(6,'$2y$10$jnJm6rCdoRcko/qI6Hes1uEGztWT8nnOnmgpHWabAJbsfGF/jvgji','john.smitssh@example.com','customer',NULL,'2024-07-29 17:20:33','2024-07-29 17:20:33'),(7,'$2y$10$yd4Vw/5G9raXyTJMz94LW.OtRNbmqMXxANW8m2VKnU6Kb91ZQLnb6','Zezoosama827@gmail.com','customer',NULL,'2024-07-29 18:38:28','2024-07-29 18:38:28'),(8,'$2y$10$f/qI8Wi7q2N77LzaRTUza.H6UsyI.izGH94FafzDqSXRIas775UVW','pharmacy@gmail.com','pharmacy_admin','724287ab-6bae-4843-a88d-6d77475fe2ad','2024-07-29 18:46:40','2024-07-29 18:46:40');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-30  1:45:42