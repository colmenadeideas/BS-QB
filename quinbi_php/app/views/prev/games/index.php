<?php $this->render('default/head'); ?>

<style>
	body { padding: 0; height: 100vh }
</style>

<div id="game-area">
	<div class="container">

		<div class="row text-center">
			<a href="<?php echo URL; ?>">
				<img src="<?php echo IMG; ?>logo_black.png" alt="Ol'Blue" class="logo-olblue">
			</a>
			<h1>JUEGA CON NOSOTROS</h1>
		</div>
		<div class="row">
			<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 mt-4">
		       <a href="<?php echo URL;?>games/memoria">
			        <div class="card">
			            <img class="card-img-top" src="<?php echo IMG; ?>games/memoria/cover.jpg">
			            <div class="card-block">
			                <figure class="profile">
			                    <img src="<?php echo IMG; ?>games/nivel-1.jpg" class="profile-avatar" >
			                </figure>
			                <h4 class="card-title mt-3">Memoria</h4>
			                
			                <div class="card-text">
			                	¡Junta los pares! y descubre si puedes hacerlo más rápido que tus amigos en la mesa
			                </div>
			            </div>		           
			        </div>
			    </a>
		    </div>
		    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 mt-4">
		        <a href="<?php echo URL;?>games/ahorcado">
			        <div class="card">
			            <img class="card-img-top" src="<?php echo IMG; ?>games/ahorcado/cover.jpg">
			            <div class="card-block">
			                <figure class="profile">
			                    <img src="<?php echo IMG; ?>games/nivel-1.jpg" class="profile-avatar" >
			                </figure>
			                <h4 class="card-title mt-3">El Ahorcado</h4>
			                
			                <div class="card-text">
			                	Prueba tus capacidades para descubrir las frases
			                </div>
			            </div>		           
			        </div>
		        </a>
		    </div>
		</div>

	</div>
</div>
<?php $this->render('default/foot'); ?>
</body>
</html>