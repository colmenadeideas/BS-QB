<!-- Modal -->
<div class="modal fade" id="sugerencias" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
       <h3>ESCUCHAMOS TUS EXPERIENCIAS</h3>          
      </div>
      <div class="modal-body" style="text-align: center;">
        <div id="response"></div>
          <form class="form-horizontal" method="post" id="sugerencia-form" >
            <h1><span class="sub-titulo-sugerencia">SUGERENCIAS</span></h1>
            
                <input type="text" class="form-control" id="name" placeholder="Tu nombre" name="name" style="border-radius: 0;" required> 
                <input type="email" class="form-control" id="email" placeholder="Tu correo electrónico" name="email" style="border-radius: 0;" required>
                <textarea class="form-control" rows="5" id="comment" placeholder="¿Tienes una sugerencia o comentario?" name="sugerencia" style="border-radius: 0;" form="sugerencia-form" required></textarea>
                
                <div class="col-md-12 red">¿Cuándo nos visitaste?</div>
                <div class="col-md-6">
                    <select name="dia">
                    <option value="lunes">lunes</option>
                    <option value="martes">martes</option>
                    <option value="miércoles">miércoles</option>
                    <option value="jueves">jueves</option>
                    <option value="viernes">viernes</option>
                    <option value="sábado">sábado</option>
                    <option value="domingo">domingo</option>
                    <option value="No he asistido">No he asistido</option>
                  </select>
                </div>
                <div class="col-md-6">
                    <div class='input-group date' id='sugerencia-hora'>
                      <input type='text' name="hora" class="form-control" placeholder="¿hora?" />
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-time"></span>
                      </span>
                    </div>
                </div>
                
                

                <button class="center-block button-newsletter send" id="button-sugerencia"  style="color: white;">ENVIAR</button>
                
          </form>
        

      </div>      
    </div>
  </div>
</div>