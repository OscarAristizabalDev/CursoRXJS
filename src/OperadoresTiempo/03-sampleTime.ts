import { fromEvent, asyncScheduler } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';


// Ejemplo 1
const click$ = fromEvent<PointerEvent>(document, 'click');

// sampleTime es un operador que solo toma la ultima emisión e ignora las otras
// emisiones durante el periodo de tiempo
click$.pipe(
    sampleTime(3000), // en este caso solo va a tomar el último evento click realizado dentro del segundo
    map(({ x, y }) => ({ x, y })), // del objeto PointerEvent por medio de la destructuración solo se toman las valores x, y 
).subscribe(console.log)


