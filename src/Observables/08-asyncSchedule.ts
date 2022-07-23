import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000); -- algo que se va a ejecutar periodicamente en lapsos de tiempo

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// forma de utilizar un setTimeout con asyncScheduler
asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'Oscar');

// forma de utilizar el setInterval con asyncScheduler
// solo puede recibir funciones normales, 
// 3000 significa el intervalor en que inicialmente se va a ejecutar
// 0 significa el valor del state
// con asyncScheduler se crea un subscrpción la cual se puede unsubscribe para detener el intervalo o ejecución
const subscription = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    // se debe realizar un nuevo llamado cambiar el valor del state (0+1) y el tiempo o intervalo
    // en que se va a ejecuta
    this.schedule(state + 1, 1000);

}, 3000, 0);


// setTimeout(()=>{
//     subscription.unsubscribe()
// }, 6000); 

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);