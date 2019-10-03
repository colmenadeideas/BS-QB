<?php $this->render('default/head'); ?>

<style>
  body { padding: 0; height: 100vh }
</style>

<div id="job-area" class="filter">
</div>
<div id="job-area-content" >
  <div class="container">
    <div class="row text-center">
      <a href="<?php echo URL; ?>">
        <img src="<?php echo IMG; ?>olblue-logo-white.png" alt="Ol'Blue" class="logo-olblue-s">
      </a><br>     
    </div>
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
      <h3 class="title-head-1">¿Quieres ser parte de</h3>
       
        <h1><span class="sub-titulo-sugerencia">nuestro equipo?</span></h1>
        <div id="response"></div> 
        <form class="form-horizontal" id="job-form" method = "POST" enctype="multipart/form-data">
              
          <div class="col-md-6">
            <input type="text" class="form-control" id="name" placeholder="Nombre" name="name" required>
            <input type="text" class="form-control" id="phone" placeholder="Teléfono" name="phone" required>
            <input type="email" class="form-control" id="email" placeholder="Tu correo electrónico" name="email" required> 
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" id="lastname" placeholder="Apellido" name="lastname" required>
            <input type="text" class="form-control" id="city" placeholder="Ciudad donde resides" name="city" required>
            <input type="text" class="form-control" id="study-level" placeholder="Nivel Académico" name="education" required> 
          </div>
          
          <div class="col-md-12">Adjunta tu curriculum, en formato PDF, WORD o JPG</div>
          <input name="files" type="file" required=""><br>
          <button class="center-block button-newsletter send">ENVIAR</button>
              
        </form>
    </div>
    <div class="col-lg-2"></div>
  </div>
</div>
<?php $this->render('default/foot'); ?>
<script src="<?php echo JS; ?>main.js"></script>
</body>
</html>