<?php 
	
	class apiController extends Controller {
		
		public function __construct() {
			
			parent::__construct();	
		}	

		public function search($type, $terms) {
			header('Access-Control-Allow-Origin: http://localhost:3000');
			$this->api->search($type, $terms);
		}
		
		/*public function search($type,$terms,$ubicacion,$linea) {
			header('Access-Control-Allow-Origin: http://localhost:3000');
			$this->api->search($type,$terms,$ubicacion,$linea);

        }*/
        
        public function getEmployees($action = 'all') {
            header('Access-Control-Allow-Origin: http://localhost:3000');
            $this->api->employee($action);
        }

        public function employee($action) {
            header('Access-Control-Allow-Origin: http://localhost:3000');
            header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

            $data = json_decode(file_get_contents('php://input'), true);
            $empleado = $data['row'];

            //esto es temporal hasta que se agregue todos los campos
            //luego funcionara con la variable empleados decodificada y ya
            if ($action === 'insert') {
                $emp['cedula'] = $empleado['cedula'];
                $emp['nombre'] = $empleado['nombre'];
                $emp['apellido'] = $empleado['apellido'];
                $emp['fecha_nacimiento'] = "1999-01-01";
                $emp['telefono'] = "041-000-5564";
                $emp['movil'] = "6554-998252-52";
                $emp['email'] = $empleado['email'];
                $emp['email_personal'] = "juanito@juanito.com";
                $emp['dirección'] = "calle c, avenidada av, estado";
                $emp['fecha_ingreso'] = $empleado['fecha_ingreso'];
                $emp['tipo'] = "contratado";
                $emp['status'] = "activo";
            } else {
                $emp = $empleado;
                $id = $empleado['id'];
            }

            $this->api->employee($action, $emp, $emp['id']);
        }
        


		public function insertClientByCookie($terms) {
			header('Access-Control-Allow-Origin: http://localhost:3000');
			$this->api->insertClientByCookie($terms);
		}

		public function show($what) {
			// REFACTOR -- Add api key to access this method
			header('Access-Control-Allow-Origin: http://localhost:3000');
			//Only allowed consults.
			$this->api->show($what);			
		}

		public function detail($id) {
			// REFACTOR -- Add api key to access this method
			header('Access-Control-Allow-Origin: http://localhost:3000');
			//Only allowed consults.
			$this->view->product	= $this->api->detail($id);		
		}

		
	}

?>