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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `Category_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Category_Name` varchar(100) NOT NULL,
  `number_of_products` int(11) NOT NULL,
  `Is_deleted` int(11) NOT NULL,
  PRIMARY KEY (`Category_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Pain Relief',5,0),(2,'Antibiotics',3,0),(3,'Vitamins',7,0),(4,'Cough & Cold',4,0),(5,'Allergy',3,0),(6,'Digestive Health',4,0),(7,'Skin Care',5,0),(8,'Heart Health',2,0),(9,'Diabetes',3,0),(10,'Eye Care',2,0);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
INSERT INTO `customers` VALUES ('1','Ahmed Youssef','ahmed.youssef@example.com','password1',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('10','Noha Said','noha.said@example.com','password10',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('11','Amr Nabil','amr.nabil@example.com','password11',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('12','Rania Hassan','rania.hassan@example.com','password12',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('13','Ali Mostafa','ali.mostafa@example.com','password13',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('14','Nour Adel','nour.adel@example.com','password14',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('15','Salma Tarek','salma.tarek@example.com','password15',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('2','Mona Ali','mona.ali@example.com','password2',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('3','Mohamed Salah','mohamed.salah@example.com','password3',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('4','Fatma Hassan','fatma.hassan@example.com','password4',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('5','Omar Mahmoud','omar.mahmoud@example.com','password5',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('6','Sara Ahmed','sara.ahmed@example.com','password6',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('7','Khaled Ibrahim','khaled.ibrahim@example.com','password7',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('8','Aya Samir','aya.samir@example.com','password8',0,'2024-08-04 01:36:30','2024-08-04 01:36:30'),('9','Youssef Hany','youssef.hany@example.com','password9',0,'2024-08-04 01:36:30','2024-08-04 01:36:30');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `Order_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Customer_ID` varchar(255) NOT NULL,
  `Product_ID` varchar(255) NOT NULL,
  `Order_Status` varchar(255) NOT NULL,
  `Is_deleted` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Order_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'1','1','Pending','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(2,'2','2','Completed','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(3,'3','3','Shipped','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(4,'4','4','Cancelled','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(5,'5','5','Pending','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(6,'6','6','Completed','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(7,'7','7','Shipped','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(8,'8','8','Cancelled','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(9,'9','9','Pending','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(10,'10','10','Completed','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(11,'11','1','Shipped','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(12,'12','2','Cancelled','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(13,'13','3','Pending','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(14,'14','4','Completed','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(15,'15','5','Shipped','0','2024-08-04 01:36:30','2024-08-04 01:36:30'),(16,'1','44','Pending','0','2024-08-03 22:43:29','2024-08-03 22:43:29');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pharmacies`
--

DROP TABLE IF EXISTS `pharmacies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pharmacies` (
  `Pharmacy_ID` char(36) NOT NULL,
  `Pharmacy_Name` varchar(100) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Phone_Number` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Pharmacy_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacies`
--

LOCK TABLES `pharmacies` WRITE;
/*!40000 ALTER TABLE `pharmacies` DISABLE KEYS */;
INSERT INTO `pharmacies` VALUES ('1','Cairo Pharmacy','12 Tahrir Street, Cairo','01000000001','2024-08-04 01:36:30','2024-08-04 01:36:30'),('2','Alex Pharmacy','23 Corniche Street, Alexandria','01000000002','2024-08-04 01:36:30','2024-08-04 01:36:30'),('3','Giza Pharmacy','45 Pyramids Road, Giza','01000000003','2024-08-04 01:36:30','2024-08-04 01:36:30'),('4','Mansoura Pharmacy','67 El Gomhoria Street, Mansoura','01000000004','2024-08-04 01:36:30','2024-08-04 01:36:30'),('5','Zagazig Pharmacy','89 El Mokatam Street, Zagazig','01000000005','2024-08-04 01:36:30','2024-08-04 01:36:30');
/*!40000 ALTER TABLE `pharmacies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `Product_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Pharmacy_ID` int(11) NOT NULL,
  `Product_Name` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Expiry_Date` date DEFAULT NULL,
  `Category_Id` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `Is_deleted` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Product_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (41,1,'Cetirizine','Allergy Relief',20.00,'2025-06-01',5,100,'images/cetirizine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(42,2,'Fexofenadine','Allergy Relief',18.00,'2025-06-01',5,120,'images/fexofenadine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(43,3,'Lorazepam','Allergy Relief',25.00,'2025-06-01',5,80,'images/lorazepam.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(44,4,'Diphenhydramine','Allergy Relief',15.00,'2025-08-01',5,100,'images/diphenhydramine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(45,5,'Chlorpheniramine','Allergy Relief',12.00,'2025-08-01',5,110,'images/chlorpheniramine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(46,1,'Levocetirizine','Allergy Relief',25.00,'2025-08-01',5,60,'images/levocetirizine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(47,2,'Desloratadine','Allergy Relief',30.00,'2025-08-01',5,50,'images/desloratadine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(48,3,'Hydroxyzine','Allergy Relief',28.00,'2025-08-01',5,75,'images/hydroxyzine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(49,4,'Olopatadine','Allergy Relief',35.00,'2025-08-01',5,85,'images/olopatadine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(50,5,'Mometasone','Allergy Relief',40.00,'2025-08-01',5,65,'images/mometasone.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(51,1,'Antacid','Digestive Health',10.00,'2024-05-01',6,150,'images/antacid.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(52,2,'Laxative','Digestive Health',15.00,'2024-05-01',6,140,'images/laxative.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(53,3,'Probiotic','Digestive Health',20.00,'2024-05-01',6,130,'images/probiotic.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(54,4,'Digestive Enzyme','Digestive Health',25.00,'2024-05-01',6,120,'images/digestive_enzyme.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(55,5,'Fiber Supplement','Digestive Health',18.00,'2024-05-01',6,110,'images/fiber_supplement.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(56,1,'Anti-Diarrheal','Digestive Health',22.00,'2024-05-01',6,100,'images/anti_diarrheal.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(57,2,'Stomach Ulcer Treatment','Digestive Health',30.00,'2024-05-01',6,90,'images/stomach_ulcer.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(58,3,'Bismuth Subsalicylate','Digestive Health',35.00,'2024-05-01',6,80,'images/bismuth.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(59,4,'Simethicone','Digestive Health',12.00,'2024-05-01',6,70,'images/simethicone.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(60,5,'Lactase','Digestive Health',40.00,'2024-05-01',6,60,'images/lactase.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(61,1,'Moisturizer','Skin Care',25.00,'2025-03-01',7,150,'images/moisturizer.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(62,2,'Sunscreen','Skin Care',30.00,'2025-03-01',7,140,'images/sunscreen.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(63,3,'Acne Treatment','Skin Care',28.00,'2025-03-01',7,130,'images/acne_treatment.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(64,4,'Anti-Aging Cream','Skin Care',35.00,'2025-03-01',7,120,'images/anti_aging_cream.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(65,5,'Skin Lightening Cream','Skin Care',22.00,'2025-03-01',7,110,'images/skin_lightening_cream.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(66,1,'Eczema Cream','Skin Care',40.00,'2025-03-01',7,100,'images/eczema_cream.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(67,2,'Psoriasis Treatment','Skin Care',50.00,'2025-03-01',7,90,'images/psoriasis_treatment.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(68,3,'Scar Gel','Skin Care',45.00,'2025-03-01',7,80,'images/scar_gel.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(69,4,'Aloe Vera Gel','Skin Care',18.00,'2025-03-01',7,70,'images/aloe_vera_gel.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(70,5,'Tea Tree Oil','Skin Care',10.00,'2025-03-01',7,60,'images/tea_tree_oil.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(71,1,'Atorvastatin','Heart Health',40.00,'2025-07-01',8,120,'images/atorvastatin.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(72,2,'Aspirin 81mg','Heart Health',15.00,'2025-07-01',8,110,'images/aspirin_81mg.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(73,3,'Clopidogrel','Heart Health',50.00,'2025-07-01',8,100,'images/clopidogrel.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(74,4,'Warfarin','Heart Health',30.00,'2025-07-01',8,90,'images/warfarin.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(75,5,'Lisinopril','Heart Health',28.00,'2025-07-01',8,80,'images/lisinopril.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(76,1,'Metoprolol','Heart Health',35.00,'2025-07-01',8,70,'images/metoprolol.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(77,2,'Amlodipine','Heart Health',20.00,'2025-07-01',8,60,'images/amlodipine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(78,3,'Hydrochlorothiazide','Heart Health',25.00,'2025-07-01',8,50,'images/hydrochlorothiazide.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(79,4,'Fenofibrate','Heart Health',40.00,'2025-07-01',8,40,'images/fenofibrate.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(80,5,'Ezetimibe','Heart Health',32.00,'2025-07-01',8,30,'images/ezetimibe.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(81,1,'Metformin','Diabetes',20.00,'2026-01-01',9,100,'images/metformin.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(82,2,'Insulin Glargine','Diabetes',35.00,'2026-01-01',9,90,'images/insulin_glargine.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(83,3,'Glyburide','Diabetes',18.00,'2026-01-01',9,80,'images/glyburide.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(84,4,'Sitagliptin','Diabetes',25.00,'2026-01-01',9,70,'images/sitagliptin.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(85,5,'Pioglitazone','Diabetes',30.00,'2026-01-01',9,60,'images/pioglitazone.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(86,1,'Dapagliflozin','Diabetes',27.00,'2026-01-01',9,50,'images/dapagliflozin.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(87,2,'Liraglutide','Diabetes',45.00,'2026-01-01',9,40,'images/liraglutide.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(88,3,'Glipizide','Diabetes',22.00,'2026-01-01',9,30,'images/glipizide.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(89,4,'Canagliflozin','Diabetes',28.00,'2026-01-01',9,20,'images/canagliflozin.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(90,5,'Dulaglutide','Diabetes',32.00,'2026-01-01',9,10,'images/dulaglutide.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(91,1,'Echinacea','Immune Support',20.00,'2026-11-01',10,140,'images/echinacea.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(92,2,'Elderberry','Immune Support',25.00,'2026-11-01',10,130,'images/elderberry.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(93,3,'Astragalus','Immune Support',22.00,'2026-11-01',10,120,'images/astragalus.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(94,4,'Garlic','Immune Support',15.00,'2026-11-01',10,110,'images/garlic.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(95,5,'Ginger','Immune Support',12.00,'2026-11-01',10,100,'images/ginger.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(96,1,'Vitamin C Immune','Immune Support',18.00,'2026-11-01',10,90,'images/vitamin_c_immune.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(97,2,'Zinc Immune','Immune Support',20.00,'2026-11-01',10,80,'images/zinc_immune.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(98,3,'Propolis','Immune Support',28.00,'2026-11-01',10,70,'images/propolis.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(99,4,'Turmeric','Immune Support',30.00,'2026-11-01',10,60,'images/turmeric.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(100,5,'Ginseng','Immune Support',35.00,'2026-11-01',10,50,'images/ginseng.jpg',0,'2024-08-04 01:49:13','2024-08-04 01:49:13'),(101,1,'Ibuprofen','Pain Relief',15.00,'2025-09-01',1,100,'images/ibuprofen.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(102,2,'Acetaminophen','Pain Relief',12.00,'2025-09-01',1,120,'images/acetaminophen.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(103,3,'Naproxen','Pain Relief',18.00,'2025-09-01',1,80,'images/naproxen.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(104,4,'Aspirin','Pain Relief',10.00,'2025-09-01',1,150,'images/aspirin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(105,5,'Diclofenac','Pain Relief',20.00,'2025-09-01',1,70,'images/diclofenac.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(106,1,'Celecoxib','Pain Relief',22.00,'2025-09-01',1,60,'images/celecoxib.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(107,2,'Meloxicam','Pain Relief',30.00,'2025-09-01',1,50,'images/meloxicam.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(108,3,'Piroxicam','Pain Relief',25.00,'2025-09-01',1,40,'images/piroxicam.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(109,4,'Ketorolac','Pain Relief',28.00,'2025-09-01',1,30,'images/ketorolac.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(110,5,'Tramadol','Pain Relief',40.00,'2025-09-01',1,20,'images/tramadol.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(111,1,'Amoxicillin','Antibiotics',20.00,'2025-12-01',2,150,'images/amoxicillin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(112,2,'Azithromycin','Antibiotics',25.00,'2025-12-01',2,140,'images/azithromycin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(113,3,'Ciprofloxacin','Antibiotics',30.00,'2025-12-01',2,130,'images/ciprofloxacin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(114,4,'Doxycycline','Antibiotics',22.00,'2025-12-01',2,120,'images/doxycycline.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(115,5,'Clindamycin','Antibiotics',28.00,'2025-12-01',2,110,'images/clindamycin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(116,1,'Levofloxacin','Antibiotics',35.00,'2025-12-01',2,100,'images/levofloxacin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(117,2,'Metronidazole','Antibiotics',18.00,'2025-12-01',2,90,'images/metronidazole.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(118,3,'Nitrofurantoin','Antibiotics',22.00,'2025-12-01',2,80,'images/nitrofurantoin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(119,4,'Trimethoprim','Antibiotics',25.00,'2025-12-01',2,70,'images/trimethoprim.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(120,5,'Vancomycin','Antibiotics',40.00,'2025-12-01',2,60,'images/vancomycin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(121,1,'Vitamin A','Vitamins',15.00,'2026-04-01',3,150,'images/vitamin_a.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(122,2,'Vitamin B12','Vitamins',20.00,'2026-04-01',3,140,'images/vitamin_b12.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(123,3,'Vitamin C','Vitamins',25.00,'2026-04-01',3,130,'images/vitamin_c.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(124,4,'Vitamin D','Vitamins',30.00,'2026-04-01',3,120,'images/vitamin_d.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(125,5,'Vitamin E','Vitamins',22.00,'2026-04-01',3,110,'images/vitamin_e.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(126,1,'Folic Acid','Vitamins',18.00,'2026-04-01',3,100,'images/folic_acid.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(127,2,'Biotin','Vitamins',25.00,'2026-04-01',3,90,'images/biotin.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(128,3,'Calcium','Vitamins',30.00,'2026-04-01',3,80,'images/calcium.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(129,4,'Iron','Vitamins',20.00,'2026-04-01',3,70,'images/iron.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(130,5,'Magnesium','Vitamins',35.00,'2026-04-01',3,60,'images/magnesium.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(131,1,'Cough Syrup','Cough & Cold',18.00,'2025-11-01',4,150,'images/cough_syrup.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(132,2,'Decongestant','Cough & Cold',22.00,'2025-11-01',4,140,'images/decongestant.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(133,3,'Expectorant','Cough & Cold',20.00,'2025-11-01',4,130,'images/expectorant.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(134,4,'Antihistamine','Cough & Cold',15.00,'2025-11-01',4,120,'images/antihistamine.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(135,5,'Nasal Spray','Cough & Cold',25.00,'2025-11-01',4,110,'images/nasal_spray.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(136,1,'Throat Lozenges','Cough & Cold',12.00,'2025-11-01',4,100,'images/throat_lozenges.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(137,2,'Cold Relief Tablets','Cough & Cold',20.00,'2025-11-01',4,90,'images/cold_relief_tablets.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(138,3,'Flu Remedy','Cough & Cold',28.00,'2025-11-01',4,80,'images/flu_remedy.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(139,4,'Sinus Rinse','Cough & Cold',18.00,'2025-11-01',4,70,'images/sinus_rinse.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07'),(140,5,'Chest Rub','Cough & Cold',25.00,'2025-11-01',4,60,'images/chest_rub.jpg',0,'2024-08-04 01:58:07','2024-08-04 01:58:07');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `Sale_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Pharmacy_ID` int(11) NOT NULL,
  `Total_Amount` decimal(10,2) NOT NULL,
  `Is_deleted` int(11) NOT NULL,
  PRIMARY KEY (`Sale_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,1,500.00,0),(2,2,600.00,0),(3,3,700.00,0),(4,4,800.00,0),(5,5,900.00,0),(6,1,1000.00,0),(7,2,1100.00,0),(8,3,1200.00,0),(9,4,1300.00,0),(10,5,1400.00,0);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'adminpassword','admin@example.com','SuperAdmin',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(2,'password1','ahmed.youssef@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(3,'password2','mona.ali@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(4,'password3','mohamed.salah@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(5,'password4','fatma.hassan@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(6,'password5','omar.mahmoud@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(7,'password6','sara.ahmed@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(8,'password7','khaled.ibrahim@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(9,'password8','aya.samir@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(10,'password9','youssef.hany@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(11,'password10','noha.said@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(12,'password11','amr.nabil@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(13,'password12','rania.hassan@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(14,'password13','ali.mostafa@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(15,'password14','nour.adel@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(16,'password15','salma.tarek@example.com','customer',NULL,'2024-08-04 01:38:05','2024-08-04 01:38:05'),(17,'password16','pharmacy1@example.com','pharmacy_admin','1','2024-08-04 01:38:05','2024-08-04 01:38:05'),(18,'password17','pharmacy2@example.com','pharmacy_admin','2','2024-08-04 01:38:05','2024-08-04 01:38:05'),(19,'password18','pharmacy3@example.com','pharmacy_admin','3','2024-08-04 01:38:05','2024-08-04 01:38:05'),(20,'password19','pharmacy4@example.com','pharmacy_admin','4','2024-08-04 01:38:05','2024-08-04 01:38:05'),(21,'password20','pharmacy5@example.com','pharmacy_admin','5','2024-08-04 01:38:05','2024-08-04 01:38:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlists`
--

DROP TABLE IF EXISTS `wishlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wishlists` (
  `Wishlist_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Customer_ID` int(11) NOT NULL,
  `Product_ID` int(11) NOT NULL,
  `Is_deleted` int(11) NOT NULL,
  PRIMARY KEY (`Wishlist_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlists`
--

LOCK TABLES `wishlists` WRITE;
/*!40000 ALTER TABLE `wishlists` DISABLE KEYS */;
INSERT INTO `wishlists` VALUES (1,1,1,0),(2,2,2,0),(3,3,3,0),(4,4,4,0),(5,5,5,0),(6,6,6,0),(7,7,7,0),(8,8,8,0),(9,9,9,0),(10,10,10,0),(11,11,1,0),(12,12,2,0),(13,13,3,0),(14,14,4,0),(15,15,5,0);
/*!40000 ALTER TABLE `wishlists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-04  5:01:15
