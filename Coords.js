const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert("Su navegador no soporta el acceso a la ubicación. Intenta con otro");
	}

	let idWatcher = null;

	const $latitud = document.querySelector("#latitud"),
		$longitud = document.querySelector("#longitud")

	const onUbicacionConcedida = ubicacion => {
		const coordenadas = ubicacion.coords;
		$latitud.innerText = coordenadas.latitude;
		$longitud.innerText = coordenadas.longitude;
	}

	const onErrorDeUbicacion = err => {
		$latitud.innerText = "Error obteniendo ubicación: " + err.message;
		$longitud.innerText = "Error obteniendo ubicación: " + err.message;
		console.log("Error obteniendo ubicación: ", err);
	}

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000 // Esperar solo 5 segundos
	};

	idWatcher = navigator.geolocation.watchPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);

	$latitud.innerText = "Cargando...";
	$longitud.innerText = "Cargando...";
};

document.addEventListener("DOMContentLoaded", funcionInit);