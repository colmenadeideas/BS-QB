<?php $this->render('default/head'); ?>

<style>
    body { padding: 0; height: 100vh }
    #menuDisponible { display: block; }
    .logo-olblue { margin: 50px  }
</style>

<div id="menu-area">
    <div class="container">

        <div class="row text-center">
            <a href="<?php echo URL; ?>">
                <img src="<?php echo IMG; ?>logo_black.png" alt="Ol'Blue" class="logo-olblue">
            </a>
            <h1>NUESTRO MENÚ</h1>
        </div>
        <?php $this->render("food-menu/content"); ?>

    </div>
</div>
<?php $this->render('default/foot'); ?>
<script src="<?php echo JS; ?>main.js"></script>
</body>
</html>