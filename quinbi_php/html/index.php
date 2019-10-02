<?php
	
	/*error_reporting(E_ALL);
	error_reporting(E_ERROR | E_PARSE);
	ini_set('display_errors', 'On');*/
	// PHP code for logging error into a given file 
  
  
// path of the log file where errors need to be logged 
$log_file = "./my-errors.log"; 
  
// setting error logging to be active 
ini_set("log_errors", TRUE);  
  
// setting the logging file in php.ini 
ini_set('error_log', $log_file); 
  
// logging the error 

	require_once ('../includes/config/local.php'); 
	require_once ('../includes/config/config.php');
	
	
	function __autoload($class) {
			
		require ( LIBS . $class. '.php');
		
	}
	require ( LIBS . 'Functions.php');
	require ( LANG . DEFAULT_LANGUAGE .'.php');	
	
	$app = new Bootstrap();
	
	$app->init();	
	
?>