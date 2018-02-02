
const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<div class="containerTest"><img src="https://www.infobae.com/new-resizer/R9XlLsPBTofz67mURC03Goe_GMs=/600x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/08200827/iStock-488508586-1024x575.jpg" alt="Hermosa imagen de aurora boreal"></div>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const $ = require('jquery');
const cardify = require('../src/js/cardify');
const expect = require('chai').expect;
const assert = require('chai').assert;
const plugin = require('chai-jq');
chai.use(plugin);

describe('La etiqueta figure existe', () => {
  // Ejecuto la función Cardify en el HTML de maqueta que creamos arriba
  $('.containerTest').cardifyImages();
  // Compruebo la creación del elemento Figure
  it('Creacion de etiqueta "figure"', () => {
    expect($('figure')).to.have.$class('imgFigure')
  });
});

describe('La etiqueta figcaption existe', () => {
  $('.containerTest').cardifyImages();
  it('Creación de etiqueta "figcaption"', () => {
    expect($('figcaption')).to.have.$class('imgFigcaption')
  });
});

describe('Verificando largo de "alt"', () => {
  it('alt.length debe ser mayor a 0', () => {
    var altLength = ($('img').attr('alt').length);
    expect(altLength).to.be.above(0);
  });
});

describe('La imagen posee su atributo alt', () => {
  it('La imagen posee su atributo alt', () => {
    expect($('img')).to.have.$attr('alt');
  });
});

describe('Hay un efecto hover presente', () => {
  it('Debe haber un efecto hover en la función', () => {
    $('.containerTest').cardifyImages();
      assert(typeof $('figure').hover === "function")
  });
});
