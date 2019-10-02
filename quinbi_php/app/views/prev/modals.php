<div id="modalBanner">
      <div class="box">
          <!-- Modal content-->
          <div class="modal-wrap">
              <div class="modal-head">
                  <button type="button" class="close" data-dismiss="modal"><i class="fa fa-times-circle" aria-hidden="true" style="color: white;"></i></button>
                  <h4 class="modal-title">&nbsp;</h4>
              </div>
              <div class="container">
                <div class="row " id="newsletter">
                  <div class="col-md-6 fondo" id="newsletter-left">
                    <img src="<?php echo IMG; ?>logo_black.png" alt="logo-black-olblue" id="logo-newsletter" class="img-responsive center-block">
                    <h1 class="title-newsletter-left" >Suscríbete</h1>
                  </div>
                  <div class="col-md-6 fondo" id="newsletter-right">
                    <h3 style="margin-top: 10%;"><span class="title-newsletter">Mantente siempre</span></h3>
                          <h1><span class="sub-titulo-news">Informado</span></h1>
                          <form class="form-horizontal"  id="newsletter-form" method="post" accept-charset="UTF-8">
                              <div class="form-group">
                                <label class="control-label col-sm-4" for="contractor_username" >Nombre:</label>
                                <div class="col-sm-6 controls">          
                                  <input type="text" class="form-control" id="lname" placeholder="Nombre" name="lname" style="border-radius: 0;" required>
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="control-label col-sm-4" for="contractor_email">Email:</label>
                                <div class="col-sm-6 controls">
                                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  style="border-radius: 0;" required>
                                </div>
                              </div>
                              
                              <div class="form-group">        
                                <div class="col-sm-offset-2 col-sm-10">
                                  <button type="submit" class="button-newsletter send" id="cf-submitted-2">ENVIAR</button>
                                </div>
                              </div>
                          </form>
                  </div>
                </div>
              </div>

           </div>
      </div>
  </div>

  <div class="container">
    <div class="modal fade" id="mySugerencia" role="dialog">
        <div class="modal-dialog modal-lg">
            <!-- Modal content-->
            <div class="modal-content" style="" id="modal-sugerencia">
                <div class="modal-header" style="border: none;">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>

                </div>
                <div class="modal-body">
                    <div class="col-md-7 mySugerencia-left"><img src="./img/logo_black.png" alt="logo-black-olblue" id="logo-newsletter" style="height: 60px;" class="img-responsive center-block">
                        <div class="titles">
                            <h3 class="subtitle-sugerencia-left title-rotation">Cuéntanos qué</h3>
                            <h1 class="title-sugerencia-left title-rotation"><i class="fa fa-circle" aria-hidden="true"></i>PIENSAS<i class="fa fa-circle" aria-hidden="true"></i></h1>
                        </div>
                    </div>
                    <div class="col-md-5 mySugerencia-right">
                        <form class="form-horizontal" method="POST" id="Sugerencia-Form" >
                          <input type="hidden" name="type" value="Sugerencia">
                          <h3><span class="title-newsletter" style="font-family: BurfordRusticBook;font-size: 100%; text-align: center;">ESCUCHAMOS TUS SUGERENCIAS</span></h3>
                          <h1><span class="sub-titulo-sugerencia">SUGERENCIA</span></h1>
                          
                              <div class="form-group">
                                  <div class="col-sm-12">
                                      <input type="text" class="form-control" id="email" placeholder="Email" name="email" style="border-radius: 0;" required>
                                  </div>
                              </div>

                              <div class="form-group">
                                  <div class="col-sm-12">
                                      <textarea class="form-control" rows="5" id="comment" placeholder="Sugerencia" name="Sugerencia" style="border-radius: 0;" form="Sugerencia-Form" required></textarea>
                                  </div>
                              </div>

                              <div class="form-group">
                                  <div class="col-md-12">
                                      <button class="center-block button-newsletter send" id="button-sugerencia"  style="color: white;">ENVIAR</button>
                                  </div>
                              </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>

</div>
<div class="container">
    <div class="modal fade" id="myCurriculum" role="dialog">
        <div class="modal-dialog modal-lg">
            <!-- Modal content-->
            <div class="modal-content" style="" id="modal-curriculum">
                <div class="modal-header" style="border: none;">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>

                </div>
                <div class="modal-body">
                    <div class="col-md-6 myCurriculum-left">
                      center  <img src="./img/logo-cabeza.png" alt="logo-cabeza" >
                    </div>
                    <div class="col-md-6 myCurriculum-right">
                        <form class="form-horizontal" method="POST" id="Curriculum-Form" >
                          <input type="hidden" name="type" value="Sugerencia">
                          <h3><span class="title-newsletter" style="font-family: BurfordRusticBook;font-size: 100%; text-align: center;">ESCUCHAMOS TUS SUGERENCIAS</span></h3>
                          <h1><span class="sub-titulo-sugerencia">SUGERENCIA</span></h1>
                          
                              <div class="form-group">
                                  <div class="col-sm-12">
                                      <input type="text" class="form-control" id="email" placeholder="Email" name="email" style="border-radius: 0;" required>
                                  </div>
                              </div>

                              <div class="form-group">
                                  <div class="col-sm-12">
                                      <textarea class="form-control" rows="5" id="comment" placeholder="Sugerencia" name="Sugerencia" style="border-radius: 0;" form="Curriculum-Form" required></textarea>
                                  </div>
                              </div>

                              <div class="form-group">
                                  <div class="col-md-12">
                                      <button class="center-block button-newsletter send" id="button-sugerencia"  style="color: white;">ENVIAR</button>
                                  </div>
                              </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>

</div>