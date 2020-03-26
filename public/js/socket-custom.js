var socket = io();
// Escuchar (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar (on)
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información (emit)
socket.emit('enviarMensaje', {
    usuario: 'Alex',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar (on)
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servdor: ', mensaje);
});