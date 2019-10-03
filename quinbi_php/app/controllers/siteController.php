<?php 
	
	class siteController extends Controller {
		
		public function __construct() {
			
			parent::__construct();	
		}
	
		public function index() {
			
			$this->loadModel('data');

			$this->view->title 		= SITE_NAME;
			$this->view->results 	= $this->model->getProductos('all');

			$this->view->content_view = 'search';
			$this->view->buildpage('index');						 
		}


		public function detail($id) {
			
			$this->loadModel('data');

			$this->view->title 		= SITE_NAME;
			$this->view->product	= $this->model->getProducto($id);

			if (!empty ($this->view->product)){
				$existencia = $this->model->getExistencia($this->view->product[0]['cod']);
				$i = 0;
				foreach ($existencia as $existencia) {
					$this->view->existencia[$i] = $existencia;
					$this->view->existencia[$i]['tienda'] = $this->model->getElement('tienda', $existencia['id_tienda'], 'cod');
					$this->view->existencia[$i]['zona'] = $this->view->existencia[$i]['tienda'][0]['zona'];
					$i++;
				}
								
			} else {
				echo "Producto no disponible";
			}

			$this->view->estados	= $this->model->getEstados();
			$this->view->zoans		= $this->model->getZonas();
			$this->view->content_view = 'detail';
			$this->view->buildpage('index');						 
		}
		
	


	}

?>