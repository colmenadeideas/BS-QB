<?
	class dataModel extends Model {
	
		public function __construct() {
	
			parent::__construct();
		}
		
	
		public function getEmpleado($id, $by = 'id') {	
			return DB::query("SELECT * FROM empleado WHERE ". $by ."=%i LIMIT 1", $id);		
		}

		public function getEmpleados() {	
			return DB::query("SELECT * FROM empleado WHERE status='activo'");
        }

		/* public function getElement($element, $id, $by = 'id') {	

			$element = escape_value($element);

			return DB::query("SELECT * FROM ltp_api_".$element." WHERE ". $by ."=%s LIMIT 1", $id);			
		}
		public function getExistencia($cod_producto) {
			return DB::query("SELECT * FROM ltp_api_existencia WHERE id_producto=%s", $cod_producto);	
		}

		public function getInventario($cod_producto, $cod_tienda) {	

			return DB::query("SELECT * FROM ltp_api_existencia WHERE id_producto=%s AND id_tienda =%s LIMIT 1", $cod_producto, $cod_tienda);			
		}

		public function getEstados() {	
			return DB::query("SELECT * FROM ltp_api_zona_estados");			
		}

		public function getZonas() {
			return DB::query("SELECT * FROM ltp_api_zona");			
		}

		public function getLineas() {
			return DB::query("SELECT * FROM ltp_api_lineas WHERE status = 'active'");			
		} */
			
	}
	
?>