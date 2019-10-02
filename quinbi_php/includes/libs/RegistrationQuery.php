<?php class RegistrationQuery {
		//Modelo
		
		public function __construct() {		
	
		}

		public function userExist($username) {
			
			return DB::query("SELECT * FROM " . DB_PREFIX . " `ltp_users`  WHERE `username`  = '".$username."'");
		
		}

}




?>