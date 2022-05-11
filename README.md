# Code_Challenge: Cursos de Visual Thinking API

Visual Partner-Ship nos ha asignado un nuevo proyecto...😄

## Si te gustaría contribuir o experimentar con el proyecto, sigue estos pasos:

- Obtén una copia, para ello ejecuta la siguiente línea de código en tu terminal donde te gustaría guardar este proyecto

```
git clone https://github.com/UlisesOrnelasR/code_challenge.git
```

## Las dependencias que estaremos utilizando

- **Jest**: Para hacer pruebas de unidas y darle calidad a nuestro código

Usaremos la version 26 de jest, porque no da problemas a la hora de automatizar las pruebas.
```
npm install jest@26.0.0 --save-dev
```

- **ESLint**: Porque nuestro código tendra estilo, usaremos el de *Airbnb*.

```
npm install eslint --save-dev
```

Ejecutaremos el siguiente código para configurar ESLint, recuerda, escribiremos código al estilo *Airbnb*.

```
npm init @eslint/config

```

Para ejecutar linter y que nos muestre las inconsistencias de nuestro codigo usaremos `npm run linter` y para corregirlas `npm run linter-fix`.

- **Express**: Nos servirá para crear un servidor.

```
npm install express --save
```

## El package.json ya viene configurado para automatizar las dependencias y poder ejecutarlas con un `npm run server`, modificalo dependiendo de la ubicación de tus archivos, en mi caso asi funciona correctamente:

![package](https://user-images.githubusercontent.com/99143567/167772273-c5d4b207-4a85-4571-bbd4-3cafca8cb4d3.JPG)




