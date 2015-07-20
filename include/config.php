<?php
	error_reporting(0);
	//define absolute path
	define('abspath','http://localhost/w2f/');
	define('adminemail','khafidli@ymail.com');
	define('gmailaccount', 'khafidli@gmail.com');
	define('gmailpassword', base64_decode("ZmVicnVhcmkyODE5OTM="));
	
	$dbHost	= 'localhost';
	$dbUser = 'root';
	$dbPass = '';
	$dbName	= 'db_multiusaha';
	mysql_connect($dbHost, $dbUser, $dbPass) or die('Tidak dapat melakukan koneksi ke MySQL');
	mysql_select_db($dbName) or die('Database <strong>'.$dbName.'</strong> tidak ditemukan');
?>