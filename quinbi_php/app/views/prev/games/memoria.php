<?php $this->render('default/head-no-bootstrap'); ?>
		<link rel="stylesheet" href="<?php echo CSS; ?>bootstrap2.min.css">
		<link rel="stylesheet" href="<?php echo CSS; ?>font-awesome.css">
		<link rel="stylesheet" href="<?php echo CSS; ?>games.css">	
		<link rel="stylesheet" href="<?php echo CSS; ?>games-memory.css">		
		<link rel="stylesheet" href="<?php echo CSS; ?>games-memory-alert.css">
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css">
	</head>
	<body class="memoria">
		<div class="container">
			<div id="score-panel">
				<ul class="stars">
					<li><i class="fa fa-star"></i></li>
					<li><i class="fa fa-star"></i></li>
					<li><i class="fa fa-star"></i></li>
				</ul>
				<span class="moves">0</span> Movimientos
				<div class="restart">
					<i class="fa fa-repeat"></i>
				</div> 
			</div>
			<div class="col-lg-1"></div>
			<div class="col-lg-10 deck-parent">
				<div class="centered-deck">
					<h1>MEMORIA</h1>
					<ul class="deck"></ul>
				</div>
			</div>
		</div>
		<?php $this->render('default/foot'); ?> 
		<script src="<?php echo JS; ?>games-memoria.js"></script>
		<script src="//unpkg.com/sweetalert2@7.0.9/dist/sweetalert2.all.js"></script>
		<link rel="stylesheet" href="<?php echo CSS; ?>games-memory-alert.css">
		<!--script src="//cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script-->
	</body>
</html>