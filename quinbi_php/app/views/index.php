<div class="main-containt">
	<div class="top-head">
		<div class="row">

			<div class="col-4 col-sm-3 col-lg-3">
				<img class="logo" src="<?php echo IMG; ?>flamuko-logo.png" alt="<?php echo SITE_NAME; ?>" title="<?php echo SITE_NAME; ?>"  />
			</div>
			<div class="col-8 col-sm-9 col-lg-9 form1 d-flex align-items-center">
				<form id="form-search" role="form" class="form-inline" method="post">
					<input type="text" class="form-control" name="search_term" placeholder="Buscar por producto o color" required value="blanco">
				  	<button type="submit" class="btn btn-primary"><i class="fa fa-search"></i> BUSCAR</button>
				</form>
			</div>	
		</div>
    </div>
    <style>
			
	</style>
    <div class="principal row">
    	<!-- CATEGORIAS-->
		<div class="subp1 col-4 col-sm-3 col-md-3 col-lg-2 border-right">
			<div class="filters-area">
				<h3>Línea</h3>
				<div id="current-filters-linea" class="current-filters">
				</div>
				<?php if (!empty($this->lineas)) { ?>
				<ul id="linea" class="filters">
					<?php foreach ($this->lineas as $linea) { ?>
						<li><a href="#" data-filter="linea" data-fvalue="<?php echo $linea['id']; ?>" data-fname="<?php echo $linea['nombre']; ?>"><?php echo $linea['nombre']; ?></a></li>
					<?php } ?>					
				</ul>
			<?php }//endif ?>
			</div>
			<div class="filters-area">
				<h3>Ubicación</h3>
				<div id="current-filters-ubicacion" class="current-filters">
				</div>
				<hr>
				<ul id="ubicacion" class="filters">
					<?php foreach ($this->estados as $estado) { ?>
						<li><a href="#" data-filter="ubicacion" data-fvalue="<?php echo $estado['id']; ?>" data-fname="<?php echo $estado['nombre']; ?>"><?php echo $estado['nombre']; ?></a></li>
					<?php } ?>
				</ul>
			</div>
			
		</div>
		<!--END CATEGORIAS-->
    	<!--CONTENEDOR DE PRODUCTOS-->
    		<?php $this->render($this->content_view); ?>
    	<!--CONTENEDOR DE PRODUCTOS-->
		</div>

</div>