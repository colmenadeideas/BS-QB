<?php 

	//Current Language
	define ('DEFAULT_LANGUAGE', 'en_EN');
	
	date_default_timezone_set('America/Caracas');	
	//Path info
	define ('SITE_PATH', dirname(dirname(realpath(__FILE__))).'/'); 
	define ('SITE_NAME', "La Tienda del Pintor");
	define ('PUBLIC_PATH', URL . 'public/');
	define ('CSS', URL . 'public/css/'); 
	define ('IMG', URL . 'public/img/'); 
	define ('ICONS', URL . 'public/img/icons/'); 
	define ('IMAGES', URL . 'public/images/'); 
	define ('JS', URL . 'public/js/'); 
	define ('LIBS', SITE_PATH . 'libs/');
	define ('LANG', SITE_PATH . 'lang/'); 
	define ('SIDEBARS', SITE_PATH . '/app/views/sidebars/'); 
 
	
	//Email Configuration
	define ('SYSTEM_EMAIL', 'noresponder@flamuko.com');
	define ('SYSTEM_EMAIL_RECIEVER', 'hola@besign.com.ve');
	define ( 'MAIL_SERVER', 'smtp.zoho.com');
	define ( 'MAIL_HOST', 'smtp.zoho.com');
	define ('MAIL_PORT', 587);	
	define ( 'MAIL_PASSWORD', 'erdfr321');
	define ('MAIL_SECURE','tls'); 

	define ('CLIENTS_FOLDER', SITE_PATH.'../html/public/files/');
	define ('CLIENTS_FOLDER_UPLOADED', URL.'public/files/');

	define ('INSTAGRAM_CLIENT_ID', 'ad852b3e297a46818ffb0a03acd22d44');
	define ('INSTAGRAM_CLIENT_SECRET', '35e6b3816e2a468197f452dbe3f06b55');
	define ('INSTAGRAM_CALLBACK_URL', 'http://olbluerest.com/site/callback/instagram');

	define ('CSV', SITE_PATH . '../html/public/csv/'); 

	
	//Hash definitions
	define("PBKDF2_HASH_ALGORITHM", "sha256");
	define("PBKDF2_ITERATIONS", 1000);
	define("PBKDF2_SALT_BYTE_SIZE", 24);
	define("PBKDF2_HASH_BYTE_SIZE", 24);
	
	define("HASH_SECTIONS", 4);
	define("HASH_ALGORITHM_INDEX", 0);
	define("HASH_ITERATION_INDEX", 1);
	define("HASH_SALT_INDEX", 2);
	define("HASH_PBKDF2_INDEX", 3);
	
	//define("EXISTENCIA_NIVEL_ALTO", 500);
	define("EXISTENCIA_NIVEL_MEDIO", 600);
	define("EXISTENCIA_NIVEL_BAJO", 100);
	
	
	//TODO	//String mix for password hash
	
	//Database Meekro Class Config
	DB::$user = DB_USER;
	DB::$password = DB_PASSWORD;
	DB::$dbName = DB_NAME;
	DB::$host = DB_HOST;
	DB::$encoding = 'UTF8';	
	
	DB::$error_handler = 'my_error_handler'; 
	
	function my_error_handler($params) {
	   echo "Error: " . $params['error'] . "Query: " . $params['query'] . "<br>\n";
	   die; 
	}	 
	DB::$success_handler = 'my_success_handler'; // If Success
	function my_success_handler($params) {
	  return true;
	}
	
?>