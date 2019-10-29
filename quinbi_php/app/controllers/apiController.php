<?php 
	
	class apiController extends Controller {
		
		public function __construct() {
			
			parent::__construct();	
		}	

        //RECUERDA UNIFICAR ESTOS METODOS BAJO UN MISMO PRINCIPIO Y TAMBIEN EN EL MODELO
        public function getEmployees($action = 'all') {
            header('Access-Control-Allow-Origin: http://localhost:3000');
            $this->api->employee($action);
        }

        public function getAll($action = 'all', $table) {
            header('Access-Control-Allow-Origin: http://localhost:3000');
            $this->api->queries($action, $table);
        }

        public function insert($table) {
            header('Access-Control-Allow-Origin: http://localhost:3000');
            header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

            $data = json_decode(file_get_contents('php://input'), true); //asi es como se extraen los datos que vienen por post
            $data = $data['row']; //este es el nombre del array donde esta todon los datos de egresos_nomina

            if ($table == "egresos_nomina") {
                $datos['numero'] = $data['numero'];
                $datos['fecha_desde'] = $data['fecha_desde'];
                $datos['fecha_hasta'] = $data['fecha_hasta'];
                $datos['elaborador'] = "20356841";
                //$data = $datos;
            }
            
            print_r($data);
            //$this->api->queries($action = 'insert', $table, $data);
        }


		
	}

?>