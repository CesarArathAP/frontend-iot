document.addEventListener('DOMContentLoaded', function () {
    const ledToggle = document.getElementById('led-toggle');
    const ledState = document.getElementById('led-state');

    ledToggle.addEventListener('change', function () {
        const isLedOn = ledToggle.checked;
        ledState.textContent = isLedOn ? 'Encendido (ON)' : 'Apagado (OFF)';
        // Agrega aquí la lógica para encender o apagar el LED según el estado
    });
});