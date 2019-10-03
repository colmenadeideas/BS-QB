<!--CONTENEDOR DE PRODUCTOS-->
<div class="subp2 col-8 col-sm-9 col-md-9 col-lg-10">
	<div class="row product-display">		
		<?php if(!empty($this->product)) { 
			// $existencia = usort($this->existencia, "sortByZone");
			?>
			<style type="text/css">
				.call-button {
					border: solid 1px #A9A9A9;
				    border-radius: 5px;
				    padding: 7px 15px;
				    margin:0 10px 0 0;
				    transition: all ease 0.5s;
				}

				a.call-button, a.call-button:link { color: #585858; text-decoration: none; }
				.call-button:hover { background: #EAEAEA }
				


				.availability { height: 20px; width: 20px; border-radius: 10px; background: #F3F3F3;
				    float: left; margin: 0 15px 0 0; }
				.availability.high { background: #18BB3D }
				.availability.medium { background: #FFC107 }
				.availability.low { background: #DC3545 }
				    .address-area { max-height: 450px; overflow-y: scroll; padding-top: 20px; padding-right: 20px  }
				}
				.product-description { padding-top: 30px }
				</style>
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<h4><?php echo $this->product[0]['nombre']; ?></h4>
				<div class="card result-card-detail" style="width: 100%">
					

													
					<img src="<?php echo IMG; ?>productos/flamuko-flagloss.png" />
				</div>
				<!-- <div class="text-center product-description">Descripción del producto</div> -->
				
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				Disponible en:
				<div class="address-area">
					<?php 
					foreach ($this->existencia as $existencia) { //print_r($existencia);?>
						<div class="col-lg-12 ">
							<h6>
								<?php 
								switch (true) {
									case $existencia['valor'] > EXISTENCIA_NIVEL_MEDIO:
										$valor = 'high';
										break;
									case $existencia['valor'] < EXISTENCIA_NIVEL_BAJO:
										$valor = 'low';
										break;
									
									default:
										$valor = 'medium';
										break;
								}
								?>
								<div class="availability <?php echo $valor; ?>"></div> <?php echo $existencia['tienda'][0]['nombre'] ." ".$existencia['valor']; ?> 
							</h6>
							<?php if (!empty($existencia['tienda'][0]['direccion'])) { ?>
							<small><i class="fa fa-map-marker-alt"></i> <?php echo $existencia['tienda'][0]['direccion']; ?><br>
							<?php 
								foreach ($this->estados as $estado) {
									if ($estado['id'] == $existencia['zona']) {
										echo strtoupper($estado['nombre']); 
									}
								}
							?>
							</small>
							<?php } ?>

							<?php 
								$telefono 	= $existencia['tienda'][0]['telefono'];
								$telefono1 	= $existencia['tienda'][0]['telefono1'];

								if (!empty($telefono)) {
									$codigo = substr($telefono, 0, 4);

									$is_cellphone = FALSE;
									switch ($codigo) {
										case '0412': $is_cellphone = TRUE; break;
										case '0281': $is_cellphone = TRUE; break;
										case '0414': $is_cellphone = TRUE; break;
										case '0424': $is_cellphone = TRUE; break;
										case '0416': $is_cellphone = TRUE; break;
										case '0426': $is_cellphone = TRUE; break;
									}
									
								?>
								<div class="text-right">
								<?php if ($is_cellphone == TRUE) { ?>
									<a href="https://api.whatsapp.com/send?phone=<?php echo $telefono; ?>&text=Hola,%20quisiera%20saber%20disponibilidad%20de%20este%20producto:%20<?php echo $this->product[0]['nombre'];?>" target="_blank" class="call-button"><i class="fa fa-whatsapp"></i> Enviar Mensaje</a>
								<?php } ?>
									<a href="tel:<?php echo $telefono; ?>" class="call-button"><i class="fa fa-phone-volume"></i> <span> Llamar</span></a><br>
								</div>
							<?php }// not empty ?>
						</div>
						
						<hr>
					<?php } ?>
				</div>
			</div>
	<?php } ?>
	</div>	
</div>
<!--CONTENEDOR DE PRODUCTOS-->