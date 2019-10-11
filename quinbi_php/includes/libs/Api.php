<?php
class Api extends ApiQuery {

	public function __construct() {
        parent::__construct();
	}


	public function insertClientByCookie($terms)
	{
			$terms = "email:carlos@besign.com.ve&id_producto:15,7,8,9&name:Alejandra Ortega&phone:0416-1417981&ubicacion:2";
			$searchTerms = explode("&",$terms);
			
			
			foreach ($searchTerms as $key => $value) 
			{
				$terminos = explode(':', $value);
				
				if (!empty($value)) {
					$array_data[$terminos[0]] = $terminos[1];
				}
			}
			
		 
			$array_data['username'] = strtolower($arraydata['email']);
			$array_data['role'] = 'cliente';
			$array_data['pass_hash'] ='sha256: '.hash('sha256', $arraydata['email']);
			$array_data['data'] = json_encode($array_data);
			unset($array_data['id_producto'] );
			
			Registration::process('register',$array_data) ;
			
    }
    
    public function employee($action, $data='', $id='') {
        $table = "empleados";
        switch ($action) {
            case 'insert':
                $response = Helper::insert($table, $data);
                echo $response;
                break;

            case 'update':
                $response = Helper::update($table, $id, $data);
                echo $response;
                break;
            
            default:
                $response = ApiQuery::getEmpleados();
                echo json_encode($response);
                break;
        }
    }

    public function editinline () {
			
        $pk = escape_value($_POST['pk']);
        $value = escape_value($_POST['value']);
        
        $parts = explode( '-', $pk );
        $tablename = $parts[0];
        $fieldname = $parts[1];
        $id = $parts[2];
        
        $arrayModificacion = array();
                                
        $arrayModificacion[$fieldname] = $value;
        
        $insert = $this->helper->update($tablename, $id, $arrayModificacion);
        print_r($insert);	
    }
	
	
	public function search($type = "all", $terms,$filtros="") {
		

		switch ($type) {
			case 'filtros':
				
				//$searchFiltros = str_replace("&"," ", $filtros);
				$searchFiltros = explode("&",$filtros);
				$lineas =  explode(':', $searchFiltros[0]);
				$lineas = explode(',', $lineas[1]);
				$ubicacion =explode(':', $searchFiltros[1]);

				$presentacion =explode(':', $searchFiltros[2]);
				
				//Lineas de producto
				$i = 1;
				$sizeofLineas = sizeof($lineas);
				//verificar si hay lineas
				
				
				if(!empty($lineas[0]))
				{	

					$lineaQuery = ' ( ';
					foreach ($lineas as $linea) 
					{
						$lineaQuery = $lineaQuery.	" p.`linea` = ".$linea;
						if ($i != $sizeofLineas) 
						{
							$lineaQuery = $lineaQuery." OR ";
						}
						$i++;
					}
					$lineaQuery = $lineaQuery.' ) ';
				}
				else //no hay lineas
				{
					unset($lineaQuery);
				}
				
				
				if (!empty($ubicacion[1])) 
				{
					$ubicacionQuery = "t.`estado` = ".$ubicacion[1]." AND";
				}
				else
				{
					unset($ubicacionQuery);
				}
				
				if (!empty($presentacion[1])) 
				{
					$presentacionQuery = "p.`presentacion` = ".$presentacion[1]." AND";
				}
				else
				{
					unset($presentacionQuery);
				}
				unset($allQuery);
				if (!empty($presentacion[1]) OR !empty($ubicacion[1]) OR !empty($lineas[0])) {
					$allQuery = $ubicacionQuery." ".$presentacionQuery." ".$lineaQuery." AND ";
				}
				
				//$array_final['productos'] = ApiQuery::getProductoByFiltros($terms,$allQuery);
				$data['productos'] = ApiQuery::getProductoByFiltros($terms,$allQuery);
				$pre = $data[0]['id'];
				$i = 0;
				
				foreach ($data as $elem) {
						if ($pre == $elem['id']) {
							$array_finals[$pre][$i] = $elem;
							$i ++;
						}
						else
						{
							$pre = $elem['id'];
							$i = 0;
						}
				}
				

				
				break;
			default :
				// No Type is sent, no autocomplete match found

				//This is "TYPE NOT DEFINED" search
				
				/*
				//IF TERMS searches for EVERY WORD

				$searchTerms = explode(',', $terms);
				$t = 0;
				foreach ($searchTerms as $term) {
					$term = trim($term);
					$array_final['filters'][$t]['term'] = $term;
					if ($t == 0) {
						$termsQuery = "WHERE term LIKE '%$term%'";
					} else if (!empty($term)) {
						$termsQuery .= " OR term LIKE '%$term%'";
						//$termsQuery[] = "OR term LIKE '%$term%'";
						//$string = "LIKE '%$string%'"
					}
					$t++;

				}*/

				$searchTerms = str_replace(","," ", $terms);
				$termsQuery = "WHERE term LIKE '%$searchTerms%'";
				
				

				if (isset($_GET['ubicacion'])) {

				}				

				$found_matches = $found_matches = ApiQuery::search("",$termsQuery);

				$queryString_Producto = array();
				$queryStringProducto = "";
				//Build Results json gatherin from all tables
				foreach ($found_matches as $match) {

					switch ($match['in_table']) {
						case 'producto' :
							$queryString_Producto[] .= $match['id'];
							break;
						case 'zona' :
							//search PRODUCTOS with Zona ID (in doctor)
							$queryString_Zona[] .= $match['id'];
							break;
						case 'tienda' :
							//search PRODUCTOS with Tienda ID (in api_existencia)
							$queryString_Tienda[] .= $match['id'];
							break;
					}

				}

				// 1- PRODUCTO matches
				if (!empty($queryString_Producto)) {
					$i = 0;
					$param = "id";
					foreach ($queryString_Producto as $byProducto) {
						if ($i != 0) { $queryStringProducto .= " OR " . $param . " = ";
						} $queryStringProducto .= $byProducto;
						$i++;
					}
					$array_productos_byProducto = ApiQuery::getProductosBy($param, $queryStringProducto);
				} else if (empty($queryString_Producto)) {
					$array_productos_byProducto = array();
				}


				// 2- TIENDA matches
				if (!empty($queryString_Tienda)) {
					$i = 0;
					foreach ($queryString_Tienda as $byTienda) {
						if ($i != 0) { 
							$queryStringTienda .= " OR id_tienda = ";
						} 
						$queryStringTienda .= $byTienda;
						$i++;
					}
					//Get Productos ID by existencia in TIENDA
					$array_productos_byTienda = ApiQuery::getProductosByExistencia($queryStringTienda);

					if (!empty($array_productos_byTienda)) {
						$d = 0;
					
						$param = "id_producto";
						foreach ($array_productos_byTienda as $producto) {
							if ($d != 0) { $queryStringProducto2 .= " OR " . $param . " = ";
							} $queryStringProducto2 .= $producto['id_producto'];
							$d++;
						}				
					
						$array_productos_byTienda = ApiQuery::getProductosBy($param, $queryStringProducto2);
					} else {
						$array_productos_byTienda = array();
					}

				} else if (empty($queryString_Tienda)) {
					$array_productos_byTienda = array();
				}

				// 3- Tienda ZONA matches
				if (!empty($queryString_Zona)) {					
					$z = 0;
					foreach ($queryString_Zona as $byZona) {
						if ($z != 0) { 
							$queryStringZZona .= " OR zona = ";
						} 
						$queryStringZZona .= $byZona;
						$z++;
					}
					$queryString_ZZona = ApiQuery::getProductosByZona($queryStringZZona);

					
					$i = 0;
					foreach ($queryString_ZZona as $byTienda) {
						if ($i != 0) { 
							$queryStringZona .= " OR id_tienda = ";
						} 
						$queryStringZona .= $byTienda['id'];
						$i++;
					}
					
					//Get Productos ID by existencia in TIENDA
					$array_productos_byZona = ApiQuery::getProductosByExistencia($queryStringZona);
					
					$d = 0;
					$param = "cod";
					foreach ($array_productos_byZona as $producto) {
						if ($d != 0) { $queryStringProducto3 .= " OR 'cod' LIKE ";
						} $queryStringProducto3 .= "'%".$producto['id_producto']."%'";						
						$d++;
					}
					
					//REVISAR, no estoy convencida de si esta logica está funcionando
					$array_productos_byZona = ApiQuery::getProductosByCOD($queryStringProducto3);

				} else if (empty($queryString_Tienda)) {
					$array_productos_byZona = array();
				}

				//Merge all Productos
				/*print_r($array_productos_byProducto);
				echo "<br><br>";  
				print_r($array_productos_byTienda); 
				echo "<br><br>"; 
				print_r($array_productos_byZona);  */
				$array_productos = array_unique(array_merge((array)$array_productos_byProducto, (array)$array_productos_byTienda, (array)$array_productos_byZona), SORT_REGULAR);

				break;
		}

		//Explode Search terms and add Query for every word
		//TODO  exclude words like the, de, and, y, con etc, and evaluate complete term

		//get all columns from Table
		$productoFields 	= DB::columnList('ltp_api_producto');
		$practiceFields 	= DB::columnList('ltp_api_tienda');


		$i = 0;
		foreach ($array_productos as $producto) {

			foreach ($productoFields as $field) {
				$array_final['productos'][$i][$field] = $producto[$field];
			}

			/*$array_practices = ApiQuery::getProductoPractices($producto["id"]);

			$p = 0;
			foreach ($array_practices as $practice) {

				foreach ($practiceFields as $practicefield) {
					$array_final['productos'][$i]['practice'][$p][$practicefield] = $practice[$practicefield];
				}
				$array_schedules = ApiQuery::getProductoPracticesSchedule($practice["id"]);
				//$array_final['productos'][$i]['practice'][$p]	= $practice;
				$s = 0;
				foreach ($array_schedules as $schedule) {

					$array_final['productos'][$i]['practice'][$p]['schedule'][$s] = $schedule;
					$schedule['day'] = substr($schedule['day'], 0, -2);
					$array_final['productos'][$i]['practice'][$p]['schedule'][$s]['day'] = $schedule['day'];
					$ini_schedule = substr($schedule['ini_schedule'], 0, 2);

					if ($ini_schedule > 01 && $ini_schedule < 13) {
						$icon = " AM";//'<i class="fa fa-sun-o"></i> ';
					} else {
						$icon = " PM";//'<i class="fa fa-moon-o"></i> ';
					}

					//delete this if change to ICON
						$end_schedule = substr($schedule['end_schedule'], 0, 2);
						if ($end_schedule > 01 && $end_schedule < 13) { $icon = " AM";	} else { $icon = " PM";	}

						$schedule['ini_schedule'] = substr($schedule['ini_schedule'], 0, -3).$icon;//$icon . $schedule['ini_schedule'];
						$schedule['end_schedule'] = substr($schedule['end_schedule'], 0, -3).$icon;

					$array_final['productos'][$i]['practice'][$p]['schedule'][$s]['ini_schedule'] = $schedule['ini_schedule'];
					$array_final['productos'][$i]['practice'][$p]['schedule'][$s]['end_schedule'] = $schedule['end_schedule'];

					$s++;
				}
				$p++;
			}*/
			$i++;
		}
		
		
				

				

		echo json_encode($array_final);

	}

	/* ONLY ALLOWED APP */
	public function show($what) {
		switch ($what) {
			case 'lineas':
				$array_final = ApiQuery::getLineas();
				echo json_encode($array_final);
				break;
			case 'zonas':
				$array_final = ApiQuery::getZonas();
				echo json_encode($array_final);
				break;				
			case 'estados':
				$array_final = ApiQuery::getEstados();
				echo json_encode($array_final);
				break;
			default:
				echo "No puede consultar esta informacion";
				break;
		}
	}

	public function detail($id) {
		$product	= ApiQuery::getProducto($id);
		$array_final['producto'] = $product;

		if (!empty ($product)){
			$existencia = ApiQuery::getExistencia($product[0]['cod']);
			$i = 0;
			foreach ($existencia as $existencia) {
				$view_existencia[$i] = $existencia;
				$view_existencia[$i]['tienda'] = ApiQuery::getElement('tienda', $existencia['id_tienda'], 'cod');
				$view_existencia[$i]['zona'] = $view_existencia[$i]['tienda'][0]['zona'];
				$i++;
			}
			
			$array_final['existencia'] = $view_existencia;
			echo json_encode($array_final);

		} else {
			echo "Producto no disponible";
		}

		

	}
}
?>