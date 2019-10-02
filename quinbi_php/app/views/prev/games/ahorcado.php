<?php $this->render('default/head-no-bootstrap'); ?>
    <link rel="stylesheet" href="<?php echo CSS; ?>bootstrap2.min.css">
    <link rel="stylesheet" href="<?php echo CSS; ?>font-awesome.css">
    <link rel="stylesheet" href="<?php echo CSS; ?>games.css">  
    <link rel="stylesheet" href="<?php echo CSS; ?>games-ahorcado.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css">
</head>
<body class="ahorcado">
    <div class="container">
      <div class="row"> 
        <div class="wrapper">
          <h1>EL AHORCADO</h1>
          <p>Usa el alfabeto para adivinar la palabra o  has  click  en <strong>Ayuda</strong> Para obtener una pista. </p>
          <div class="col-lg-6">
            <div id="buttons"></div>
          </div>
          <div class="col-lg-6">
            <p id="catagoryName"></p>
            <div id="hold"></div>
            <p id="mylives"></p>
            <p id="clue">Pista - </p>  
            <canvas id="stickman">ESTE TEXTO VA A PARECER SI TU NAVEGADOR NO SOPORTA HTML5</canvas>
            
          </div>
          <div class="container">
            <button id="hint">Ayuda</button>
            <button id="reset">Volver a jugar</button>
          </div>
        </div>
      </div>
    </div>

    <?php $this->render('default/foot'); ?> 
    <script src="<?php echo JS; ?>games-ahorcado.js"></script>
  </body>
</html>