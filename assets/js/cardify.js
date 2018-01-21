$("img").wrap("<figure></figure>");

$("img").each(function(){
  $(this).after("<figcaption class='hide'>" + 
  $(this).attr('alt') + "<figcaption>");
})
//Mostrar al Hover
$("figure").hover(function(){
  $(this).children("figcaption").toggleClass("hide");
  $(this).children("img").toggleClass("opacityCero");
})