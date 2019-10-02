<script id="Product-Template" type="text/x-handlebars-template"> 
	<div class="row border-bottom resul1 align-items-center">
		<h6 class="">{{productos}} resultados para <a href="#">"busqueda"</a></h6>
	</div>
	<div class="row product-display">
		{{#each productos}}
		<div class="col-lg-3 col-md-6 col-sm-3 col-xs-3">
			<a class="card-link" href="site/detail/{{id}}">
				<div class="card result-card" style="width: 100%; background: #333">
					<h4>{{nombre}}</h4>
					
					<div class="btn-link-bottom">Ver detalle</div>								
					<img src="productos/flamuko-flagloss.png" />
				</div>
			</a>
		</div>
		{{/each}}
	</div>
</script>

<div class="results col-8 col-sm-9 col-md-9 col-lg-10">
	<div class="row border-bottom resul1 align-items-center">
		<h6 class=""><?php echo sizeof($this->results); ?> resultados para <a href="#">"busqueda"</a></h6>
	</div>				
	<div class="row product-display">
		<?php 
		function random_color_part() {
		    return str_pad( dechex( mt_rand( 0, 255 ) ), 2, '0', STR_PAD_LEFT);
		}

		function random_color() {
		    return random_color_part() . random_color_part() . random_color_part();
		} ?>



		<?php foreach($this->results as $result) { ?>
			<div class="col-lg-3 col-md-6 col-sm-3 col-xs-3">
				<a class="card-link" href="site/detail/<?php echo $result['id']; ?>">
					<div class="card result-card" style="width: 100%; background: #<?php echo random_color(); ?> ">
						<h4><?php echo $result['nombre']; ?></h4>
						
						<div class="btn-link-bottom">Ver detalle</div>								
						<img src="<?php echo IMG; ?>productos/flamuko-flagloss.png" />
					</div>
				</a>
			</div>			
		<?php } ?>
		
	</div>
	<!--div class="row busq2">
		<a class="as1" href="#"><i class="fas fa-angle-left flecha1"></i></a>
		<a class="a1" href="#"><i class="fas fa-angle-left flecha1"></i>Página anterior</a>
		<a class="a2" href="#">1</a>
		<a class="a3" href="#">2</a>
		<a class="a4" href="#">3</a>
		<a class="a5" href="#">...</a>
		<a class="a6" href="#">10</a>
		<a class="a7" href="#">Página siguiente<i class="fas fa-angle-right flecha2"></i></a>
		<a class="as2" href="#"><i class="fas fa-angle-right flecha2"></i></a>
	</div-->
</div>