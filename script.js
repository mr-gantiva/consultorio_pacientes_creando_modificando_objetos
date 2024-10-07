function Consultorio(nombre) {
  let _nombre = nombre;
  let _pacientes = [];

  //GET
  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return nombre;
    },
  });

  Object.defineProperty(this, "_getPaciente", {
    get: function () {
      return paciente;
    },
  });
  //SET
  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });
  Object.defineProperty(this, "_setPaciente", {
    set: function (paciente) {
      _paciente = paciente;
    },
  });

  Consultorio.prototype.agregarpaciente = (paciente) => {
    // Agrerga al arreglo _pacientes cada paciente instanciado
    _pacientes.push(paciente);
  };

  Consultorio.prototype.mostrarPacientes = () => {
    // Recorre el arreglo _pacientes y muestra por consola los resultados
    _pacientes.forEach((paciente) => {
      console.log(
        `Nombre: ${paciente._getNombre}, Edad: ${paciente._getEdad}, Rut: ${paciente._getRut}, Diagnostico: ${paciente._getDiagnostico}`
      );
    });
  };

  Consultorio.prototype.buscarPaciente = function (nombrePaciente) {
    // Busca en el arreglo _pacientes el paciente que coincida con el nombre ingresado
    let pacienteEncontrado = _pacientes.find(
      (paciente) =>
        paciente._getNombre.toLowerCase() === nombrePaciente.toLowerCase()
    );
    // Valida si el paciente a buscar existe
    if (pacienteEncontrado) {
      console.log("Paciente encontrado:");
      console.log(
        `Nombre: ${pacienteEncontrado._getNombre}, Edad: ${pacienteEncontrado._getEdad}, Rut: ${pacienteEncontrado._getRut}, Diagnostico: ${pacienteEncontrado._getDiagnostico}`
      );
    } else {
      console.log("Paciente no encontrado");
    }
  };
}

function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _edad = edad;
  let _rut = rut;
  let _diagnostico = diagnostico;
  //GET
  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });
  Object.defineProperty(this, "_getEdad", {
    get: function () {
      return _edad;
    },
  });
  Object.defineProperty(this, "_getRut", {
    get: function () {
      return _rut;
    },
  });
  Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
      return _diagnostico;
    },
  });
  //SET
  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });
  Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
      _edad = edad;
    },
  });
  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    },
  });
  Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}

// Instancias de los Objetos Consultorio y Paciente
let consultorio1 = new Consultorio("Consultorio Providencia");
let paciente1 = new Paciente("Tobby", 5, "123456", "Es un buen perro");
let paciente2 = new Paciente("Sakura", 2, "654321", "Es una buena perrita");

// Resultados por consola
consultorio1.agregarpaciente(paciente1);
consultorio1.agregarpaciente(paciente2);
consultorio1.mostrarPacientes();
consultorio1.buscarPaciente("ToBBy");
