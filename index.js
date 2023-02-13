
function compruebaNombre () {
		
	// Variables del nombre
	var miNombre = document.getElementById("nombre").value;
	var patronNombre = new RegExp("[A-Za-z]");

	if (miNombre == "") {
		// Si el nombre está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorNombre").style.display = "block";
		document.getElementById("errorNombre").innerText = "Rellene este campo";
		document.getElementById("nombre").style.borderColor = "red";
		document.getElementById("nombre").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el nombre no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorNombre").style.display = "none";
		document.getElementById("nombre").style.borderColor = "initial";
		document.getElementById("nombre").style.backgroundImage = "none";
		
		// Si el nombre no está vacío, se comprueba si tiene números
		if(patronNombre.test(miNombre) == false) {
			// Si el nombre tiene numeros, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorNombre").style.display = "block";
			document.getElementById("errorNombre").innerText = "El nombre no puede contener números";
			document.getElementById("nombre").style.borderColor = "red";
			document.getElementById("nombre").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el nombre es correcto, se muestra el borde/imagen verde
			document.getElementById("nombre").style.borderColor = "green";
			document.getElementById("nombre").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}

function compruebaEmail () {
		
	// Variables del email
	var miEmail = document.getElementById("email").value;
	var patronEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");

	if (miEmail == "") {
		// Si el email está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorEmail").style.display = "block";
		document.getElementById("errorEmail").innerText = "Rellene este campo";
		document.getElementById("email").style.borderColor = "red";
		document.getElementById("email").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el email no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorEmail").style.display = "none";
		document.getElementById("email").style.borderColor = "initial";
		document.getElementById("email").style.backgroundImage = "none";
		
		// Si el email no está vacío, se comprueba si cumple el patrón
		if(patronEmail.test(miEmail) == false) {
			// Si el email no cumple el patrón, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorEmail").style.display = "block";
			document.getElementById("errorEmail").innerText = "Email inválido";
			document.getElementById("email").style.borderColor = "red";
			document.getElementById("email").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el email cumple el patrón, se muestra el borde/imagen verde
			document.getElementById("email").style.borderColor = "green";
			document.getElementById("email").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}

function compruebaClave1 () {
		
	// Variables de la clave1
	var miClave1 = document.getElementById("clave1").value;

	if (miClave1 == "") {
		// Si la clave1 está vacía, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorClave1").style.display = "block";
		document.getElementById("errorClave1").innerText = "Rellene este campo";
		document.getElementById("clave1").style.borderColor = "red";
		document.getElementById("clave1").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si la clave1 no está vacía, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorClave1").style.display = "none";
		document.getElementById("clave1").style.borderColor = "initial";
		document.getElementById("clave1").style.backgroundImage = "none";
		
		// Si la clave1 no está vacía, se comprueba si tiene exactamente 8 caracteres. En el ejercicio se indica vía texto
		// que "el campo Clave deberá tener al menos 8 caracteres", y en la imagen siguiente aparece un mensaje en rojo 
		// indicando que "No debe tener más de 8 caracteres", por lo que se da a entender que la longitud de la clave debe
		// ser exactamente de 8 caracteres.
		if (miClave1.length !== 8) {
			// Si la clave1 tiene menos de 8 caracteres (no puede tener más al estar ya limitado por maxlength="8"),
			// se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorClave1").style.display = "block";
			document.getElementById("errorClave1").innerText = "No debe tener menos de 8 caracteres";
			document.getElementById("clave1").style.borderColor = "red";
			document.getElementById("clave1").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si la clave1 tiene exactamente 8 caracteres (como se entiende por la explicación anterior),
			// se muestra el borde/imagen verde
			document.getElementById("clave1").style.borderColor = "green";
			document.getElementById("clave1").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}

function compruebaClave2 () {
		
	// Variables de la clave2
	var miClave2 = document.getElementById("clave2").value;
	var miClave1 = document.getElementById("clave1").value;

	if (miClave2 == "") {
		// Si la clave2 está vacía, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorClave2").style.display = "block";
		document.getElementById("errorClave2").innerText = "Rellene este campo";
		document.getElementById("clave2").style.borderColor = "red";
		document.getElementById("clave2").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si la clave2 no está vacía, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorClave2").style.display = "none";
		document.getElementById("clave2").style.borderColor = "initial";
		document.getElementById("clave2").style.backgroundImage = "none";
		
		// Si la clave2 no está vacía, se comprueba si coincide con la clave1
		if (miClave2 !== miClave1) {
			// Si la clave2 no coincide con la clave1, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorClave2").style.display = "block";
			document.getElementById("errorClave2").innerText = "Las contraseñas no coinciden";
			document.getElementById("clave2").style.borderColor = "red";
			document.getElementById("clave2").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
		
		} else {
			// Si coinciden pero el número de caracteres es menor a 8, informamos también
			if (miClave2.length !== 8) {
				document.getElementById("errorClave2").style.display = "block";
				document.getElementById("errorClave2").innerText = "Las claves coinciden pero no deben tener menos de 8 caracteres";
				document.getElementById("clave2").style.borderColor = "red";
				document.getElementById("clave2").style.backgroundImage = "url(./images/error-icon.svg)";
				return false;
			
			} else {
				// Si la clave2 coincide con la clave1 y tienen el tamaño adecuado, se muestra el borde/imagen verde
				document.getElementById("clave2").style.borderColor = "green";
				document.getElementById("clave2").style.backgroundImage = "url(./images/success-icon.svg)";
				return true;
			}
		}
	}
}

function enviar () {
	
	// Llamamos a los 4 métodos anteriores
	var checkNombre = compruebaNombre();
	var checkEmail = compruebaEmail();
	var checkClave1 = compruebaClave1();
	var checkClave2 = compruebaClave2();
	
	// Si nada falla, o si falla algo, se informa vía alerta
	if (checkNombre == false || checkEmail == false || checkClave1 == false || checkClave2 == false) {
		alert ("Hay campos vacios o con errores, revíselos.");
	} else {
		alert ("Todo correcto, se ha registrado con éxito.");
	}

}
