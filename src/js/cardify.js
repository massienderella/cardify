/*  */
/*$(document).ready(function() {
  let containerCardify = $('.cardify');
  cardifyImages(containerCardify);
});
function cardifyImages(container) {
  container.find($('img')).wrap('<figure style="position: relative; display: inline-block; background-color: #011a27; display: inline-block; margin: 0; box-sizing: border-box; line-height: 0"></figure>');

  container.find($('img')).each(function() {
    $(this).after('<figcaption class="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2em; font-weight: bolder; text-align: center; color: #FFF; line-height: 1.2em; opacity: 0; transition: ease all 0.5s;">' + 
    $(this).attr('alt') + '<figcaption>');
  });
  // Mostrar al Hover
  $('figure').hover(function() {
    $(this).children('img').css({
      'opacity': '0',
      'transition': 'ease all 0.5s',
    });
    $(this).children('figcaption').css({
      'opacity': '1',
    });
  },
  function() {
    $(this).children('img').css({
      'opacity': '1',
    });
    $(this).children('figcaption').css({
      'opacity': '0',
    });
  });
};*/

$(document).ready(function() {
  // Using my extended function
  $('.cardify').cardifyImages();
});
// "$.fn" allows you to extend jQuery with your own functions. Is also synonymous with jQuery.fn 
$.fn.cardifyImages = function() {
  // buscar en "this container"
  this.find($('img')).wrap('<figure style="position: relative; display: inline-block; background-color: #011a27; display: inline-block; margin: 0; box-sizing: border-box; line-height: 0"></figure>');
  this.find($('img')).each(function() {
    // agregar luego de "this img"
    $(this).after('<figcaption class="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2em; font-weight: bolder; text-align: center; color: #FFF; line-height: 1.2em; opacity: 0; transition: ease all 0.5s;">' + 
    $(this).attr('alt') + '<figcaption>');
  });
  // Mostrar al Hover
  $('figure').hover(function() {
    $(this).children('img').css({
      'opacity': '0',
      'transition': 'ease all 0.5s',
    });
    $(this).children('figcaption').css({
      'opacity': '1',
    });
  },
  function() {
    $(this).children('img').css({
      'opacity': '1',
    });
    $(this).children('figcaption').css({
      'opacity': '0',
    });
  });
};