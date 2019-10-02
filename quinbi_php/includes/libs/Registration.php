<?php
class Registration 
{

	public function __construct() {

	}

	public function process($what = 'register',$array_data) 
	{
		

			switch ($what) {
				
				/*****  PROCESS PRE INSCRIPCION  *****/
				case 'register':
					// 1 -Creates User&Profile and Sends Authentication Link
					$array_client['username'] 	= $array_data['email'];
					$array_client['role'] 		= 'cliente';
					$array_client['name'] 		= $array_data['name'];
					$array_client['lastname'] 	= $array_data['lastname'];
					$array_client['email']   	= $array_data['email'];
					
					
					$array_client['data'] 		= $array_data;
					
										//Check if already exist in User database
					$already_registered =	RegistrationQuery::userExist($array_client['username']);
					$already_registered_result = DB::count();
					
					$array_registration['date']					 	 =   date('Y-m-d G:i:s');
					if (empty($already_registered)) {
							
						//Register User	
						
						
						$create_user = Registration::create($array_client);	
						//$create_registration = $this->step1($array_registration);	
						echo "no existe";
					} 
					else 
					{
								
								
							//$create_registration = $this->step1($array_registration);	
							$arreglo=array('username'=>$array_data['email'], 'data' =>  $array_data['data']);
							/*importante que el arreglo se haga fuera del insert*/
							//$this->helper->insert('ltp_user_log_search', $arreglo);	
							Helper::insert('ltp_user_log_search', $arreglo);	
							echo "ya existe";
						
					}

					
					break;
				
				case 'fullregistration':
						
					break;
				
				case 'payment' :
					
					
					break;
			}
			
			
	}

	public function create($data){
				
			//User
			$array_user['username'] = $data['username'];
			$array_user['role'] = $data['role'];			
			//$array_user['pass_hash'] = $data['pass_hash'];			
			//Add User
			$insert = Helper::insert('ltp_users', $array_user);
			if ($insert > 0) {
				
				$id =  DB::insertId();
				//Insert in profile table based on Role
				Registration::create_profile($id, 'ltp_user_profile' , $data);
				$arreglo=array('username'=>$data['username'], 'data' =>  $data['data']);
				/*importante que el arreglo se haga fuera del insert*/
				Helper::insert('ltp_user_log_search', $arreglo);
		
			}
		
			return DB::affectedRows();
					
	}
		
	public function create_profile($id, $tablename, $data) {
			
			$array_profile['id'] = $id;
			//User Profile
			$array_profile['username'] = escape_value($data['username']);
			$array_profile['name'] = escape_value($data['name']);
			$array_profile['lastname'] = "";
			$array_profile['email'] = escape_value($data['email']);
			$array_profile['data'] = json_encode($data);			
			$insert_profile = Helper::insert($tablename, $array_profile);
    }

}
?>