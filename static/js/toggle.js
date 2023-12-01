document.addEventListener('DOMContentLoaded', function () {
    const ledToggle = document.getElementById('led-toggle');
    const ledState = document.getElementById('led-state');

    ledToggle.addEventListener('change', function () {
        const isLedOn = ledToggle.checked;
        ledState.textContent = isLedOn ? 'Encendido (ON)' : 'Apagado (OFF)';
        
        // Actualiza el valor del LED en el servidor
        updateLedState(isLedOn);
    });

    // Función para realizar la solicitud al servidor
    function updateLedState(isLedOn) {
        const url = 'https://backend-iot-9945b3a20353.herokuapp.com/dispositivos/1';
        const payload = {
            valor: isLedOn ? '1' : '0'
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar el estado del LED');
            }
            return response.json();
        })
        .then(data => {
            // Maneja la respuesta del servidor si es necesario
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});