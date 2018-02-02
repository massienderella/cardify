# Cardify

Un plugin de Jquery que permite ver el atrbuto "alt" de una imagen como una descripción, al hacer "hover" sobre la misma.

Demo: https://tazocar.github.io/demo-cardify/

***

* **Objetivo** _Crear un Plugin de Jquery que permita mostrar el atributo alt  de una imagen, al hacer hover sobre la misma_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

### Metodología de trabajo

+ Uso de metodología Agile, se implementan retrospectivas para evaluar la calidad y los resultados del trabajo que se está realizando

+ Uso de Trello para ordenar tareas por día/semana, con el objetivo de poder hacer uso eficiente y eficaz de la duración del sprint

+ Uso de WhatsApp como medio de comunicación remoto

### Requerimientos técnicos

##### Dependencias de producción

+ jQuery 3.3.1
+ Materialize 0.100.2
+ Eslint 0.9.1

##### Dependencias de desarrollo

+ Browserify 15.2.0
+ mocha 5.0.0
+ chai 4.1.2
+ chai-jq 0.0.9
+ Node.js

### Modo de uso

1. `git clone` al este repositorio</br>
<a href="https://imgflip.com/gif/23swkq"><img src="https://i.imgflip.com/23swkq.gif" title="made at imgflip.com"/></a>
2. No olvides enlazar `jQuery` en tu archivo .html!
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
3. Enlaza el archivo `main.js` que se encuentra dentro de la carpeta `lib`</br>
```html
<script src="lib/main.js"></script>
```
</br><img src="https://i.imgflip.com/23svvj.gif" title="made at imgflip.com"/></br>
4. Asígnale la clase `cardify` al contenedor donde irán tus imágenes para el que hover se active sobre ellas
<img src="https://i.imgflip.com/23sw6r.gif" title="made at imgflip.com"/></br>
<img src="https://i.imgflip.com/23swqp.gif" title="made at imgflip.com"/></br>
5. Recuerda asignarle el atributo "alt" a tus imágenes.</br>
<img src="https://image.prntscr.com/image/dF5bhhZpQRiaR0eN9XreHA.png"/>

