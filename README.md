# Sistema de Gestión de Consultorios y Pacientes

Este proyecto permite gestionar un consultorio médico, en el cual se pueden agregar pacientes, mostrarlos y buscar a uno en específico. Se utilizan getters y setters personalizados mediante `Object.defineProperty`.

## Características

- **Clase `Consultorio`:** Permite crear un consultorio con un nombre y gestionar pacientes asociados.
- **Clase `Paciente`:** Permite crear pacientes con nombre, edad, rut y diagnóstico.
- Métodos para agregar, mostrar y buscar pacientes dentro del consultorio.
- Uso de encapsulamiento con propiedades privadas mediante el uso de `let` y acceso controlado con getters y setters.

## Clases y Métodos

### Clase `Consultorio`

#### Constructor
```
new Consultorio(nombre)
```


#### Métodos
- agregarpaciente(paciente): Agrega un nuevo paciente al consultorio.
- mostrarPacientes(): Muestra por consola una lista de todos los pacientes del consultorio.
- buscarPaciente(nombrePaciente): Busca un paciente por nombre (insensible a mayúsculas y minúsculas) y muestra su información.

### Clase `Paciente`
#### Constructor
```
new Paciente(nombre, edad, rut, diagnostico)
```
- nombre (string): Nombre del paciente.
- edad (number): Edad del paciente.
- rut (string): Número de identificación del paciente.
- diagnostico (string): Diagnóstico del paciente.

## Uso de Getters y Setters
Las propiedades privadas de los objetos (_nombre, _edad, _rut, _diagnostico) se manejan mediante getters y setters:

- Getters: _getNombre, _getEdad, _getRut, _getDiagnostico
- Setters: _setNombre, _setEdad, _setRut, _setDiagnostico

## Ejemplos de Uso:
```
// Crear un nuevo consultorio
let consultorio1 = new Consultorio("Consultorio Providencia");

// Crear pacientes
let paciente1 = new Paciente("Tobby", 5, "123456", "Es un buen perro");
let paciente2 = new Paciente("Sakura", 2, "654321", "Es una buena perrita");

// Agregar pacientes al consultorio
consultorio1.agregarpaciente(paciente1);
consultorio1.agregarpaciente(paciente2);

// Mostrar todos los pacientes del consultorio
consultorio1.mostrarPacientes();

// Buscar un paciente por nombre
consultorio1.buscarPaciente("ToBBy");
```
## Instalación y Ejecución

1- Clona el repositorio o descarga el archivo.
2- Abre el archivo index.html en tu navegador (si estás integrando este código en una página web).
3- Abre la consola de tu navegador para ver los resultados.


## Notas
- Este proyecto utiliza funciones de ES5 como Object.defineProperty para manejar las propiedades privadas.
- Para modificar los datos de un paciente o consultorio, usa los setters correspondientes.

## Autor
Este código fue desarrollado por [@mr-gantiva].


### Explicación
- **Características**: Explica qué hace el proyecto.
- **Clases y métodos**: Detalla las clases y métodos importantes.
- **Ejemplo de uso**: Proporciona un ejemplo práctico de cómo utilizar el código.
- **Instalación y ejecución**: Explica cómo poner en marcha el proyecto.

Este archivo es una guía para cualquier persona que desee utilizar o contribuir a tu proyecto. ¡Avísame si necesitas alguna modificación!




