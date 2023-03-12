const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

myEventEmitter.on('ultah', birthdayEventListener);

myEventEmitter.emit('ultah', 'Dorothy Putri');

