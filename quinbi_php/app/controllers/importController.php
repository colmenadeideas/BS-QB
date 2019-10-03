<?php 
	
	class importController extends Controller {
		
		public function __construct() {
			
			parent::__construct();	
		}
		
		function remote($token){

			$validPass = $this->user->validatePassword('edilremoteaccess', $token);
			
			if(!empty($validPass)){

				$path  = CSV;
				$files = scandir($path);
				$files = array_diff(scandir($path), array('.', '..'));
				
				//$insert = $this->insertapproved('/Edil/'.$value, 'iva', TRUE);				
			}				
		}

		function checkError ($array, $name_of_process) {
			$detalles[$name_of_process] = $array;
			return $detalles;
		}

		function file($filename, $report = TRUE){ 
			if ($report == TRUE) {
				echo "ARCHIVO: ".$filename. "<br>";
			}

			$fileArray = Uploader::arrayBuilder($filename);

			$extra_info		= "";
			$success_insert	= "";
			$message_action	= "";
			$e = 0;

			$file_lenght 	= count($fileArray['data']);

			$this->loadModel('data');

			//Process TIENDA
			$array_tienda 		= 	$fileArray['data']['array_tienda'];
			$array_producto		= 	$fileArray['data']['array_producto'];
			$array_existencia	= 	$fileArray['data']['array_existencia'];


			//Consultar si existe TIENDA, si no, crearlo en la BD
			if(!empty($array_tienda)){
				foreach ($array_tienda as $tienda) {
					$consulta 	= $this->model->getElement('tienda', $tienda['cod'], 'cod');
					//Insert
					if (empty($consulta)) {

						if($tienda['estado'] != '' || !empty($tienda['zona'])) { 
							$estado = $this->model->getElement('zona_estados', strtolower($tienda['estado']), 'nombre');
							if (!empty($estado)) {
								$tienda['estado'] 	= $estado[0]['id'];
								$zona_temp 			= $estado[0]['id_zona'];
							}
						}
						if($tienda['zona'] == ' ' || empty($tienda['zona'])) { 
							if(!empty($zona_temp)) { 
								$tienda['zona'] 	= $zona_temp;
							} else {
								$tienda['zona'] = '10'; //zona no existente
							}
						}
						$insert = $this->helper->insert('ltp_api_tienda', $tienda, 1);										
					}
				}
				
			}
			//Consultar si existe PRODUCTO, si no, crearlo en la BD
			if(!empty($array_producto)){
				
				DB::debugMode(TRUE);
				
				foreach ($array_producto as $producto) {
					$consulta 	= $this->model->getElement('producto', $producto['cod'], 'cod');
					$presentacion = $this->model->getElement('presentacion', $producto['presentacion'], 'cod');
					$linea = $this->model->getElement('lineas', $producto['linea'], 'cod');
					if (empty($linea)) {
						//create LINEA
						$linea['cod'] = $producto['linea'];
						$insert = $this->helper->insert('ltp_api_lineas', $linea, 1);
						$producto['linea'] 	=	DB::insertId();
					} else {
						//get ID
						$producto['linea'] 	=	$linea[0]['id'];
					}
					//Insert
					if (!empty($presentacion)) {					
						if (empty($consulta)) {
							$insert = $this->helper->insert('ltp_api_producto', $producto, 1);
						} else {
							//update
							$insert = $this->helper->update('ltp_api_producto', $consulta[0]['id'], $producto);	
						}
					}
				}
			}

			//Update INVENTARIO
			$e = 0;
			if(!empty($array_existencia)){
				foreach ($array_existencia as $existencia) {

					$consulta_producto 	= $this->model->getElement('producto', $existencia['id_producto'], 'cod');
					$consulta 	= $this->model->getInventario($existencia['id_producto'], $existencia['id_tienda']);
					//Insert
					if (!empty($consulta_producto)) {
						if (empty($consulta)) {
							$insert = $this->helper->insert('ltp_api_existencia', $existencia, 1);
						} else {
							$insert = $this->helper->update('ltp_api_existencia', $consulta[0]['id'], $existencia);
						}
					}

					$e++;
					if ($file_lenght == $e) {
						$file_complete = TRUE;
					}
				}
			}

			//WHAT IS SHOWN AFTER PROCESS
			if ($report == TRUE) {
				//http://ah000384.ferozo.com/account/authenticate/15754602695aa152001569e2.18547834/edilremoteaccess
				if ($file_complete == TRUE ) {
					
					$report_message = 	"La carga de archivos fue realizada con éxito:<br>".
										"FILE: ".$filename."<br>".
										$message_action."<br>";
					echo $report_message;

				} else {
					$report_message = 	"Pudo haber errores en la inserción:<br>".
										"FILE: ".$filename."<br>".
										$message_action."<br>".
										$detalles;
					echo $report_message;
				}

				//Move procesed file to LOG
				/*
				$file_to_move = str_replace('/Edil/', '', $filename);	
				$dir_for_file = dirname(realpath(__DIR__ . '/..'));

				$file_current_location 	= $dir_for_file.'/html/private/temp-upload'.$filename;
				$file_new_location 		= $dir_for_file.'/html/private/temp-upload/Edil/log/'.$file_to_move;
				 
				rename($file_current_location, $file_new_location); 
				*/
				//Send email REPORT
				//$this->mailReport($report_message);				
				

			} else { 
				echo $message_action;
			}		
		}

		function mailReport($message) {
			//Report Email
			$mail = new PHPMailer(); 
			$mail->IsSMTP(); 
			$mail->SMTPDebug  = '2';         
			$mail->SMTPAuth   = TRUE; 
		    $mail->SMTPSecure = MAIL_SECURE; 
		    $mail->Host       = MAIL_HOST;
		    $mail->Port       = MAIL_PORT; 
		    $mail->Username   = SYSTEM_EMAIL;
		    $mail->Password   = MAIL_PASSWORD;   

			$mail->Subject 	  = "Reporte de carga automatica ".date("dmY");
			
			$mail->SetFrom(SYSTEM_EMAIL);
			$mail->AddAddress("hola@besign.com.ve");
			$mail->MsgHTML($message);
			$mail->Send();
		}
	}

?>