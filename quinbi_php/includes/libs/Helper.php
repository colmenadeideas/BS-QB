<?php
	
	require_once ( LIBS . 'upload/class.upload.php');
	require_once ( LIBS . 'Twitter.php');
	require_once ( LIBS . 'Instagram.php');
	
	class Helper {
	
		function __construct() {
			
		
		}
				 		 
		static function loadJS($filename, $isprivate = 0) {
			if($isprivate === 1) {
				
				return '<script type="text/javascript" src="' . ADMINJS . $filename . '.js"></script>
';			
			} else {
			
				return '<script type="text/javascript" src="' . JS . $filename . '.js"></script>
';
			}
			
	    }
		
		static function loadCSS($filename, $isprivate = 0) {

			if($isprivate === 1) {
				
				return '<link rel="stylesheet" href="' . ADMINCSS . $filename . '.css" />';				

			} else {
				
				return '<link rel="stylesheet" href="' . CSS . $filename . '.css" />';
			}
			
		}
		
		static function getIpAddress($ip = USER_IP) {
			
			if ($ip === '') {
				
				if(!empty($_SERVER['HTTP_CLIENT_IP'])) {
					$ip = $_SERVER['HTTP_CLIENT_IP'];
				} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
					$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
				} else {
					$ip = $_SERVER['REMOTE_ADDR'];
				}
				
			}
			return $ip;
		}
		


		//Database	
		static function insert($tablename, $vars){
			
			$tablename = escape_value($tablename);
			
			$query = DB::insert( DB_PREFIX . $tablename, $vars);
			print_r($query);
			return DB::affectedRows();
		}
		
		static function update($tablename, $id, $vars, $by ='id'){
				
			$tablename = escape_value($tablename);
			$id = escape_value($id);
			$by = escape_value($by);
			
			$query = DB::update( DB_PREFIX . $tablename, $vars, $by."=%s", $id);		
			return DB::affectedRows();
			
				//return DB::update(DB_PREFIX . $tablename, $vars, "id=%s", $id);
	  			
		}
		static function delete($tablename, $id, $by ='id'){
				
			$tablename = escape_value($tablename);
			$id = escape_value($id);
			$by = escape_value($by);			
							
			$query =  DB::delete( DB_PREFIX . $tablename, $by."=%s", $id);	
			return DB::affectedRows();
		}
		


		static function openPDF($fileurl) {
			
			//header('Content-Type: application/force-download'); 
			//header('Content-Description: File Transfer'); 
			
			header('Content-type: application/pdf');
			header('Content-Disposition: inline; filename="' . $fileurl . '"');
			header('Content-Transfer-Encoding: binary');
			header('Content-Length: ' . filesize($fileurl));
			header('Accept-Ranges: bytes');
			
			readfile($fileurl);
		}
		
		 
		 
		static function uploadFile($file,$email) {
			
			$folder = CLIENTS_FOLDER;
			$handle = new Upload($_FILES['files']);
			//echo 
			$username = $email; //User::get('username');
			//$username = create_slug($username); //sanitizar nombre de caracteres, acentos
			 
			
			if ($handle->uploaded) {
				//upload original file no changes
				$file_new_name = "OLB-".date("Ymd")."-".$username;
				$handle->file_new_name_body = $file_new_name;
				$handle->Process($folder);
				
				//check if went ok
				//print_r($handle);
				if($handle->processed){
					/* 
					 * Ejecutar el exec a partir del archivo en el servidor para ¿dulpicar? y cambiar el colorspace IF 'CMYK'
					 * luego escalar y generar thumb
					 * 	
					//	exec("/usr/bin/convert ".$file_new_name."  files/preview/".$file_new_name."");
					 * 
					//	Helper::thumbnailPreview($handle, CLIENTS_FOLDER .'/preview/');
					 * */
						$array_response['status'] = "success";
						$array_response['name'] = $handle->file_dst_name;
						return $array_response;
						//echo '{"status":"success", "name": "'.$handle->file_dst_name.'"}'; //file_new_name_body
											
					} else {
						echo '{"status":"error"}';
						//echo '  Error: ' . $handle->error . '';
					}
				
				$handle->Clean();
				
			} else {
				echo '{"statuss":"error"}'; //echo '  Error: ' . $handle->error . '';
			}
						
		}
		
		
		static function thumbnailPreview($file, $ruta = 'public/images/temp') {
			
				
			$handle2 = $file;
				
			//resizing
			$handle2->image_convert         = 'jpg';
			//$handle2->file_name_body_add   = '_thumb';
			$handle2->image_resize         = true;
			$handle2->image_x              = 400;
			$handle2->image_ratio_y        = true;
			
			$handle2->Process($ruta);		
			/*
			if ($handle->processed) {
										
			} else {
				
				echo '  Error: ' . $handle->error . '';
			}*/		
			
			$handle2->Clean();
			
		
		}
		
		
		static function uploadFileCSV($file) {
			
			//print_r($file);
			$folder = ADMIN_FOLDER;
			$handle = new Upload($_FILES['files']);
			
			$handle->file_new_name_body   = 'datas';
			$handle->file_overwrite = true;
			$handle->allowed = array('csv','application/vnd.ms-excel');
			 
			if ($handle->uploaded) {
				$handle->Process($folder);
				//check if went ok
				if($handle->processed){
					
					echo '{"status":"success"}';
					// 
				} else {
					//echo '{"status":"error"}';
					echo '  Error: ' . $handle->error . '';
				}
				
				$handle->Clean();
				
			} else {
				echo '{"statuss":"error"}'; //echo '  Error: ' . $handle->error . '';
			}
						
		}
		
		
		
 		/* Twitter */
		/*static function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
 		 		
 		 	$connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  			return $connection;
		
		}
		
		static function loadTweets() {
				
			//Variables
			$twitteruser = "sgmusic_usa";
			$notweets = 30;
			$consumerkey = "eBa3pwc27Ga1cMAKulNg";
			$consumersecret = "miIAq1UygMGINHo3ZRWkAXIHcbfrOcFcEcYHPZqZ7EI";
			$accesstoken = "136305776-gFtXbayO8AiZC9LEoRwd5PiQMI1LVHBZmzYNCQpm";
			$accesstokensecret = "pzX0zfsS7tCS5g3wc25EfHciE7HW2Nj3Y10gi58Cz0rAO";
			
			$connection = Helper::getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
			$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
			echo json_encode($tweets);
				
		}*/
		
		
		
 		
		
					
	}
	
?>