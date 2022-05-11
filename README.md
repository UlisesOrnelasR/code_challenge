# Code_Challenge: Cursos de Visual Thinking API

Visual Partner-Ship nos ha asignado un nuevo proyecto...😄

## Si te gustaría contribuir o experimentar con el proyecto, sigue estos pasos:👯‍

- Obtén una copia, para ello ejecuta la siguiente línea de código en tu terminal donde te gustaría guardar este proyecto

```
git clone https://github.com/UlisesOrnelasR/code_challenge.git
```

## Las dependencias que estaremos utilizando:📚

1.- **Jest**: Para hacer pruebas de unidas y darle calidad a nuestro código

Usaremos la version 26 de jest, porque no da problemas a la hora de automatizar las pruebas.
```
npm install jest@26.0.0 --save-dev
```

2.- **ESLint**: Porque nuestro código tendra estilo, usaremos el de *Airbnb*.

```
npm install eslint --save-dev
```

Ejecutaremos el siguiente código para configurar ESLint, recuerda, escribiremos código al estilo *Airbnb*.

```
npm init @eslint/config

```

Para ejecutar linter y que nos muestre las inconsistencias de nuestro codigo usaremos `npm run linter` y para corregirlas `npm run linter-fix`.

3.- **Express**: Nos servirá para crear un servidor.

```
npm install express --save
```

#### El package.json ya viene configurado para automatizar las dependencias y poder ejecutarlas con un `npm run server`, modificalo dependiendo de la ubicación de tus archivos, en mi caso asi funciona correctamente:

![package](https://user-images.githubusercontent.com/99143567/167772273-c5d4b207-4a85-4571-bbd4-3cafca8cb4d3.JPG)

## Tenemos pruebas automatizadas! gracias a GitHub Actions🤖✅🦾

Decidimos hacer las pruebas atuomatizadas para hacer todos los test, y no estar haciendo uno por uno, fue sencillo, te lo explíco:

1.- En la raíz de nuestro proyecto creamos una carpeta llamada `.github`, luego dentro de esta, creamos otra carpeta llamada `workflows` y finalmente dentro de esta ultima un archivo llamado `test.yml`, nuestra estructura para este archivo quedaría asi `.github/workflows/test.yml` 

Agregamos el siguiente codigo al archivo `test.yml`

```
name: Run Tests in my project every push on GitHub

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Jest
      uses: stefanoeb/jest-action@1.0.3
```

¡Guardamos los cambios, subimos lo cambios, hicimos un commit, un push y listo!. Asi es como automatizamos todos nuestros test para cada push que hicieramos.


## Diseño de la solución del proyecto📝

Se nos pidieron tres cosas:

1.- Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.

2.- Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.

3.- Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

En este diagrama se muestra la estructura del proyecto que se creo:

```mermaid
graph TD;
    Reader-->StudentService;
    StudentService-->StudentController
    StudentController-->Server
```

## Utils🛠

Se tiene que leer la DB proporcionada para eso se creo un archivo Reader.js en la carpeta utils(aqui van las clases auxiliares) donde se creara un método de lectura del archivo. Para esto, usara el método de Node llamado fs.readFileSync() para leer el archivo y devolver su contenido.
Esta clase Redera leerá el archivo que le indiquemos.

```mermaid
classDiagram
    class Reader
    Reader : +readJsonFile(filePath)
```

## Services⚙

Se creó una clase StudentService en la carpeta services(aqui van las clases para aplicar la lógica que necesitamos) que llevara tres métodos static para obtener lo que necesitamos de los estudiantes.

```mermaid
classDiagram
    class StudentService
    StudentService : +getStudents(filePath)
    StudentService : +getStudentsEmailsCertification(students)
    StudentService : +getStudentsCredits(students)
```

## Controllers🗜

Se creó una clase StudentController en la carpeta controllers(uso de los services) que servira de puente entre las funcionalidades y el server que se creara.
Esto nos ayudó a tener una mejor estructura, a la vez que una separación de responsabilidades.

```mermaid
classDiagram
    class StudentController
    StudentController : +getStudentsPuente(students)
    StudentController : +getStudentsEmailsCertificationPuente(students)
    StudentController : +getStudentsCreditsPuente(students)
```

