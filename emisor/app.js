// let Emitter = require('./emitter');
var Emitter = require('events');
const config = require('./config');
// Gran parte de la API central .js nodo se basa en una arquitectura asincrónica idiomática basada en eventos en la que ciertos tipos de objetos (llamados "emisores") emiten eventos con nombre que hacen que se llame a los objetos de función ("oyentes").

let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!'); // imprime Hello!
emtr.emit('greet'); // imrpime las 2 funciones greet

emtr.on('jump', () => {
    console.log('Someone jumped!');
});

console.log(emtr); // imprime obj
emtr.emit('jump'); // imrpime 'someone jumped!'
