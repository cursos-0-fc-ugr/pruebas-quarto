<!-- LTeX: language=es -->
# Pruebas quarto

Pruebas para migrar material de cursos cero a quarto.

## Pruebas de autoevaluación

Hay tres carpetas, cada una con un modelo de cuestionarios de autoevaluación:

- h5p see https://h5p.org/ and https://lumi.education/en/ and 
- quizdown (con KaTeX)  https://github.com/parmsam/quarto-quizdown
- surveyjs see https://surveyjs.io/
- jupyterviz (con MathJax 3, gracias Gustavo) see https://github.com/jmshea/jupyterquiz

## Botones de solución oculta

Para usar botones que muestren la solución, como alternativa a `::: {#etiqueta .callout .collapse}`, insertamos en el sitio en el que queramos que aparezca el botón `<button id="e1-1" class="btn btn-light btn-sm" onclick="show(this.id);">Solución</button>`, donde "e1-1" es un identificador, que debe de ser distinto para cada botón. Después la solución irá en un entorno 

```
::: {#solucion-e1-1 .callout .collapse}

Texto de la solución.

:::
```

La etiqueta de este entorno siempre es de la forma `#solucion-identificador_del_boton`. En este ejemplo, como el identificador del botón es `e1-1`, la etiqueta es `#solucion-e1-1`.

En el fichero `indludes-header.html` está definida la función `show`, que es la que muestra y oculta la información cuando se presiona el botón.