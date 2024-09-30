const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('pizza-ordered', ()=>{
    console.log('On the waYyyyyyy');
    
})

emitter.emit('pizza-ordered')


