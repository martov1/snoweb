# Sitio web de Scouts navales de olivos Tte de navio pedro etchepare


El sitio esta compilado usando  [jekyll](https://jekyllrb.com/) .

Url del sitio: https://martov1.github.io/snoweb/

**Todo lo que hagas se puede deshacer con un click, no tengas miedo de editar cosas.**


## Como editar la pagina:


####  Como crear una noticia en la pagina principal

Podes añadir noticias desde  [aca](https://github.com/martov1/snoweb/edit/master/_data/noticias.yml)

####  Como modificar la pagina de tu rama

####  Como usar el Markdown para escribir mas lindo

Eso es todo, lo que sigue es para el desarrollador de la pagina.

## Documentacion:

Las imagenes que se coloquen en las carpetas de galeria de cada rama se muestran
en la pagina de cada rama.
La carpeta "originales" de cada galeria esta excluida (no se muestra) y es para
poner las imagenes de tamaño original, hay que recordar que las imagenes de la galeria
tienen que tener como mucho 500px en su dimension mas grande.

###  distribucion

1. En el `root` del sitio estan los contenidos de la pagina principal

2. En `_layouts` estan los templates de todas las paginas

3. en `paginas` esta el contenido de cada pagina para que los usuarios lo editen, no contiene html

4. en `_posts` estan los posts que creen los usuarios.

5. en `_includes` estan las secciones que se repiten de HTML tales como el header, el footer, la barra de navegacion, etc.

6. en `sass` estan los archivos de estilo de todo el sitio, inmediatamente en su interior esta el archivo principal de estilos que reune todos los otros archivos .scss para que jekill lo compile en un .css

7. en  `sass/_partials` estan los archivos parciales de sass ordenados en el mismo orden que los archivos HTML con respecto al `root`

8. en  `assets` estan las imagenes, tipografias y archivos varios.

### Propiedades de los posts
los post tienen las siguentes propiedades editables

** titulo**

    el titulo del post

**rama**

    la rama a la que pertenece, las opciones son manada, unidad, caminantes, rovers. los posts de cada rama se muestan en sus respectivas paginas.

**imagen**

    opcionalmente una imagen que acompaña al  post
