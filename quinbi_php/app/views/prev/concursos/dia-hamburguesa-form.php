<!-- Modal -->
<div class="modal fade" id="dia-hamburguesa" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
       <h3 class="text-center">&nbsp;</h3>          
      </div>
      <div class="modal-body" style="text-align: center;">
        <div id="concurso-response"></div>
          <form class="form-horizontal" method="post" id="concurso-form" >
            <h1><span class="sub-titulo-sugerencia">¿Quieres participar en un Concurso?</span></h1>
              <h5>Para participar debes completar todos tus datos, <strong>recibirás un correo el día 30 de Mayo</strong> con las instrucciones. ¡Será un reto! pero valdrá la pena...<br><br></h5>
              
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <input type="text" class="form-control" id="fname" placeholder="Tu nombre" name="fname" style="border-radius: 0;" required> 
                 <input type="text" class="form-control" id="lname" placeholder="Tu apellido" name="lname" style="border-radius: 0;" required>
                  <div class='input-group date' id='birth-date'>
                    <input type='text' name="birthday" class="form-control" placeholder="Fecha Nacimiento" required />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-time"></span>
                    </span>
                  </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <input type="email" class="form-control" id="email" placeholder="Tu correo electrónico" name="email" style="border-radius: 0;" required>
                  <input type="text" class="form-control" placeholder="Usuario Instagram" name="username_ig" style="border-radius: 0;" required> 
                  <input type="text" class="form-control" placeholder="¿En qué zona resides?" name="location" style="border-radius: 0;" required>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                Sexo 
                <select name="sexo" class="form-control" required>
                    <option>Seleccionar</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    <option value="-">Prefiero no decir</option>
                </select>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                ¿Alguna vez nos has visitado?
                <select name="visit" class="form-control" required>
                    <option>Seleccionar</option>
                    <option value="si">si</option>
                    <option value="no">no</option>
                </select>
              </div>
              <input type="checkbox" class="form-check-input" name="consent" id="consent" required>
                    Estoy de acuerdo en que mis datos son registrados para comunicación de Concursos y promociones de Ol'blue   <br>      
                

               
              

      </div>
               
                <div class="col-md-12 text-left">
                   
                </div>
                
                

                <button class="center-block button-newsletter send" id="button-sugerencia"  style="color: white;">ENVIAR</button><br>
                
          </form>
        

      </div>      
    </div>
  </div>
</div>