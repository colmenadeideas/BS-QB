<?php
	class ApiQuery {
		//Modelo
		
		public function __construct() {		
	
		}

		public function getEmpleado($id, $by = 'id') {	
			return DB::query("SELECT * FROM empleados WHERE ". $by ."=%i LIMIT 1", $id);		
		}

		public function getEmpleados() {	
			return DB::query("SELECT * FROM empleados WHERE status='activo'");
        }

        public function getAll($table) {	
			return DB::query("SELECT * FROM ". $table);
		}

		public function search($type = "all",$string){
			
			return DB::query("SELECT * FROM  (
							  SELECT id, ltp_api_producto.nombre AS term, 'producto' AS in_table FROM ltp_api_producto UNION 
							  SELECT id, ltp_api_producto.cod AS term, 'producto' AS in_table FROM ltp_api_producto UNION 
				 			 
				 			  SELECT id, ltp_api_tienda.nombre AS term, 'tienda' FROM ltp_api_tienda UNION
				 			  SELECT id, ltp_api_zona.nombre AS term, 'zona' FROM ltp_api_zona UNION
				 			  SELECT id, ltp_api_zona_estados.nombre AS term, 'zona' FROM ltp_api_zona_estados
				 			) AS autocomplete_table " . $string . " ORDER BY in_table;
				 			");
			/*
				return DB::query("SELECT * FROM  (
							  SELECT id, doctor.name AS term, 'doctor' AS in_table FROM doctor UNION 
							  SELECT id, doctor.lastname AS term, 'doctor' AS in_table FROM doctor UNION 
				 			  SELECT id, clinic.name AS term, 'clinic' FROM clinic UNION 
				 			  SELECT id, clinic.address AS term, 'clinic' FROM clinic UNION
				 			  SELECT id, specialty.name AS term, 'specialty' FROM specialty
				 			) AS autocomplete_table " . $string . " ORDER BY in_table;
				 			");
			*/
		}

		public function getProductosByCOD($id) {
			//$id = escape_value($id);
			return DB::query("SELECT * FROM " . DB_PREFIX . "ltp_api_producto WHERE 'cod' LIKE $id");
		
		}
		public function getProductosBy($param, $id) {
			$param = escape_value($param);
			$id = escape_value($id);
			return DB::query("SELECT * FROM " . DB_PREFIX . "ltp_api_producto WHERE $param=$id");
		
		}
		
		/*public function getProductosByTienda($id) {
			return DB::query("SELECT id_tienda, id_producto FROM " . DB_PREFIX . "ltp_api_producto WHERE id_tienda=%i", $id);
		
		}*/
		
		public function getProductosByExistencia($id) {
			$id = escape_value($id);
			return DB::query("SELECT * FROM " . DB_PREFIX . "ltp_api_existencia WHERE id_tienda=".$id);		
		}
		public function getProductosByZona($id) {
			//DB::debugMode(TRUE);
			$id = escape_value($id);
			return DB::query("SELECT * FROM " . DB_PREFIX . "ltp_api_tienda WHERE zona=".$id);		
		}
				
		/* RESERVED METHODS, ONLY WITH API KEY FOR APP */
		public function getEstados() {	
			return DB::query("SELECT * FROM ltp_api_zona_estados");			
		}

		public function getZonas() {
			return DB::query("SELECT * FROM ltp_api_zona");			
		}

		public function getLineas() {
			return DB::query("SELECT * FROM ltp_api_lineas WHERE status = 'active'");			
		}

		public function getProducto($id, $by = 'id') {	
			return DB::query("SELECT * FROM ltp_api_producto WHERE ". $by ."=%i LIMIT 1", $id);	
		}
		public function getElement($element, $id, $by = 'id') {	

			$element = escape_value($element);

			return DB::query("SELECT * FROM ltp_api_".$element." WHERE ". $by ."=%s LIMIT 1", $id);			
		}
		public function getExistencia($cod_producto) {
			return DB::query("SELECT * FROM ltp_api_existencia WHERE id_producto=%s", $cod_producto);	
		}
		public function getUserByEmail($email) {
			return DB::query("SELECT * FROM ltp_users WHERE `username`=%s", $email);	
		}
		public function getProductoByFiltros($color, $filtros)
		{
			return DB::query("SELECT DISTINCT p.`id` as id, p.`cod` as codigo, p.`nombre` as nombre,p.`linea` as linea,t.`estado` as estado, p.`presentacion` as presentacion  FROM  
										`ltp_api_existencia`  as e, 
										`ltp_api_producto`  as p, 
										`ltp_api_zona_estados`  as ze,
										`ltp_api_tienda`  as t
													WHERE
												 		p.`nombre` LIKE '%".$color."%' AND 
												 		".$filtros."
												 		p.`cod` = e.`id_producto` AND 
												 		t.`id` = e.`id_tienda` "."ORDER BY codigo");
		}


	}
?>