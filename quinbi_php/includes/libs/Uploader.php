<?php
	
	class Uploader {
	
		function __construct() {			
		
		}

		//Reorgarnize content into arrays for proper database insertion
		static function arrayBuilder($filename="") {

			$path  = CSV;
			$files = scandir($path);
			$files = array_diff(scandir($path), array('.', '..'));


			$array_temp_cod = array();
			$i = 0;
			$array_build =  array();

			$fp = fopen(CSV . $filename, 'rb');

			while ($line = fgetcsv($fp)) {

				switch ($filename) {
					case 'empresas.txt':

						$array_tienda['cod']					=	$line[0];
						$array_tienda['rif']					=	$line[1];
						$array_tienda['nombre']					=	$line[2];
						$array_tienda['direccion']				=	$line[3];
						$array_tienda['estado']					=	$line[4];
						$array_tienda['telefono']				=	$line[5];
						$array_tienda['telefono1']				=	$line[6];
						$array_tienda['email']					=	$line[7];


						$array_build['data']['array_tienda'][$i] 		= 	$array_tienda;

						break;
					
					default: //Products and Everything else

						$array_tienda['cod']					=	$line[0];
						$array_tienda['nombre']					=	$line[1];
						$array_tienda['zona']					=	$line[2];

						$array_producto['cod']					=	$line[3];
						
						if (!empty($array_producto['cod'])) {
							//PRESENTACION
							$presentacion = explode("-", $array_producto['cod']);	
							end($presentacion);         // move the internal pointer to the end of the array
							$key = key($presentacion);
							$array_producto['presentacion']		=	$presentacion[$key];

							//LINEA
							$array_producto['linea']	 		= 	strtoupper($presentacion[0]);
						}

						$array_producto['nombre']				=	$line[4];

						$array_existencia['id_producto']		=	$line[3]; //cod producto
						$array_existencia['id_tienda']			=	$line[0];
						$array_existencia['valor']				=	$line[5];

						if (in_array($array_producto['cod'], $array_temp_cod)) {
							//SKIP Product				
						}  else {
							$array_build['data']['array_producto'][$i]		=	$array_producto;
							$array_temp_cod[] = $line[3]; 						
						}
						
						$array_build['data']['array_tienda'][$i] 		= 	$array_tienda;
						$array_build['data']['array_existencia'][$i]	=	$array_existencia; 
						break;
				}
				$i++;
			}

			/*
			while ( !feof($fp) )
			{
			    $line = fgets($fp, 2048);

			    $data = str_getcsv($line, "           ");

			   print_r($data);// doSomethingWithData($data);
			}  
			*/	
			

			return $array_build;
		}
					
	}
	
?>