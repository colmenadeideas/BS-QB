   $(window).on('beforeunload', function() {
       $(window).scrollTop(0);
   });
   var lastScrollTop = 0;
   /*
	Estas variables las saque directo de css
	porque no pude obtenerlas porcentualmente 
	con jquery :(
	*/
   var Top1 = 11;
   var Top2 = 21.18;
   var Top3 = 15;
   var Top4 = 43;
   var Top5 = 59;
   var Top6 = 53;
   /* Imagen central */
   var Parallax = 0.21;
   var speedParallax = 100;
   /* Otras imagenes */
   var notParallax = 0.21;
   var speedNotParallax = 75;
   /* Efecto Parallax */
   $(window).scroll(function(event) {
       var st = $(window).scrollTop();
       if ((st > 1600) && (st < 3200)) {
           if (st > lastScrollTop) {
               Top3 = Top3 - Parallax;
               $("#imgG3").animate({ top: Top3 + "%" }, speedParallax);
               Top4 = Top4 - notParallax;
               $("#imgG4").animate({ top: Top4 + "%" }, speedNotParallax);
               Top5 = Top5 - notParallax;
               $("#imgG5").animate({ top: Top5 + "%" }, speedNotParallax);
               Top6 = Top6 - notParallax;
               $("#imgG6").animate({ top: Top6 + "%" }, speedNotParallax);
           } else {
               Top3 = Top3 + Parallax;
               $("#imgG3").animate({ top: Top3 + "%" }, speedParallax);
               Top4 = Top4 + notParallax;
               $("#imgG4").animate({ top: Top4 + "%" }, speedNotParallax);
               Top5 = Top5 + notParallax;
               $("#imgG5").animate({ top: Top5 + "%" }, speedNotParallax);
               Top6 = Top6 + notParallax;
               $("#imgG6").animate({ top: Top6 + "%" }, speedNotParallax);
           }
       }
       lastScrollTop = st;
   });