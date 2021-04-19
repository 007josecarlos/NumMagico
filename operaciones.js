
function generarNumero() {

	var min = 1;
	var max = 10;
	var aleatorio = Math.floor(Math.random() * max - min + 1) + min;
	var intentos = 0;
	var nombre = prompt('Hola Bienvenido al juego adivina el numero, cual es tu nombre');
	var numero;
	while (intentos < 10) {

		numero = parseInt(prompt(nombre + ', ingresa un numero entre el ' + min + ' y el ' + max));

		if (numero >= min && numero <= max) {
			if (numero < aleatorio) {
				alert('el numero que ingreso es mas bajo');

			} else if (numero > aleatorio) {
				alert('el numero que ingreso es mas alto');
			} else if (numero == aleatorio) {
				break;
			}
		} else {
			alert('debe ingresar iun numero entre ' + min + ' y ' + max);
		}

		intentos++;
	}
	if (numero == aleatorio) {
		alert('felicidades adivinastes el numero en  ' + (intentos + 1) + '  intentos.');
	} else {
		alert('suerte para la proxima');
	}


	/*	
	//Número máximo
	var max = 10;
	//Número mínimo
	var min = 1;
	// Nombre
	var nombre = prompt('Hola Bienvenido al juego adivina el numero, cual es tu nombre');
	// Intentos
	var intentos=0;

	//Número aleatorio
	var numero_secreto = Math.random() * (max-min)+min;
	//Convertimos el número a entero
	numero_secreto = parseInt(numero_secreto);

	console.log(numero_secreto);

	var mensaje = nombre + "  Ingresa un numero entre "+min+" y el "+max+" (El 0 finaliza el programa)";

	while(intentos>5){
		
		var numero_usuario = prompt(mensaje, "0");
		numero_usuario = parseInt(numero_usuario);

		if(numero_usuario === numero_secreto){
			alert("¡Ganaste! Adivinaste el número secreto en "+(intentos+1)+"intentos");
			break;
		}else if (numero_usuario === 0) {
			break;
		}else if (numero_usuario > numero_secreto) {
			
			mensaje = "Lo sentimos, el número que ingresaste es mayor al número mágico";
		}else if (numero_usuario < numero_secreto) {
			mensaje = "Lo sentimos, el número que ingresaste es menor al número mágico";
		}
		intentos++;
	}*/
}

function actual() {
	fecha = new Date(); //Actualizar fecha.
	hora = fecha.getHours(); //hora actual
	minuto = fecha.getMinutes(); //minuto actual
	segundo = fecha.getSeconds(); //segundo actual
	if (hora < 10) { //dos cifras para la hora
		hora = "0" + hora;
	}
	if (minuto < 10) { //dos cifras para el minuto
		minuto = "0" + minuto;
	}
	if (segundo < 10) { //dos cifras para el segundo
		segundo = "0" + segundo;
	}
	//ver en el recuadro del reloj:
	mireloj = hora + " : " + minuto + " : " + segundo;
	return mireloj;
}
function actualizar() { //función del temporizador
	mihora = actual(); //recoger hora actual
	mireloj = document.getElementById("reloj"); //buscar elemento reloj
	mireloj.innerHTML = mihora; //incluir hora en elemento
}
setInterval(actualizar, 1000); //iniciar temporizador
/*
class Temporizador {
	constructor(id, inicio, final) {
		this.id = id;
		this.inicio = inicio;
		this.final = final;
		this.contador = this.inicio;

		this.conteoSegundos = function () {
			if (this.contador == this.final) {
				this.conteoSegundos = null;
				return;
			}

			document.getElementById(this.id).innerHTML = this.contador--;
			setTimeout(this.conteoSegundos.bind(this), 1000);
		};
	}
}

  let temporizador = new Temporizador('temporizador', 10, 0);
  temporizador.conteoSegundos();
  */